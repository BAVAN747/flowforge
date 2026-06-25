import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      { find: /^#\/?(.*)/, replacement: path.resolve(__dirname, './src/$1') }
    ],
  },
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:5004',
        changeOrigin: true,
      },
      '/api-docs': {
        target: 'http://localhost:5004',
        changeOrigin: true,
      },
    },
  },
});
