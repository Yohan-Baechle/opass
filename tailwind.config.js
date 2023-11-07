/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: [
        './src/index.html',            // Chemin vers votre fichier HTML
        './src/assets/js/**/*.js',     // Chemin vers vos fichiers JavaScript
        './src/assets/css/**/*.css',   // Chemin vers vos fichiers CSS
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};