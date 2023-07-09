import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import dkNamePlugin from './packages/dk-setup-name'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { name, version } from './packages/dk-plus/package.json'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    define: {
      /** 检测是否为生产环境 */
      __DEV__: process.env.NODE_ENV !== 'production'
    },
    /**
     * 插件配置
     *
     * @see plugins https://cn.vitejs.dev/config/shared-options.html#plugins
     */
    plugins: [
      /**
       * vue 插件
       *
       * @see vite-plugin-vue https://github.com/vitejs/vite-plugin-vue
       */
      vue(),
      /**
       * 打包类型
       *
       * @see vite-plugin-dts https://github.com/qmhc/vite-plugin-dts
       */
      dts({
        skipDiagnostics: true /** 是否跳过类型诊断 */,
        staticImport: true /** 是否将动态引入转换为静态 */,
        outputDir: ['./dist/lib', './dist/es'] /** 可以指定一个数组来输出到多个目录中 */,
        insertTypesEntry: true /** 是否生成类型声明入口 */,
        cleanVueFileName: true /** 是否将 '.vue.d.ts' 文件名转换为 '.d.ts' */,
        copyDtsFiles: true /** 是否将源码里的 .d.ts 文件复制到 outputDir */,
        include: ['./packages/components'] /** 手动设置包含路径的 glob */,
        /** 构建后回调钩子 */
        afterBuild: (): void => {
          move()
        }
      }),
      /** 可设置组件名称 */
      dkNamePlugin()
    ],
    css: {},

    build: {
      target: 'modules' /** 这是指 支持原生 ES 模块、原生 ESM 动态导入 */,
      minify: true /** 压缩代码 */,
      chunkSizeWarningLimit: 2 /** 打包的组件超过 2kb 警告提示 */,
      reportCompressedSize: true /** 启用 gzip 压缩大小报告 */,
      emptyOutDir: false,
      outDir: resolve(__dirname, './dist') /** 指定输出路径 */,

      lib: {
        name: 'dk-plus' /** 包名 */,
        entry: resolve(__dirname, 'packages/components/index.ts') /** 打包入口 */
      },

      rollupOptions: {
        external: ['vue'],
        output: [
          {
            name: 'dk-plus' /** 包名 */,
            format: 'umd',
            exports: 'named',
            sourcemap: false,
            dir: 'dist/dist',
            entryFileNames: 'index.umd.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            manualChunks: undefined,
            inlineDynamicImports: false,
            globals: {
              vue: 'Vue'
            } /** 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量 */,
            namespaceToStringTag: true
          },
          {
            format: 'es',

            exports: 'named',

            dir: 'dist/es',

            sourcemap: false,

            entryFileNames: 'index.js',

            chunkFileNames: '[name].js',

            assetFileNames: '[name].[ext]',

            inlineDynamicImports: false,

            manualChunks: undefined,

            preserveModules: true,

            namespaceToStringTag: true
          },
          {
            format: 'cjs',
            exports: 'named',
            dir: 'dist/lib',
            sourcemap: false,
            entryFileNames: 'index.js',
            chunkFileNames: '[name].js',
            assetFileNames: '[name].[ext]',
            inlineDynamicImports: false,
            manualChunks: undefined,
            preserveModules: true,
            namespaceToStringTag: true
          }
        ]
      }
    }
  }
}

/** 打包结束之后将一些静态文件进行移入 */
const move = (): void => {
  const files = [
    { input: './README.md', outDir: 'dist/README.md' },
    { input: './packages/dk-plus/package.json', outDir: 'dist/package.json' },
    { input: './LICENSE', outDir: 'dist/LICENSE' }
  ] as const

  files.forEach((item): void => {
    copyFileSync(item.input, item.outDir)
  })

  console.warn('\n' + `${name} ${version} 版本打包成功~~~` + '\n')
}
