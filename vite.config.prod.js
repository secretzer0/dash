import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/dash/',
  build: {
    // Minification options
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.trace'],
        passes: 3,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        unsafe_math: true,
        unsafe_proto: true,
        unsafe_regexp: true
      },
      mangle: {
        properties: {
          regex: /^_/
        }
      },
      format: {
        comments: false,
        ascii_only: true
      }
    },
    
    // Output options
    outDir: 'dist',
    assetsDir: 'assets',
    
    // Code splitting optimization
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'mui-vendor': ['@mui/material', '@mui/x-charts', '@emotion/react', '@emotion/styled'],
          'chart-vendor': ['react-circular-progressbar']
        },
        // Shorter file names
        chunkFileNames: 'js/[name]-[hash:8].js',
        entryFileNames: 'js/[name]-[hash:8].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name]-[hash:8][extname]`
          } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
            return `fonts/[name]-[hash:8][extname]`
          } else {
            return `[ext]/[name]-[hash:8][extname]`
          }
        }
      }
    },
    
    // Asset optimization
    assetsInlineLimit: 4096, // Inline assets smaller than 4kb
    
    // Source maps - disable for smallest build
    sourcemap: false,
    
    // CSS code splitting
    cssCodeSplit: true,
    
    // Chunk size warnings
    chunkSizeWarningLimit: 500,
    
    // Report compressed size
    reportCompressedSize: true,
    
    // Clear output directory before build
    emptyOutDir: true
  },
  
  // Dependency optimization
  optimizeDeps: {
    include: ['react', 'react-dom', '@mui/material', '@mui/x-charts']
  }
})