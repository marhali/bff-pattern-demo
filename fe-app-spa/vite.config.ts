import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    // Run on IPv4 to fix proxy forward headers (forward-for: misses brackets?)
    host: '0.0.0.0',
    proxy: {
      '/auth': {
        target: 'http://localhost:8089',
        xfwd: true,
      },
      '/api': {
        target: 'http://localhost:8080',
        xfwd: true,
      },
    },
  },
});
