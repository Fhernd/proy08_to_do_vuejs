/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",          // Asegúrate de incluir el archivo HTML raíz.
    "./src/**/*.{vue,js,ts}", // Incluye todos los archivos Vue, JS y TS en src.
  ],
  theme: {
    extend: {}, // Aquí puedes personalizar colores, tamaños, etc.
  },
  plugins: [],
}
