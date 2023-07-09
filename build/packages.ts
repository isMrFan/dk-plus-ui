/**
 * @name gulpfile.ts
 * @author fankai16
 * @Time 2022/12/29
 * @description 专门打包util ， 指令 ， hook的
 **/

import { series, parallel, src, dest  } from 'gulp'
import { buildConfig } from './utils/config'
import path from 'path'
import { outDir, projectRoot } from './utils/paths'
import ts from 'gulp-typescript'
import { withTaskName } from './utils'
import type {TaskFunction } from 'gulp';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const buildPackages = (dirname: string, name: string):TaskFunction=> {
  // 打包的格式需要是什么类型的？ 模块规范 cjs  es模块规范
  // umd 是在浏览器中用的
  // 可以用rollup， 这个逻辑知识让ts-> js即可

  // eslint-disable-next-line no-unused-vars
  const tasks = Object.entries(buildConfig).map(([, config]) => {
    const output = path.resolve(dirname, config.output.name)
    return series(
      withTaskName(`buld:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, 'tsconfig.json') // ts的配置文件的路径
        const inputs = ['**/*.ts', '!gulpfile.ts', '!node_modules']
        return src(inputs)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true, // 需要生成声明文件
              strict: false,
              module: config.module
            })()
          )
          .pipe(dest(output))
      }),
      withTaskName(`copy:${dirname}`, () => {
        // 放到es-> utils 和 lib -> utils
        // 将utils 模块拷贝到dist 目录下的es目录和lib目录
        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name))
        )
      })
    )
  })
  console.log(tasks)
  return parallel(...tasks)
  // 最终发布的是dist  最终在项目中引入的都是es6模块。  按需加载
}
