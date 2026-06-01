// Import Vite configuration helper and official React plugin
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Main Vite build and development configuration setup
export default defineConfig({
  // Load React plugin for fast refresh and JSX compiling
  plugins: [react()],
})
