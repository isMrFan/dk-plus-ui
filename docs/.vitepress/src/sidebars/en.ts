/**
 * 侧边栏菜单
 *
 * @see sidebar https://vitepress.vuejs.org/guide/theme-sidebar#sidebar
 */
import { expansionNav } from '../../data/expansionNav'
export const sidebar = {
  '/en/document/': [
    {
      text: 'Development guide',
      items: [
        { text: 'Install', link: '/en/document/install' },
        { text: 'Get started quickly', link: '/en/document/import' }
      ]
    },
    {
      text: 'guide',
      items: [
        { text: 'introduce', link: '/en/document/introduce' },
        { text: 'Contribution guide', link: '/en/document/contributing' },
        { text: 'Join us', link: '/en/document/join' }
      ]
    },
    {
      text: 'Development course',
      items: [
        { text: 'Update log', link: '/en/document/update' },
        { text: 'milestone', link: '/en/document/mileage' }
      ]
    }
  ],
  '/en/components/': [
    {
      text: 'Base component',
      items: [
        { text: 'icon', link: '/en/components/icon' },
        { text: 'container', link: '/en/components/container' },
        { text: 'space', link: '/en/components/space' },
        { text: 'Button', link: '/en/components/button' },
        { text: 'Shadow', link: '/en/components/shadow' }
      ]
    },
    {
      text: 'Form',
      items: [
        { text: 'Input', link: '/en/components/input' },
        { text: 'InputNumber', link: '/en/components/inputNumber' }
      ]
    },
    {
      text: 'Feedback element',
      items: [{ text: 'loading', link: '/en/components/loading' }]
    }
  ],
  '/expansion/': expansionNav
}
