/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0a0a0f',
        surface: '#12121a',
        card: '#1a1a28',
        border: '#2a2a40',
        accent: '#6c63ff',
        neon: '#00f5c4',
        text: '#e8e8f0',
        muted: '#7a7a9a',
      },
      backgroundImage: {
        grad: 'linear-gradient(135deg, #6c63ff 0%, #00f5c4 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      keyframes: {
        menuBtn: {
          '0%': { transform: 'scaleX(1)' },
          '100%': { transform: 'scaleX(0.5)' },
        },
        pulseGlow: {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-50%) scale(1.12)', opacity: '1' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' },
        },
        fadeDown: {
          from: { opacity: '0', transform: 'translateY(-20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        floatAnim: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-40px) rotate(180deg)' },
          '100%': { transform: 'translateY(0) rotate(360deg)' },
        },
        spinRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(108,99,255,0)' },
          '50%': { boxShadow: '0 0 40px 8px rgba(108,99,255,0.35)' },
          '100%': { boxShadow: '0 0 0 0 rgba(108,99,255,0)' },
        },
        rotateDots: {
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        menuBtn: 'menuBtn 400ms ease-in-out alternate infinite',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        pulseGlowRev: 'pulseGlow 8s ease-in-out infinite reverse',
        blink: 'blink 1.5s ease-in-out infinite',
        cursorBlink: 'blink 0.7s infinite',
        fadeDown: 'fadeDown 0.8s ease both',
        fadeUp: 'fadeUp 0.9s ease both',
        floatAnim: 'floatAnim linear infinite',
        spinRing: 'spinRing 10s linear infinite',
        rotateDots: 'rotateDots 20s linear infinite',
      },
    },
  },
  plugins: [],
};
