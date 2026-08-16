'use client';

/**
 * Defers the chatbot bundle out of the critical path — it loads after
 * hydration instead of blocking first paint / TBT.
 */

import dynamic from 'next/dynamic';

const ChatBot = dynamic(() => import('./ChatBot'), { ssr: false });

export default function LazyChatBot() {
  return <ChatBot />;
}
