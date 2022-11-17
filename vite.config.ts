import { resolve } from 'path'
import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'
import { VitePluginLess } from './plugins/vite-plugin-less'

const resolvePath = (str: string) => resolve(__dirname, str)

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolvePath('./src/index.ts'),
      name: 'we-table',
      formats: ['es']
    },
    rollupOptions: {
      output: {
        dir: 'dist',
        entryFileNames: 'index.js'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolvePath('./src')
    }
  },
  plugins: [
    VitePluginLess({
      entry: resolvePath('./src/index.less'),
      output: 'index.wxss'
    }),
    viteStaticCopy({
      targets: [
        {
          src: [
            resolvePath('./src/index.wxml'),
            resolvePath('./src/index.json')
          ],
          dest: resolvePath('./dist')
        }
      ]
    })
  ]
})
