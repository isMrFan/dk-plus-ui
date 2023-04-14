import type { UserConfigExport } from 'vite'
export default (): UserConfigExport => {
  return {
    server: {
      port: 6099
    },
    optimizeDeps: {
      exclude: ['vitepress'],
      include: ['vue', '@vueuse/core']
    }
  }
}
