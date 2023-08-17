<script lang="ts">
  import { defineComponent } from 'vue'
  import type { ComponentOptions } from 'vue'
  import { getCheckboxGroup } from '../../_hooks'
  import { checkboxGroup } from './prop'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    props: checkboxGroup,
    emits: ['change'],
    setup(props, { slots, emit }) {
      const checkedList: string[] = []
      const handleChange = (e: Event): void => {
        const target = e.target as ComponentOptions
        // const checked = target._modelValue
        if (target.type !== 'checkbox') return
        const labels = target.labels as NodeList
        const dom = labels[0] as HTMLLabelElement
        const value = dom.innerText
        if (target.checked) {
          checkedList.push(value)
        } else {
          const index = checkedList.indexOf(value)
          checkedList.splice(index, 1)
        }
        emit('change', checkedList)
      }

      const { getSlot } = getCheckboxGroup(props)
      const { list } = getSlot(slots)

      console.log(list)
      return {
        handleChange
      }
    }
  })
</script>
<template>
  <div class="dk-checkbox-group" @change="handleChange">
    <slot></slot>
  </div>
</template>
