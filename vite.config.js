import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

/* eslint-env node */
export default defineConfig(({ mode }) => {

  const env = loadEnv(mode, process.cwd(), '');
  const backendUrl = process.env.VERCEL_URL

    ? `https://${process.env.VERCEL_URL}`
    : env.VITE_BOOK_STORE_BACKEND_HOST;

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: backendUrl,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api', '')
        }
      }
    }
  };
});