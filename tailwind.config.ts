import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Aeonik', 'Rokh', 'sans-serif'],
      },
      keyframes: {
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-30px)' },
        }
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'spin-slow-reverse': 'spin 8s linear infinite reverse',
        'bounce-slow': 'bounce 3s infinite',
        'jump': 'jump 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config; 