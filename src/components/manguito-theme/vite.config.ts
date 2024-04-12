import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // entry: resolve(__dirname, 'index.ts'),
      // name: 'ManguitoTheme',
      // fileName: 'manguito-theme'
      entry: {
        core: resolve(__dirname, 'index.ts'),
        'mcl-theme': resolve(__dirname, 'mclTheme.ts'),
      },
      formats: ['es', 'cjs'],
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
