import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dash/',
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
      format: {
        comments: false,
      }
    },
    rollupOptions: {
      output: {
        // Single vendor chunk to avoid loading order issues
        manualChunks: {
          vendor: ['react', 'react-dom', '@mui/material', '@mui/x-charts', '@emotion/react', '@emotion/styled', 'react-circular-progressbar']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  }
})