import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/job-craft-frontend/',   // 👈 must be EXACT repo name on GitHub
})
