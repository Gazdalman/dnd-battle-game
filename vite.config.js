import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    port: 5000, // Replace 3000 with your desired port number
  },
  base: '/dnd-battle-game/',
  plugins: [react()],
})
