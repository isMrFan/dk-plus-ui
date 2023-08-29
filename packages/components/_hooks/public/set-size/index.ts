/**
 * @name setSize
 * @param { number | string } size 需要转换的尺寸
 * @description 获取尺寸 没有尺寸单位默认为 px
 */
export const setSize = (size: number | string = 0): string => {
  let siz = size.toString()

  if (typeof size === 'number' && !isNaN(size)) {
    siz = `${size}px`
  } else if (typeof size === 'string') {
    switch (siz.substr(-2)) {
      case 'px':
      case 'em':
      case 'rem':
      case 'vh':
      case 'vw':
      case '%':
        break
      default:
        siz += 'px'
    }
  } else {
    throw new Error(`dk-plus -> getSize -> ${siz} is not a size`)
  }

  return siz
}
