import type MarkdownIt from 'markdown-it'

/**
 * @param { Object } md markdown 实例
 */
export const PluginDkTable = (md: MarkdownIt): void => {
  md.renderer.rules.table_open = (): string => '<div class="vp-table__dk"><table>'
  md.renderer.rules.table_close = (): string => '</table></div>'
}
