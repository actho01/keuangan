/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-login': "url('/hero-login.png')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'biru-btn': '#0077B5',
        dark: '#172B4D',
        ungu: '#5E72E4',
        primary: '#0475b4',
        light: '#F6F9FC',
        secondary: '#eb4d40',
        third: '#e4d42c',
        abu: '#8898AA',
        hijau: '#37A005',
      },
    },
  },
  plugins: [],
};
