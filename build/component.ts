/**
 * @name index
 * @author fankai16
 * @Time 2022/12/29
 * @description 打包文件输出配置
 **/
import type {TaskFunction } from 'gulp';
import { series, parallel } from 'gulp'
import { sync } from 'fast-glob'
import { compRoot, outDir, projectRoot } from './utils/paths'
import path from 'path'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import vue from 'rollup-plugin-vue'
import typescript from 'rollup-plugin-typescript2'
import type { OutputOptions } from 'rollup';
import { rollup } from 'rollup'
import { buildConfig } from './utils/config'
import { pathRewriter, run } from './utils'
import type { SourceFile } from 'ts-morph';
import { Project } from 'ts-morph'
import glob from 'fast-glob'
import fs from 'fs/promises'
import { parse } from '@vue/compiler-sfc'

const buildEachComponent = async(): Promise<void[]> => {
  try {
    const files = sync('*', {
      cwd: compRoot,
      onlyDirectories: true
    });

    const builds = files.map(async(file: string): Promise<void> => {
      try {
        const input = path.resolve(compRoot, file, 'index.ts');
        const config = {
          input,
          plugins: [nodeResolve(), vue(), typescript(), commonjs()],
          external: (id: string): boolean =>
            /^vue/.test(id) || /^@dk-plus/.test(id)
        };
        const bundle = await rollup(config);

        const options = Object.values(buildConfig).map(config => ({
          format: config.format,
          file: path.resolve(config.output.path, `components/${file}/index.js`),
          paths: pathRewriter(config.output.name)
        }));

        await Promise.all(options.map(option => bundle.write(option as OutputOptions)));
      } catch (error) {
        console.error(`Error occurred while building component '${file}':`, error);
        // Optional: Perform error handling logic
      }
    });

    return Promise.all(builds);
  } catch (e) {
    console.error('Error occurred in buildEachComponent:', e);
    return [];
  }
};

async function genTypes(): Promise<void> {
  try {
    const project = new Project({
      compilerOptions: {
        allowJs: true,
        declaration: true,
        emitDeclarationOnly: true,
        noEmitOnError: true,
        outDir: path.resolve(outDir, 'types'),
        baseUrl: projectRoot,
        paths: {
          '@dk-plus/*': ['packages/*']
        },
        skipLibCheck: true,
        strict: false
      },
      tsConfigFilePath: path.resolve(projectRoot, 'tsconfig.json'),
      skipAddingFilesFromTsConfig: true
    });

    const filePaths = await glob('**/*', {
      cwd: compRoot,
      onlyFiles: true,
      absolute: true
    });

    const sourceFiles: SourceFile[] = [];

    await Promise.all(
      filePaths.map(async(file) => {
        if (file.endsWith('.vue')) {
          const content = await fs.readFile(file, 'utf8');
          const sfc = parse(content);
          const { script } = sfc.descriptor;
          if (script) {
            const content = script.content;
            const sourceFile = project.createSourceFile(file + '.ts', content);
            sourceFiles.push(sourceFile);
          }
        } else {
          const sourceFile = project.addSourceFileAtPath(file);
          sourceFiles.push(sourceFile);
        }
      })
    );

    await project.emit({
      emitOnlyDtsFiles: true
    });

    const tasks = sourceFiles.map(async(sourceFile) => {
      const emitOutput = sourceFile.getEmitOutput();
      const tasks = emitOutput.getOutputFiles().map(async(outputFile) => {
        const filepath = outputFile.getFilePath();
        await fs.mkdir(path.dirname(filepath), {
          recursive: true
        });
        await fs.writeFile(filepath, pathRewriter('es')(outputFile.getText()));
      });
      await Promise.all(tasks);
    });

    await Promise.all(tasks);
  } catch (e) {
    console.error('Error occurred in genTypes:', e);
    throw e;
  }
}
function copyTypes(): TaskFunction {
  const src = path.resolve(outDir, 'types/components/');

  const copy = (module: string): TaskFunction => {
    const output = path.resolve(outDir, module, 'components');
    return (): Promise<void> => run(`cp -r ${src}/* ${output}`);
  };

  return parallel(copy('es'), copy('lib'));
}

async function buildComponentEntry(): Promise<void> {
  try {
    const config = {
      input: path.resolve(compRoot, 'index.ts'),
      plugins: [typescript()],
      external: () => true
    };

    const bundle = await rollup(config);

    const writeOptions: OutputOptions[] = Object.values(buildConfig).map((config) => ({
      format: config.format as 'amd' | 'cjs' | 'es' | 'iife' | 'umd', // 将类型断言为有效的 ModuleFormat
      file: path.resolve(config.output.path, 'components/index.js')
    }));

    await Promise.all(writeOptions.map((option) => bundle.write(option)));

  } catch (e) {
    console.error('Error occurred in buildComponentEntry:', e);
    throw e;
  }
}

async function README(): Promise<void>{
  try {
    const sourcePath = '../npm/LICENSE'; // 源文件的路径
    const targetPath = '../npm/dist'; // 目标目录的路径
    // 构造目标文件的路径
    const targetFile = path.join(targetPath, path.basename(sourcePath));
    // 复制文件
    fs.copyFile(sourcePath, targetFile)
    .then(() => {
      console.log('文件复制成功');
    })
    .catch((error) => {
      console.error('文件复制失败', error);
    });
    const sourcePath1 = '../npm/README.md'; // 源文件的路径
    // 构造目标文件的路径
    const targetFile1 = path.join(targetPath, path.basename(sourcePath1));
    // 复制文件
    fs.copyFile(sourcePath1, targetFile1)
    .then(() => {
      console.log('文件复制成功');
    })
    .catch((error) => {
      console.error('文件复制失败', error);
    });
    // await rename ('../npm/LICENSE', '../npm/dist/LICENSE');
    // await rename ('../npm/README.md', '../npm/dist/README.md');
  } catch (e) {
    console.error('Error occurred in README:', e);
    throw e;
  }
}

async function Finish(): Promise<void> {
  console.log('打包完成！');
}

export const buildComponent = series(
  buildEachComponent,
  genTypes,
  copyTypes(),
  buildComponentEntry,
  Finish,
  README
)
