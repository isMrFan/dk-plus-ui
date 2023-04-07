/**
 * @name index
 * @author fankai16
 * @Time 2022/12/29
 * @description 打包配置文件--路径
 **/
import path from "path";

export const projectRoot = path.resolve(__dirname, "../../");
export const outDir = path.resolve(__dirname, "../../npm/dist");
export const zpRoot = path.resolve(__dirname, "../../packages/dk-plus");
export const compRoot = path.resolve(projectRoot, "packages/components");
