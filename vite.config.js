import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://bookstore-backend.azurewebsites.net',

        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace('/api', ''),
      },
    },
  },
});
