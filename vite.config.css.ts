import { resolve } from 'path'
import { readdirSync } from 'fs'
import postcssPresetEnv from 'postcss-preset-env' //
import autoprefixer from 'autoprefixer' //
import type { UserConfigExport } from 'vite'

const input: string = resolve(__dirname, 'packages/theme-chalk/src')

export default (): UserConfigExport => {
  return {
    css: {
      postcss: {
        plugins: [
          /**
           * 针对一些前沿的 css 进行降级
           *
           * @see postcss-preset-env https://www.npmjs.com/package/postcss-preset-env
           */
          postcssPresetEnv(),
          /**
           * 自动添加浏览器厂商前缀
           *
           * @see autoprefixer https://www.npmjs.com/package/autoprefixer
           */
          autoprefixer()
        ]
      },

      preprocessorOptions: {
        scss: {
          additionalData: '$injectedColor: orange;'
        }
      },

      modules: {
        scopeBehaviour: 'local'
      }
    },
    build: {
      assetsDir: 'theme-chalk',
      rollupOptions: {
        input: readdirSync(input).map((name): string => {
          return `${input}/${name}`
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
