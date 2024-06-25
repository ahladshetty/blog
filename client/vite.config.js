import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/admin': {
        target: 'http://localhost:5000',
      },

      '/blog': {
        target: 'http://localhost:5000',
      },

    },

  },
  plugins: [react()],
})
