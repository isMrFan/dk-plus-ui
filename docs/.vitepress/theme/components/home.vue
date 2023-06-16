<script lang="ts">
  import { defineComponent, reactive, nextTick } from 'vue'
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

      const data = reactive({
        bannerList: [
          {
            id: 1,
            title: '简单',
            icon: '🔰',
            message: '简单的API，简单的使用方式，让你的开发更加简单'
          },
          {
            id: 2,
            title: '轻量',
            icon: '🚀',
            message: '轻量的组件，轻量的体积，让你的项目更加轻量'
          },
          {
            id: 3,
            title: '可靠',
            icon: '🔱',
            message: '可靠的组件，可靠的开发团队，让你的项目更加可靠'
          },
          {
            id: 4,
            title: '灵活',
            icon: '🎨',
            message: '灵活的组件，灵活的使用方式，让你的项目更加灵活'
          }
        ]
      })

      return {
        start,
        handleToGitClick,
        ...data
      }
    }
  })
</script>

<template>
  <div class="home">
    <div class="main">
      <div class="explain">
        <p class="text">dk-plus</p>
        <p class="text">一套基于 Vue3.0 的 UI 组件库</p>
        <p class="text">轻量便捷，打造高效界面，<br />简单灵活，提升用户体验。</p>
      </div>
      <div class="button-list">
        <dk-button type="success" round @click="start">现在开始</dk-button>
        <dk-button round @click="handleToGitClick">查看 GitHub</dk-button>
      </div>
      <div class="container">
        <div class="banner-list">
          <div v-for="item in bannerList" :key="item.id" class="list-item">
            <div class="item-title">
              <div class="title">{{ item.title }}</div>
              <div class="icon">{{ item.icon }}</div>
            </div>
            <div class="message">{{ item.message }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="footer">
    <p>
      Copyright 2023 dk-plus
      <a href="https://beian.miit.gov.cn/">京ICP备2022007747号-2</a>
    </p>
  </div>
</template>

<style lang="scss" scoped>
  @import '../style/home.scss';
</style>
