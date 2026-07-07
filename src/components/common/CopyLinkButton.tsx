/**
 * CopyLinkButton Component
 * Client-side button for copying URLs to clipboard
 */

'use client';

import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface CopyLinkButtonProps {
  url: string;
  className?: string;
}

export default function CopyLinkButton({ url, className = '' }: CopyLinkButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`w-9 h-9 bg-white/[0.05] border border-white/10 rounded-xl flex items-center justify-center
               text-slate-400 hover:bg-primary-500 hover:text-void hover:border-transparent transition-all duration-200 ${className}`}
      aria-label={copied ? 'Copied!' : 'Copy link'}
      title={copied ? 'Copied!' : 'Copy link'}
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
