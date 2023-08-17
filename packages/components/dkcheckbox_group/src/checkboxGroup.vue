<script lang="ts">
  import { defineComponent } from 'vue'
  import { getCheckboxGroup } from '../../_hooks'
  import type { ComponentOptions } from 'vue'
  import { checkboxGroup } from './prop'
  import type { detailChangeType } from '../../dkcheckbox/src/type'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    props: checkboxGroup,
    emits: ['change'],
    setup(props, { slots, emit }) {
      const { getSlot } = getCheckboxGroup(props)
      const slotList = getSlot(slots)

      let checkedList: string[] = []

      const getCheckedList = (): void => {
        checkedList = slotList
          .filter((item: ComponentOptions) => item.props.modelValue)
          .map((item: ComponentOptions) => item.props.value)
      }

      getCheckedList()

      const handleItemChange = (data: detailChangeType): void => {
        const { value, checked } = data
        const index = checkedList.indexOf(value.toString())

        if (checked && index === -1) {
          checkedList.push(value.toString())
        } else if (!checked && index !== -1) {
          checkedList.splice(index, 1)
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
