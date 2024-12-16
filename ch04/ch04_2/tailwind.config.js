/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html", // 루트에 있는 HTML 파일
    "./src/**/*.{js,ts,jsx,tsx}", // 소스 코드에 포함된 모든 JS/TS/JSX/TSX 파일
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
