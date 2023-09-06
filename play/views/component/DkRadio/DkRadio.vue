<script lang='ts'>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'DkRadioComp',
    setup() {
      const radioValue = ref(false);
      const handleChange = (name: string): void => {
        console.log(name);
      }
      return {
        radioValue,
        handleChange
      };
    }
  });
</script>
<template>
  <dk-radio v-model="radioValue" label="option 1" name="radio1" @change="handleChange" />
</template>
