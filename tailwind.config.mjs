/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";

export default {
  content: ['./src/**/*.{astro,html,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0A1628',
        'bg-secondary': '#0F1B2E',
        fg: '#F5F5F0',
        muted: 'rgba(245,245,240,0.7)',
        accent: '#D4A24C',
        accent2: '#C9A961',
        border: '#2C3E50',
        hover: 'rgba(255,255,255,0.04)',
      },
      fontFamily: {
        heading: ["'Black Han Sans', sans-serif", 'system-ui', 'sans-serif'],
        body: ["'Pretendard', sans-serif", 'system-ui', 'sans-serif'],
        mono: ["'JetBrains Mono', monospace", 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        prose: '720px',
        wide: '1100px',
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': '#F5F5F0',
            '--tw-prose-headings': '#F5F5F0',
            '--tw-prose-links': '#D4A24C',
            '--tw-prose-bold': '#D4A24C',
            '--tw-prose-quotes': 'rgba(245,245,240,0.7)',
            '--tw-prose-quote-borders': '#D4A24C',
            '--tw-prose-code': '#D4A24C',
            '--tw-prose-borders': '#2C3E50',
            maxWidth: '720px',
            fontSize: '1.05rem',
            lineHeight: '1.85',
            'h1, h2, h3, h4': {
              fontFamily: 'var(--font-heading)',
              fontWeight: '700',
              letterSpacing: '-0.01em',
            },
            h2: {
              borderBottom: '1px solid #2C3E50',
              paddingBottom: '0.5rem',
              marginTop: '3rem',
            },
            blockquote: {
              background: 'rgba(255,255,255,0.04)',
              borderRadius: '0 8px 8px 0',
              padding: '0.8rem 1.2rem',
              fontStyle: 'italic',
            },
            img: {
              borderRadius: '12px',
              boxShadow: '0 6px 24px rgba(0,0,0,0.12)',
              margin: '2rem auto',
            },
            code: {
              background: 'rgba(255,255,255,0.04)',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid #2C3E50',
              fontWeight: '500',
            },
            'code::before': { content: '""' },
            'code::after': { content: '""' },
          },
        },
      }),
    },
  },
  plugins: [typography],
};
