/**
 * @description: hooks
 * @since: 2019-08-08 20:20:47
 * @param {type} 
 * 
 */

import { UseInputProps, UseEmitType, UseInputReturn } from '../../dkinput/src/type'
export const useInput = (prop: UseInputProps, emit: UseEmitType): UseInputReturn => {
  const focus = () => {
    console.log('focus')
  }
  const blur = () => {
    console.log('blur')
  }
  return {
    focus,
  }
}