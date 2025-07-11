import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base: '/lewminru/', // ✅ Set the base path to your GitHub repo name
  plugins: [react()],
  server: {
    port: 3000
  }
})
