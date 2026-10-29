import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  server: { host: '127.0.0.1', port: 5190, strictPort: true, hmr: false },
  preview: { host: '127.0.0.1', port: 5191 },
  build: { target: 'es2022', assetsInlineLimit: 0, chunkSizeWarningLimit: 4000 },
  optimizeDeps: { exclude: ['@dimforge/rapier3d-compat'] },
});
