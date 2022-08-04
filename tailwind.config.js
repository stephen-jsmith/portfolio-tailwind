/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      colors:{
        utOrange: "#bf5700",
        utGray: "#333f48"
      },
        extend: {
          backgroundSize: {
            'size-200': '200% 200%',
          },
          backgroundPosition: {
            'pos-0': '0% 0%',
            'pos-100': '100% 100%',
          },
          margin: {
            'navHover' : '1px'
          },
        },
    },
    plugins: [],
};
