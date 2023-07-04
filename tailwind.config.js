// 'darkblue': '#26425d',
// 'dark': '#1c2834'
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./Components/**/*.{js,ts,jsx,tsx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'darkblue': '#26425d',
                'dark': '#1c2834'
            }
        },
    },
    plugins: [],
}