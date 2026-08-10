import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts}',
  ],
  safelist: [
    { pattern: /^(from|to|via)-(blue|indigo|emerald|green|purple|violet|orange|red|pink|rose|slate|gray|cyan|teal|amber|fuchsia|sky)-(400|500|600|700)$/ },
    { pattern: /^bg-gradient-to-(r|br|bl|tr)$/ },
  ],
  theme: {
    extend: {
      // SK WebTech design tokens — premium light sapphire/azure system (matches the SK emblem)
      colors: {
        // Light surfaces ("void" kept as the token name so every bg-void-* usage converts in place)
        void: {
          DEFAULT: '#FAFBFE',
          50: '#F1F5FB',
          100: '#FFFFFF',
          200: '#E9EEF7',
          300: '#DEE6F2',
        },
        // Primary — sapphire azure (logo blue → refined, less neon)
        primary: {
          50: '#EEF6FF',
          100: '#D9EAFF',
          200: '#B6D8FF',
          300: '#85BDFF',
          400: '#4D9DFB',
          500: '#2E7FF2',
          600: '#1D63D8',
          700: '#1A4FB2',
          800: '#1B428D',
          900: '#1B3A72',
          950: '#132548',
        },
        // Secondary — soft violet (#7B61FF)
        secondary: {
          50: '#F4F1FF',
          100: '#EBE5FF',
          200: '#D9CFFF',
          300: '#BDA9FF',
          400: '#9D82FF',
          500: '#7B61FF',
          600: '#6A46F5',
          700: '#5B35D8',
          800: '#4B2CAF',
          900: '#3F278C',
          950: '#251654',
        },
        // Accent — aqua highlight (#22D3EE)
        accent: {
          50: '#ECFEFF',
          100: '#CFFAFE',
          200: '#A5F3FC',
          300: '#67E8F9',
          400: '#38E0F5',
          500: '#22D3EE',
          600: '#0BB8D4',
          700: '#0E94AB',
          800: '#12768A',
          900: '#155E75',
          950: '#083D4E',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-space-grotesk)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out both',
        'slide-up': 'slideUp 0.6s ease-out both',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'marquee': 'marquee var(--marquee-duration, 40s) linear infinite',
        'marquee-reverse': 'marquee var(--marquee-duration, 40s) linear infinite reverse',
        'spin-slow': 'spin 12s linear infinite',
        'gradient-x': 'gradientX 8s ease infinite',
        'aurora': 'aurora 14s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.4s linear infinite',
        'glow-pulse': 'glowPulse 3.5s ease-in-out infinite',
        'orbit': 'orbit 18s linear infinite',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        aurora: {
          '0%': { transform: 'translate(-8%, -4%) scale(1) rotate(0deg)' },
          '50%': { transform: 'translate(6%, 6%) scale(1.15) rotate(12deg)' },
          '100%': { transform: 'translate(-4%, 4%) scale(0.95) rotate(-8deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(var(--orbit-radius, 120px)) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(var(--orbit-radius, 120px)) rotate(-360deg)' },
        },
        scrollDot: {
          '0%': { opacity: '0', transform: 'translateY(0)' },
          '35%': { opacity: '1' },
          '100%': { opacity: '0', transform: 'translateY(12px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 12px -3px rgba(15, 23, 42, 0.07), 0 8px 20px -4px rgba(15, 23, 42, 0.05)',
        'soft-lg': '0 12px 40px -10px rgba(15, 23, 42, 0.12)',
        'card': '0 1px 3px rgba(15, 23, 42, 0.05), 0 8px 24px -8px rgba(15, 23, 42, 0.1)',
        'card-hover': '0 24px 48px -16px rgba(46, 127, 242, 0.22)',
        'glow-sm': '0 0 16px -2px rgba(46, 127, 242, 0.3)',
        'glow': '0 8px 32px -6px rgba(46, 127, 242, 0.4)',
        'glow-lg': '0 12px 56px -8px rgba(46, 127, 242, 0.4)',
        'glow-violet': '0 8px 32px -6px rgba(123, 97, 255, 0.35)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
        // Layered depth shadow for 3D-look cards
        'depth': '0 1px 2px rgba(15,23,42,0.06), 0 10px 28px -8px rgba(15,23,42,0.12), 0 28px 64px -16px rgba(46,127,242,0.16)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #4D9DFB 0%, #2E7FF2 45%, #22D3EE 100%)',
        'brand-gradient-soft': 'linear-gradient(120deg, rgba(46,127,242,0.16), rgba(34,211,238,0.16))',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(46,127,242,0.12), transparent 65%)',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
