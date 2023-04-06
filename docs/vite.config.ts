import type { UserConfigExport } from 'vite'
export default (): UserConfigExport => {
  return {
    server: {
      port: 6099
    },
    optimizeDeps: {
      include: ['vue', '@vueuse/core']
    }
  }
}
