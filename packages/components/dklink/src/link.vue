<script lang='ts'>
import { defineComponent } from 'vue';
import { dkLinkProps } from './props';
import { getDkLink } from '../../_hooks';
export default defineComponent({
  name: 'DkLink',
  props: dkLinkProps,
  setup(props) {
    const {classList} = getDkLink(props)
    const data = props
    return {
      ...data,
      classList
    }
  }
})
</script>

<template>
  <span :class="classList">
    <slot></slot>
  </span>
</template>
