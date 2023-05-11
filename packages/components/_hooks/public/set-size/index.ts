/**
 * @name setSize
 * @param { number || string } size 需要转换的尺寸
 * @description 获取尺寸 没有尺寸单位默认为 px
 */
export const setSize = (size: number | string): string => {
  let siz = size.toString()
  const IS_APPEND = /px|em|rem/.test(siz)
  if (!IS_APPEND) {
    siz += 'px'
  }
  const IS_SIZE = /^-?\d+(\.\d+)?(px|em|rem)$/.test(siz)
  if (IS_SIZE) return IS_APPEND ? siz : siz + 'px'
  throw new Error(`dk-plus -> getSize -> ${siz} is not a size`)
}
