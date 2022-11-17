import { Plugin } from 'vite'
import { promises as fs } from 'fs'
import less from 'less'
import path from 'path'

interface VitePluginLessOptions {
  entry: string
  output: string
}

export const VitePluginLess = (options: VitePluginLessOptions): Plugin => {
  return {
    name: 'vite-plugin-less',
    enforce: 'post',
    buildEnd: async function () {
      const data = await fs.readFile(options.entry, 'utf-8')
      const { css } = await less.render(data, {
        filename: path.resolve(options.entry)
      })
      this.emitFile({
        type: 'asset',
        name: options.output,
        source: css
      })
    }
  }
}
