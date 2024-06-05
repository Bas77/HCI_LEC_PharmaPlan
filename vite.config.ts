import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/HCI_LEC_PharmaPlan/',
  plugins: [react()],
})
