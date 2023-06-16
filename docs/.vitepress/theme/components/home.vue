<template>
  <div class="home">
    <div class="main">
      <p class="text">dk-plus</p>
      <p class="text">一套基于 Vue3.0 <br />的 UI 组件库</p>
      <p class="text">轻量便捷，打造高效界面，<br />简单灵活，提升用户体验。</p>
      <div class="button-list">
        <dk-button type="success" round @click="start">现在开始</dk-button>
        <dk-button round @click="handleToGitClick">查看 GitHub</dk-button>
      </div>
    </div>
    <div class="container">
      <div class="banner-list">
        <div class="list-item">
          
        </div>
      </div>
    </div>
  </div>
    <div class="footer">
      <p>京ICP备2022007747号-2 <br/> https://beian.miit.gov.cn/</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vitepress'
export default defineComponent({
  name: 'Home',
  setup() {
    const router = useRouter()

    const start = (): void => {
      router.go('/document/install.html')
    }

    const handleToGitClick = (): void => {
      window.open('https://github.com/dk-plus-ui/dk-plus-ui')
    }

    return {
      start,
      handleToGitClick
    }
  }
})
</script>

<style lang="scss" scoped>
@import '../style/home.scss';
</style>
