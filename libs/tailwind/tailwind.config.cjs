/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./node_modules/@hm/ui/src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./stories/**/*.{js,jsx,ts,tsx}",
   ],
   darkMode: 'selector',
    theme: {
      extend: {},
    },
    plugins: [],
  };