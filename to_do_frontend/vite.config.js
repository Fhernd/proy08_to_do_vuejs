import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js', // Asegura que Vite utiliza PostCSS para procesar Tailwind CSS
  },
})
