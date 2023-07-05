import { version } from '../../../../packages/dk-plus/package.json'
export default function getNavs() {
  return [
    {
      text: 'Document',
      activeMatch: '^/en/document/',
      link: '/en/document/install'
    },
    {
      text: 'Base component',
      activeMatch: '^/en/components/',
      link: '/en/components/icon'
    },
    {
      text: 'Technology development',
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
