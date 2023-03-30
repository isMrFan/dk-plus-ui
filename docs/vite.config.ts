import type { UserConfigExport } from 'vite'
export default (): UserConfigExport => {
  return {
    server: {
      port: 6099
    }
  }
}