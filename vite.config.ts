import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/SamuelCabeleireiro/', // 👈 adicione esta linha
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
})
