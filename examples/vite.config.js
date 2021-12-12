import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://vitejs.dev/config/
console.log(vue)
export default defineConfig({
  root: resolve(process.cwd(), 'examples'),
  plugins: [vue()]
})
