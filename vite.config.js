import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/azkar-app1/',
  plugins: [react()],
})
