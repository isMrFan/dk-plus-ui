/**
 * @name index
 * @author fankai16
 * @Time 2022/12/29
 * @description 打包文件输出配置
 **/
import { series,parallel } from "gulp";
import { sync } from "fast-glob";
import { compRoot, outDir, projectRoot } from "./utils/paths";
import path from "path";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import vue from "rollup-plugin-vue";
import typescript from "rollup-plugin-typescript2";
import { rollup, OutputOptions } from "rollup";
import { buildConfig } from "./utils/config";
import { pathRewriter, run } from "./utils";
import { Project, SourceFile } from "ts-morph";
import glob from "fast-glob";
import fs from "fs/promises";
import * as VueCompiler from "@vue/compiler-sfc";



const buildEachComponent = async () => {
  // 打包每个组件
  const files = sync("*", {
    cwd: compRoot,
    onlyDirectories: true,
  });
  // 分别把components 文件夹下的组件 放到dist/es/components下 和 dist/lib/compmonents
  const builds = files.map(async (file: string) => {
    const input = path.resolve(compRoot, file, "index.ts"); // 每个组件的入口
    const config = {
      input,
      plugins: [nodeResolve(), vue(), typescript(), commonjs()],
      external: (id) => /^vue/.test(id) || /^@dk-plus/.test(id),
    };
    const bundle = await rollup(config);
    const options = Object.values(buildConfig).map((config) => ({
      format: config.format,
      file: path.resolve(config.output.path, `components/${file}/index.js`),
      paths: pathRewriter(config.output.name), // @dk-plus => dk-plus/es  dk-plus/lib
    }));

    await Promise.all(
      options.map((option) => bundle.write(option as OutputOptions))
    );
  });
  return Promise.all(builds);
}

async function genTypes() {
  const project = new Project({
    // 生成.d.ts 我们需要有一个tsconfig
    compilerOptions: {
      allowJs: true,
      declaration: true,
      emitDeclarationOnly: true,
      noEmitOnError: true,
      outDir: path.resolve(outDir, "types"),
      baseUrl: projectRoot,
      paths: {
        "@dk-plus/*": ["packages/*"],
      },
      skipLibCheck: true,
      strict: false,
    },
    tsConfigFilePath: path.resolve(projectRoot, "tsconfig.json"),
    skipAddingFilesFromTsConfig: true,
  });

  const filePaths = await glob("**/*", {
    // ** 任意目录  * 任意文件
    cwd: compRoot,
    onlyFiles: true,
    absolute: true,
  });

  const sourceFiles: SourceFile[] = [];

  await Promise.all(
    filePaths.map(async function (file) {
      if (file.endsWith(".vue")) {
        const content = await fs.readFile(file, "utf8");
        const sfc = VueCompiler.parse(content);
        const { script } = sfc.descriptor;
        if (script) {
          let content = script.content; // 拿到脚本  icon.vue.ts  => icon.vue.d.ts
          const sourceFile = project.createSourceFile(file + ".ts", content);
          sourceFiles.push(sourceFile);
        }
      } else {
        const sourceFile = project.addSourceFileAtPath(file); // 把所有的ts文件都放在一起 发射成.d.ts文件
        sourceFiles.push(sourceFile);
      }
    })
  );
  await project.emit({
    // 默认是放到内存中的
    emitOnlyDtsFiles: true,
  });

  const tasks = sourceFiles.map(async (sourceFile: any) => {
    const emitOutput = sourceFile.getEmitOutput();
    const tasks = emitOutput.getOutputFiles().map(async (outputFile: any) => {
      const filepath = outputFile.getFilePath();
      await fs.mkdir(path.dirname(filepath), {
        recursive: true,
      });
      // @dk-plus -> dk-plus/es -> .d.ts 肯定不用去lib下查找
      await fs.writeFile(filepath, pathRewriter("es")(outputFile.getText()));
    });
    await Promise.all(tasks);
  });

  await Promise.all(tasks)
}
function copyTypes() {
  const src = path.resolve(outDir,'types/components/')
  const copy = (module) => {
      let output = path.resolve(outDir, module, 'components')
      return () => run(`cp -r ${src}/* ${output}`)
  }
  return parallel(copy('es'),copy('lib'))
}

async function buildComponentEntry() {
  const config = {
      input: path.resolve(compRoot, "index.ts"),
      plugins: [typescript()],
      external: () => true,
  };
  const bundle = await rollup(config);
  return Promise.all(
      Object.values(buildConfig)
          .map((config) => ({
              format: config.format,
              file: path.resolve(config.output.path, "components/index.js"),
          }))
          .map((config) => bundle.write(config as OutputOptions))
  );
}
export const buildComponent = series(buildEachComponent, genTypes, copyTypes(), buildComponentEntry)