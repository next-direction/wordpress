/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    content: [
        './src/js/*.js',
        './src/js/**/*.{js,vue}',
        './web/app/themes/ndblog/**/*.twig',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
};
