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
import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup'
import fs from 'fs/promises'
import { buildConfig } from './utils/config'
import { pathRewriter } from './utils'

async function buildFull(): Promise<void> {
  // rollup打包的配置信息
  const config = {
    input: path.resolve(zpRoot, 'index.ts'), // 打包的入口
    plugins: [nodeResolve(), typescript(), vue(), commonjs()],
    external: (id: string) => /^vue/.test(id) // 表示打包的时候不打包vue代码
  };
  // 整个组件库 两种使用方式 import 导入组件库 在浏览器中使用 script
  // esm umd
  const buildConfig = [
    {
      format: 'umd', // 打包的格式
      file: path.resolve(outDir, 'index.js'),
      name: 'dkPlus', // 全局的名字
      exports: 'named', // 导出的方式为命名导出
      globals: {
        // 表示使用的vue是全局的
        vue: 'Vue'
      }
    },
    {
      format: 'esm',
      file: path.resolve(outDir, 'index.esm.js')
    }
  ] as OutputOptions[];
  const bundle = await rollup(config);
  await Promise.all(buildConfig.map(config => bundle.write(config)));
}

async function buildEntry(): Promise<void> {
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

  const bundle = await rollup(config);

  await Promise.all(
    Object.values(buildConfig)
      .map(config => ({
        format: config.format,
        dir: config.output.path,
        paths: pathRewriter(config.output.name)
      }))
      .map(option => bundle.write(option as OutputOptions))
  );
}

export const buildFullComponent = parallel(buildFull, buildEntry)
