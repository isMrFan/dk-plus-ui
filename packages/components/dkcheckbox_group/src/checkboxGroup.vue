<script lang="ts">
import { defineComponent } from 'vue'
// import type { VNode } from 'vue'
// import type { dkCheckboxInterface } from '../../dkcheckbox'
export default defineComponent({
  name: 'DkCheckboxGroup',
  setup(props, { slots }) {
    props
    const checkedList: string[] = []
    const handleChange = (e: Event): void => {
      const target = e.target as HTMLInputElement
      const labels = target.labels as NodeList
      const dom = labels[0] as HTMLLabelElement
      const value = dom.innerText
      if(target.checked){
        checkedList.push(value)
      }else{
        const index = checkedList.indexOf(value)
        checkedList.splice(index, 1)
      }
    }
    // 获取插槽内容
    const slot = slots.default?.()
    console.log(slot);
    // const checkboxList = slot?.filter((item: VNode) => {
    //   console.log(typeof item.type);
    //   if(item.type instanceof defineComponent){
    //     // const type = item.type as defineComponent
    //     // console.log(type.name);
    //     // if(){
    //     //   return item
    //     // }
    //   }
    // })
    
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
