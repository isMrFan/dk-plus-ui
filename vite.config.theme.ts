import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    css: {
      postcss: {
        plugins: [postcssPresetEnv(), autoprefixer()]
      }
    },
    build: {
      outDir: resolve(__dirname, 'dist/dist'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'packages/theme-chalk/index.scss'),
        output: {
          assetFileNames: '[name].[ext]'
        }
      }
    }
  }
}
