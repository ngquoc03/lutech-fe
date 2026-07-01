/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#10B981',
        primaryDark: '#059669',
        secondary: '#2563EB',
        accent: '#F59E0B',
        background: '#F8FAFC',
        card: '#FFFFFF',
        text: '#0F172A',
        textLight: '#64748B',
        border: '#E2E8F0',
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Phông chữ chuẩn hóa cho tiếng Việt
      },
    },
  },
  plugins: [],
}