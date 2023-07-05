import { version } from '../../../../packages/dk-plus/package.json'
export default function getNavs() {
  return [
    {
      text: '文档',
      activeMatch: '^/zh/document/',
      link: '/zh/document/install'
    },
    {
      text: '基础组件',
      activeMatch: '^/zh/components/',
      link: '/zh/components/icon'
    },
    {
      text: '技术拓展',
      items: [
        {
          text: '1.Flutter',
          activeMatch: '^/expansion/Flutter/',
          link: '/expansion/Flutter/windows/WinInstall'
        }
      ]
    },
    {
      text: version,
      link: 'https://www.npmjs.com/package/dk-plus'
    }
  ]
}
