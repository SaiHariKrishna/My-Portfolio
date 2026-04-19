/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      colors: {
        bg: {
          primary:  '#ffffff',
          section:  '#f8fafc',
          card:     '#ffffff',
        },
        text: {
          primary:   '#0f172a',
          secondary: '#475569',
          muted:     '#94a3b8',
        },
        accent: {
          DEFAULT: '#2563eb',
          light:   '#eff6ff',
          border:  '#bfdbfe',
          hover:   '#1d4ed8',
        },
        border: {
          DEFAULT: '#e2e8f0',
          strong:  '#cbd5e1',
        },
      },
      maxWidth: { content: '1120px' },
      boxShadow: {
        card:        '0 1px 4px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)',
        'card-hover':'0 12px 32px rgba(15,23,42,0.10), 0 3px 10px rgba(15,23,42,0.06)',
        btn:         '0 1px 2px rgba(15,23,42,0.08)',
        nav:         '0 1px 0 #e2e8f0',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(22px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.55s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in':    'fadeIn 0.4s ease both',
      },
    },
  },
  plugins: [],
}
