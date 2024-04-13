import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (outoutChunk) => {
        console.log('filename', outoutChunk.fileName)
        return outoutChunk.fileName.includes('core')
      },
    }),
  ],
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
