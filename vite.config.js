import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: "./",
  build: {
    outDir: 'dist-preact'
  },
  server: {
    port: 5123,
    strictPort: true
  }
})
