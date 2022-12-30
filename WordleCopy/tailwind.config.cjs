/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            colors: {
                blue: {
                    DEFAULT: '#057EFF',
                    50: '#BDDDFF',
                    100: '#A8D2FF',
                    200: '#80BDFF',
                    300: '#57A8FF',
                    400: '#2E93FF',
                    500: '#057EFF',
                    600: '#0063CC',
                    700: '#004794',
                    800: '#002C5C',
                    900: '#001124',
                },
            },
        },
    },
    plugins: [],
};
