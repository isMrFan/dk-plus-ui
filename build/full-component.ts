/**
 * @name index
 * @author fankai16
 * @Time 2022/12/29
 * @description 打包文件输出过滤设置
 **/
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import { parallel } from 'gulp'
import path from 'path'
import { outDir, zpRoot } from './utils/paths'
import { rollup, OutputOptions } from 'rollup'
import fs from 'fs/promises'
import { buildConfig } from './utils/config'
import { pathRewriter } from './utils'

const buildFull = async () => {
  console.log('------------------buildFull entry---------------------')
  // rollup打包的配置信息
  const config = {
    input: path.resolve(zpRoot, 'index.ts'), // 打包的入口
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: id => /^vue/.test(id) // 表示打包的时候不打包vue代码
  }
  // 整个组件库 两种使用方式 import 导入组件库 在浏览器中使用 script
  // esm umd
  const buildConfig = [
    {
      format: 'umd', // 打包的个数
      file: path.resolve(outDir, 'index.js'),
      name: 'dkPlus', // 全局的名字
      exports: 'named', // 导出的名字 用命名的方式导出  liraryTarget:"var" name:""
      globals: {
        // 表示使用的vue是全局的
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(outDir, 'index.esm.js')
    }
  ]
  console.log('------------------Bundle created---------------------')
  let bundle = await rollup(config)
  console.warn(bundle)
  console.log('------------------Bundle created end---------------------')
  console.log('------------------buildFull end---------------------')
  return Promise.all(buildConfig.map(isConfig => bundle.write(isConfig as OutputOptions)))
}

async function buildEntry() {
  console.log('------------------buildEntry entry---------------------');
  try {
    const entryFiles = await fs.readdir(zpRoot, { withFileTypes: true });
    const entryPoints = entryFiles
      .filter(f => f.isFile())
      .filter(f => !['package.json'].includes(f.name))
      .map(f => path.resolve(zpRoot, f.name));

    const config = {
      input: entryPoints,
      plugins: [nodeResolve(), vue(), typescript()],
      external: (id: string) => /^vue/.test(id) || /^@dk-plus/.test(id)
    };

    console.log('------------------Building bundle------------------');
    const bundle = await rollup(config);
    console.log('------------------Bundle created------------------', bundle);

    return Promise.all(
      Object.values(buildConfig)
        .map(isConfig => ({
          format: isConfig.format,
          dir: isConfig.output.path,
          paths: pathRewriter(isConfig.output.name)
        }))
        .map(option => bundle.write(option as OutputOptions))
    );
  } catch (error) {
    console.error('------------------Build entry error------------------');
    console.error(error)
    console.error('------------------Build entry error end------------------');
    throw new Error('buildEntry to build entry ' );
  }
}


export const buildFullComponent = parallel(async () => {
  try {
    await buildFull();
    await buildEntry();
  }  catch (error) {
    console.error('------------------Build component error------------------');
    console.error(error);
    console.error('------------------Build component error end------------------');
    throw new Error('Failed to build component');
  }}

)
