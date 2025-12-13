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
      className={`w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center
               text-gray-600 hover:bg-gray-800 hover:text-white transition-all duration-200 ${className}`}
      aria-label={copied ? 'Copied!' : 'Copy link'}
      title={copied ? 'Copied!' : 'Copy link'}
    >
      {copied ? <Check size={18} /> : <Copy size={18} />}
    </button>
  );
}
