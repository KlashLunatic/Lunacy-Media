import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Report compressed size
    reportCompressedSize: true,
  },
})
