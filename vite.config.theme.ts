import { resolve } from 'path'
import postcssPresetEnv from 'postcss-preset-env'
import autoprefixer from 'autoprefixer'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    css: {
      /**
       * @name postcssPresetEnv
       * @see postcss-preset-env https://www.npmjs.com/package/postcss-preset-env
       * @description 针对一些前沿的 css 进行降级处理
       */
      /**
       * @name autoprefixer
       * @see autoprefixer https://www.npmjs.com/package/autoprefixer
       * @description 为 CSS 添加浏览器前缀 -o -ms -moz -webkit 等等
       */
      postcss: {
        plugins: [postcssPresetEnv(), autoprefixer()]
      }
    },
    build: {
      outDir: resolve(__dirname, 'dist/dkPlus'),
      emptyOutDir: false,
      rollupOptions: {
        input: resolve(__dirname, 'packages/theme-chalk/index.scss'),
        output: {
          /**
           * 取消文件名 hash 值
           * @see output.assetFileNames https://rollupjs.org/guide/en/#outputassetfilenames
           *  @description 为了避免在每次更改文件时都会更改文件名，可以使用 assetFileNames 选项来控制文件名的生成方式。默认情况下，它们是根据内容哈希生成的，但是您可以使用以下占位符来控制它们的生成方式：
           */
          assetFileNames: '[name].[ext]'
        }
      }
    }
  }
}
