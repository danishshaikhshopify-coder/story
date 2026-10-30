import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // relative base so built asset paths work under the GitHub Pages
  // project subpath (https://<user>.github.io/story/)
  base: './',
  plugins: [react()],
})
