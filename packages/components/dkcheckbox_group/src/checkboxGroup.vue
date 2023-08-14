<script lang="ts">
  import { defineComponent } from 'vue'
  import type { ComponentOptions } from 'vue'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    emits: ['change'],
    setup(props, { slots, emit }) {
      props
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

      const checkboxList = [] as ComponentOptions[]
      const getCheckboxList = (): void => {
        // 获取插槽内容
        if (slots.default) {
          const slot = slots.default() as ComponentOptions[]
          // console.log(slot)
          slot.forEach(item => {
            if (typeof item.type === 'object') {
              if (item.type.name !== 'DkCheckbox') {
                console.warn(
                  'The sub component of the dk-checkbox-group component should be a dk-checkbox'
                )
                return
              }
              if (item.props.modelValue) {
                // console.log(item);

                checkedList.push(item.props.modelValue)
              }
              checkboxList.push(item.type.name)
            }
          })
        }
      }

      getCheckboxList()

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
