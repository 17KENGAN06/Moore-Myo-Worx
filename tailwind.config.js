// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          500: '#111D51',
        },
        coral: {
          500: '#FB7760',
        },
        silver: {
          500: '#FFFFFF26',
          900: '#FFFFFFB3',
        },
      },
      boxShadow: {
        coralGlow: '0 4px 19.5px 0 rgba(251, 119, 96, 0.5)',
      },
    },
  },
  plugins: [],
};
