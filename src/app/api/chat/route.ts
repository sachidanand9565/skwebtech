import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

/**
 * Model choice matters more than it looks on the free tier.
 *
 * The chatbot was failing because it used `gemini-flash-latest`, and that
 * alias now resolves to gemini-3.8-flash — whose free-tier quota is 20
 * requests PER DAY. Twenty visitor messages and the assistant was dead for
 * the rest of the day, returning 429 RESOURCE_EXHAUSTED.
 *
 * Lite models carry a far larger free allowance and are more than capable of
 * answering service and pricing questions, so the order below leads with one.
 * Each entry was verified callable with this key; `gemini-2.5-flash` and
 * `gemini-2.5-flash-lite` were dropped because they now return 404
 * ("no longer available to new users").
 *
 * Gemini also returns intermittent 503 "high load" responses, so transient
 * failures are retried before moving down the list.
 */
const MODELS = ['gemini-flash-lite-latest', 'gemini-3.5-flash-lite', 'gemini-3.6-flash'];
const MAX_ATTEMPTS_PER_MODEL = 2;
const RETRY_BASE_DELAY_MS = 400;

function errorStatus(err: unknown): number | undefined {
  const status = (err as { status?: number })?.status;
  if (typeof status === 'number') return status;
  const m = String((err as Error)?.message || '').match(/\[(\d{3})\s/);
  return m ? Number(m[1]) : undefined;
}

/** Quota exhausted — the daily allowance won't come back, so switch models now. */
function isQuotaExhausted(err: unknown): boolean {
  if (errorStatus(err) === 429) return true;
  return /RESOURCE_EXHAUSTED|exceeded your current quota/i.test(String((err as Error)?.message || ''));
}

/** Overload/timeout — the same model will likely work on a second try. */
function isRetryable(err: unknown): boolean {
  const status = errorStatus(err);
  if (typeof status === 'number') return status >= 500;
  return /overload|high load|unavailable|timeout|fetch failed/i.test(String((err as Error)?.message || ''));
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));


const SYSTEM_PROMPT = `You are a helpful assistant for SK WebTech, a professional web & IT solutions company led by Sachidanand Kushwaha.

About SK WebTech:
- 10+ years of experience, 80+ projects completed, 100+ happy clients, 15+ countries served
- Contact: +91 6386103750 | info@skwebtech.in
- Business hours: Mon-Fri 9AM-6PM, Sat 10AM-4PM, Sun Closed
- Website: https://www.skwebtech.in

Services offered:
1. Web Development - Custom responsive websites (Next.js, React, Node.js, TypeScript, Tailwind)
2. WhatsApp Business Solutions - API integration, chatbots, automation, mass messaging
3. E-Commerce Development - Online stores, payment gateways (Shopify, WooCommerce, Magento)
4. SEO & Digital Marketing - Technical SEO, content strategy, link building
5. Mobile App Development - iOS/Android apps (React Native, Flutter)
6. UI/UX Design - User-centered design (Figma, Adobe XD)
7. Maintenance & Support - 24/7 monitoring, security updates

Instructions:
- Answer in the same language the user writes in (Hindi or English)
- Be friendly, professional, and concise
- For pricing or project-specific questions, ask them to contact via phone/email or WhatsApp
- Always try to guide users toward getting a free consultation
- Keep responses short (2-4 sentences max unless detail is needed)
- Do NOT make up specific pricing numbers`;

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const lastMessage = String(messages[messages.length - 1]?.text || '').trim();
    if (!lastMessage) {
      return NextResponse.json({ error: 'Message cannot be empty.' }, { status: 400 });
    }

    // Gemini history must start with a user turn, so drop the welcome message
    // (and anything before the first user turn) before building it.
    const allButLast = messages.slice(0, -1);
    const firstUserIdx = allButLast.findIndex((m: { role: string }) => m.role === 'user');
    const validHistory = firstUserIdx === -1 ? [] : allButLast.slice(firstUserIdx);

    const history = validHistory
      .filter((msg: { text?: string }) => String(msg.text || '').trim())
      .map((msg: { role: string; text: string }) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      }));

    let lastError: unknown;

    for (const modelName of MODELS) {
      for (let attempt = 1; attempt <= MAX_ATTEMPTS_PER_MODEL; attempt++) {
        try {
          const model = genAI.getGenerativeModel({
            model: modelName,
            systemInstruction: SYSTEM_PROMPT,
          });
          const chat = model.startChat({ history });
          const result = await chat.sendMessage(lastMessage);
          const text = result.response.text();
          if (!text?.trim()) throw new Error('Empty response from model');
          return NextResponse.json({ text });
        } catch (err) {
          lastError = err;

          if (isQuotaExhausted(err)) {
            // Daily allowance is gone; retrying this model is pointless
            console.warn(`Chat API quota exhausted (${modelName}), trying next model`);
            break;
          }

          if (!isRetryable(err)) {
            // Auth, bad model name or a rejected prompt — other models won't help
            console.error(`Chat API permanent error (${modelName}):`, err);
            return NextResponse.json(
              { error: 'Sorry, I could not answer that. Please try rephrasing.' },
              { status: 502 }
            );
          }

          console.warn(
            `Chat API transient error (${modelName}, attempt ${attempt}):`,
            (err as Error)?.message
          );
          if (attempt < MAX_ATTEMPTS_PER_MODEL) {
            await sleep(RETRY_BASE_DELAY_MS * attempt);
          }
        }
      }
    }

    // Every model stayed overloaded — give the visitor a way to reach a human
    console.error('Chat API exhausted all models:', lastError);
    return NextResponse.json(
      {
        error:
          'Our assistant is busy right now. Please try again in a moment, or reach us on WhatsApp at +91 6386103750.',
      },
      { status: 503 }
    );
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
