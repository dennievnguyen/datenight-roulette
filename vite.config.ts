import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/datenight-roulette/',
  server: {
    host: false,
    port: 5173,
  },
})
