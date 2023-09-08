<script lang='ts'>
  import { defineComponent, ref } from 'vue';
  export default defineComponent({
    name: 'DkRadioComp',
    setup() {
      const radioValue = ref('radio2');
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
  <dk-radio v-model="radioValue" label="option 1 - disabled" name="radio1-disabled" disabled size="large" @change="handleChange" />
  <dk-radio v-model="radioValue" label="option 1 - large" name="radio1" size="large" @change="handleChange" />
  <dk-radio v-model="radioValue" label="option 2 - medium" name="radio2" size="medium" @change="handleChange" />
  <dk-radio v-model="radioValue" label="option 3 - small" name="radio3" size="small" @change="handleChange" />
  <dk-radio v-model="radioValue" label="option 3 - default" name="radio3" size="default" @change="handleChange" />
  <dk-radio v-model="radioValue" label="option 4 - mini" name="radio4" size="mini" @change="handleChange" />
</template>
