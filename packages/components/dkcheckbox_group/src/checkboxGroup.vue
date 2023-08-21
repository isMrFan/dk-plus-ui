<script lang="ts">
  import { defineComponent, watch, ref } from 'vue'
  import { getCheckboxGroup } from '../../_hooks'
  import type { ComponentOptions } from 'vue'
  import { checkboxGroup } from './prop'
  import type { detailChangeType } from '../../dkcheckbox/src/type'
  export default defineComponent({
    name: 'DkCheckboxGroup',
    props: checkboxGroup,
    emits: ['change'],
    setup(props, { slots, emit }) {
      const { getSlot, refresh } = getCheckboxGroup()
      let slotList = ref(getSlot(slots))
      let checkedList: string[] = []
      watch(
        () => props.modelValue,
        () => {
          slotList.value = refresh(slots)
          checkedList = slotList.value
            .filter((item: ComponentOptions) => item.modelValue)
            .map((item: ComponentOptions) => item.value)
          emit('change', checkedList)
        },
        {
          deep: true
        }
      )

      const getCheckedList = (): void => {
        checkedList = slotList.value
          .filter((item: ComponentOptions) => item.modelValue)
          .map((item: ComponentOptions) => item.value)
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
  <div class="dk-checkbox-group" v-bind="$attrs">
    <dk-checkbox
      v-for="item in slotList"
      :key="item.value"
      v-model="item.modelValue"
      v-bind="item"
      @detail-change="handleItemChange"
    ></dk-checkbox>
  </div>
</template>
