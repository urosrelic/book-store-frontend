import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

/* eslint-env node */
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '^/api/.*': {
          target: env.VITE_BOOK_STORE_BACKEND_HOST,
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});