import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // eslint-disable no-undef

  const env = loadEnv(mode, process.cwd(), '');
  // eslint-disable no-undef
  const backendUrl = process.env.VERCEL_URL
    // eslint-disable no-undef

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