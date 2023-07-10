import { resolve } from 'path'
import autoprefixer from 'autoprefixer'
import { readdirSync } from 'fs'
import postcssPresetEnv from 'postcss-preset-env'
import type { UserConfigExport } from 'vite'
const BringIn: string = resolve(__dirname, 'packages/theme-chalk/src')
export default (): UserConfigExport => {
  return {
    css: {
      postcss: {
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
        plugins: [postcssPresetEnv(), autoprefixer()]
      },
      preprocessorOptions: {
        /**
         * @see css.preprocessorOptions https://cn.vitejs.dev/config/shared-options.html#css-preprocessoroptions
         * @description 所有预处理器选项还支持 additionalData 选项，可以用于为每个样式内容注入额外代码。请注意，如果注入的是实际的样式而不仅仅是变量时，那么这些样式将会在最终的打包产物中重复出现。
         */
        scss: {
          additionalData: '$injectedColor: orange;'
        }
      },
      modules: {
        /**
         * @see css.modules https://cn.vitejs.dev/config/shared-options.html#css-modules
         * @description 启用 CSS 模块
         */

        scopeBehaviour: 'local'
      }
    },
    build: {
      assetsDir: 'theme-chalk',
      rollupOptions: {
        input: readdirSync(BringIn).map((name): string => {
          return `${BringIn}/${name}`
        }),
        output: {
          entryFileNames: 'theme-chalk/[name].js',
          chunkFileNames: 'theme-chalk/[name].js',
          assetFileNames: 'theme-chalk/[name].[ext]'
        }
      }
    }
  }
}
