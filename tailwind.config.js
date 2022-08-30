/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {

        extend: {
            colors: {
                utOrange: "#bf5700",
                utGray: "#333f48",
                qciPurple: "#513E97",
                qciTeal: "#68C8D2",
            },
            backgroundSize: {
                "size-200": "200% 200%",
            },
            backgroundPosition: {
                "pos-0": "0% 0%",
                "pos-100": "100% 100%",
            },
            margin: {
                navHover: "1px",
            },
        },
    },
    plugins: [],
};
