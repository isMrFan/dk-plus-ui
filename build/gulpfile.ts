// @ts-check
/**
 * @name gulpfile.ts
 * @author fanKai16
 * @Time 2022/12/29
 * @description 打包
 **/
// 在当前文件中添加以下注释

import type {TaskFunction } from 'gulp';
import { series, parallel  } from 'gulp'
import { run, withTaskName } from './utils'
import { genTypes } from './gen-types'
import { outDir, zpRoot } from './utils/paths'

// gulp 不叫打包 做代码转化 vite

const copySourceCode: TaskFunction = async() => {
  await run(`cp ${zpRoot}/package.json ${outDir}/package.json`);
};

//1.打包样式 2.打包工具方法 2.打包所有组件 3.打包每个组件 4.生成一个组件库 5.发布组件
export default series(
  withTaskName('clean', async() => run('rm -rf ./dist')),
  parallel(
    withTaskName('buildPackages', () =>
      run('pnpm run --filter ./packages/* --parallel build')
    ),
    withTaskName('buildFullComponent', () => run('pnpm run build buildFullComponent')), // 执行build命令时会调用rollup, 我们给rollup传递参数buildFullComponent 那么就会执行导出任务叫 buildFullComponent
    withTaskName('buildComponent', () => run('pnpm run build buildComponent')),
    withTaskName('README', () => run('pnpm run build README')),
    withTaskName('finish', () => run('pnpm run build Finish'))
  ),
  parallel(genTypes, copySourceCode)
)

//  这是一个任务
// 任务执行器  gulp 任务名 就会执行对应的任务
export * from './full-component'
export * from './component'
