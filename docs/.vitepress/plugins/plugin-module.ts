import MarkContainer from 'markdown-it-container'
import MarkdownIt from 'markdown-it'

/**
 * 创建 markdown 实例
 *
 * @see markdown-it https://markdown-it.docschina.org
 */
const markdown = MarkdownIt({
  breaks: true // 转换段落里的 '\n' 到 <br>
})

/**
 * 自定义 md 插件
 *
 * @param { Object } md markdown 实例
 */
export const PluginModule = (md): void => {
  /**
   * 自定义 md 语法
   *
   * 语法为 ::: module
   */
  md.use(MarkContainer, 'module', {
    validate(params: string): boolean {
      return !!params.trim().match(/^module\s*(.*)$/)
    },

    render(tokens, idx: number) {
      if (tokens[idx].nesting === 1) {
        const m: RegExpMatchArray = tokens[idx].info.trim().match(/^module\s*(.*)$/)
        const description: string = m && m.length > 1 ? m[1] : ''
        const content: string =
          tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
        const source: string = md.utils.escapeHtml(content)
        return `<custom-module source="${source}">${encodeURIComponent(
          markdown.render(description)
        )}`
      }
      return '</custom-module>'
    }
  })
}
