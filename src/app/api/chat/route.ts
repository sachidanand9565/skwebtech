import { GoogleGenerativeAI } from '@google/generative-ai';
import { NextRequest, NextResponse } from 'next/server';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);


const SYSTEM_PROMPT = `You are a helpful assistant for SK WebTech, a professional web & IT solutions company led by Sachidanand Kushwaha.

About SK WebTech:
- 10+ years of experience, 80+ projects completed, 100+ happy clients, 15+ countries served
- Contact: +91 9654603750 | info@skwebtech.in
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

    const model = genAI.getGenerativeModel({
      model: 'gemini-flash-latest',
      systemInstruction: SYSTEM_PROMPT,
    });

    const allButLast = messages.slice(0, -1);
    const firstUserIdx = allButLast.findIndex((m: { role: string }) => m.role === 'user');
    const validHistory = firstUserIdx === -1 ? [] : allButLast.slice(firstUserIdx);

    const history = validHistory.map((msg: { role: string; text: string }) => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.text }],
    }));

    const chat = model.startChat({ history });

    const lastMessage = messages[messages.length - 1].text;
    const result = await chat.sendMessage(lastMessage);
    const text = result.response.text();

    return NextResponse.json({ text });
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 });
  }
}
