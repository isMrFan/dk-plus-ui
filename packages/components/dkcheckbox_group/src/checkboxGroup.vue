<script lang="ts">
  import { defineComponent } from 'vue'
  import { getCheckboxGroup } from '../../_hooks'
  import { checkboxGroup } from './prop'
  import type { detailChangeType } from '../../dkcheckbox/src/type'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    props: checkboxGroup,
    emits: ['change'],
    setup(props, { slots, emit }) {
      const { getSlot } = getCheckboxGroup(props)
      const slotList = getSlot(slots)      

      console.log(slotList)
      const checkedList: string[] = []

      const getCheckedList = (): void => {
        const len = slotList.length
        for (let i = 0; i < len; i++) {
          const item = slotList[i]
          if (item.props.modelValue) {
            checkedList.push(item.props.value)
          }
        }
      }
      getCheckedList()
      
      const handleItemChange = (data: detailChangeType): void => {
        const index = checkedList.indexOf(data.value)
        if (data.checked) {
          if (index === -1) {
            checkedList.push(data.value.toString())
          }
        } else {
          if (index !== -1) {
            checkedList.splice(index, 1)
          }
        }
        emit('change', checkedList)
      }

      return {
        slotList,
        handleItemChange
      }
    }
  })
</script>
<template>
  <div class="dk-checkbox-group">
    <dk-checkbox
      v-for="item in slotList"
      :key="item.props.value"
      v-bind="item.props"
      @detail-change="handleItemChange"
    ></dk-checkbox>
  </div>
</template>
