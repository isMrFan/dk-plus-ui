import vue from '@vitejs/plugin-vue'
import type { UserConfigExport } from 'vite'

export default (): UserConfigExport => {
  return {
    define: {
      isDev: process.env.NODE_ENV !== 'production'
    },

    plugins: [vue()],
    test: {
      environment: 'jsdom',
      css: true,
      exclude: ['**/dk-setup-name/**'],
      include: ['**/__test__/*.{test,spec}.{ts,tsx}']
    }
  } as UserConfigExport
}
