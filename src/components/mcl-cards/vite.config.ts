import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // entry: resolve(__dirname, 'index.ts'),
      // name: 'MclCards',
      // fileName: 'mcl-cards',
      entry: resolve(__dirname, 'index.ts'),
      name: 'MclCards',
      fileName: 'mcl-cards',
      // entry: {
      //   'mcl-cards': resolve(__dirname, 'index.ts'),
      // },
      // formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
