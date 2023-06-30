export interface DataType {
  /**
   * @name step
   * @description step value when click button
   * @type number ｜ string
   * @default 1
   */
  step: number
  /**
   * @name min
   * @description min value
   * @type number
   * @default -Infinity
   */
  min: number
  /**
   * @name max
   * @description max value
   * @type number
   * @default Infinity
   */
  max: number
  /**
   * @name size
   * @description size of dk-input-number
   * @type string
   * @param { string } type [large]
   * @param { string } type [medium]
   * @param { string } type [small]
   * @param { string } type [mini]
   * @default small
   */
  size: string
  /**
   * @name iconSize
   * @description Size of built-in buttons
   */
  iconSize: number
  /**
   * @name strict
   * @description strict of dk-input-number, only allow input step value
   * @type boolean
   * @default false
   */
  strict: boolean
  /**
   * @name precision
   * @description Set precision of input value
   * @type number
   * @default 0
   */
  precision: number
}
