import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { fileURLToPath, URL } from 'node:url';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)), // Configura el alias para el directorio "src"
    },
  },
  css: {
    postcss: './postcss.config.js', // Asegura que Vite utiliza PostCSS para procesar Tailwind CSS
  },
});
