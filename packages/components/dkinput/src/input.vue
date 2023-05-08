<script lang="ts">
  /**
   * @name dk-input
   * @author WangYingJie
   * @Time 2323/4/12
   * @description 输入框组件
   * @example
   */
  import { defineComponent, computed, ref, nextTick, Ref, ComputedRef, watch } from 'vue'
  import { dkInputProps, haInputClass } from './props'
  import { getInputGlobal } from '../../_hooks'
  import { getInput } from '../../_hooks'

  export default defineComponent({
    name: 'DkInput',
    props: dkInputProps,
    setup(props) {
      // console.log('props', props, dkInputProps)

      const { getInputType } = getInputGlobal(props)
      // console.log(props);

      // console.log(getInputType());

      const { classList, typeList } = getInput(props)
      // console.log('classList', classList);
      // console.log('typeList', typeList);

      const { type = getInputType() } = props
      return {
        classList,
        typeList
      }
    }
  })
</script>

<template>
  <div>
    <input type="text" />
  </div>
  <div>
    <input type="textarea" />
  </div>
</template>
