import {
    defineConfig
} from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression'
import legacyPlugin from '@vitejs/plugin-legacy'
import zip from 'vite-plugin-zip'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
    base: './' ,
    plugins: [vue(), viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240,
            algorithm: 'gzip',
            ext: '.gz',
        }), legacyPlugin({
            targets: ['chrome 52'],
            additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
            // modernPolyfills: true,
            // renderLegacyChunks: false
        }), //if i use this plugin,rollupoption's assetFileNames set will invalid
        zip({
            dir: 'dist',
            outputName: 'test'
        }),
        AutoImport({
            resolvers: [ElementPlusResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
        visualizer({ open: false, filename: 'report.html' })
    ],
    build: {
        terserOptions: {
            compress: {
                drop_console: true,
                drop_debugger: true,
            },
        },
        rollupOptions: {
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',
                assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
                manualChunks(id) {
                    if (id.includes('node_modules')) {
                        return id.toString().split('node_modules/')[1].split('/')[0].toString();
                    }
                }
            }
        }
    },
    server: {
      https: false, // 是否开启 https
      open: true, // 是否自动在浏览器打开
      port: 6097, // 端口号
      host: '0.0.0.0',
      proxy: {
        "/api": {
          target: '', // 后台接口
          changeOrigin: true,
          secure: false, // 如果是https接口，需要配置这个参数
          ws: true, //websocket支持
          rewrite: (path) => path.replace(/^\/api/, ""),
        },
      },
    },
})