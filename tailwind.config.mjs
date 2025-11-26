/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte}',
    './*.{js,mjs,ts}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      colors: {
        app: {
          bg: '#020617',
          elevated: '#020617',
        },
        accent: {
          DEFAULT: '#22d3ee',
          soft: 'rgba(34, 211, 238, 0.12)',
        },
      },
      borderColor: {
        subtle: 'rgba(148, 163, 184, 0.2)',
      },
    },
  },
  plugins: [],
};

