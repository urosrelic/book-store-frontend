import react from '@vitejs/plugin-react-swc';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  // eslint-disable-next-line no-undef
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: env.VITE_BOOK_STORE_BACKEND_HOST,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace('/api', '')
        }
      }
    }
  };
});