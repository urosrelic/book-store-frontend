import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://book-store-backend-production-4e2d.up.railway.app/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
  },
});
