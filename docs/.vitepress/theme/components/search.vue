<script setup lang="ts" name="onSearch">
  import { ref } from 'vue'
  const searchList = [
    {
      title: '安装',
      rule: '安装',
      url: 'document/install'
    },
    {
      title: '快速上手',
      rule: '快速上手',
      url: 'document/import'
    },
    {
      title: '介绍',
      rule: '介绍',
      url: 'document/introduce'
    },
    {
      title: '贡献',
      rule: '贡献',
      url: 'document/contributing'
    },
    {
      title: '快速上手',
      rule: '快速上手',
      url: 'document/import'
    },
    {
      title: '加入我们',
      rule: '加入我们',
      url: 'document/join'
    },
    {
      title: '更新日志',
      rule: '更新日志',
      url: 'document/update'
    },
    {
      title: '里程碑',
      rule: '里程碑',
      url: 'document/mileage'
    },
    {
      title: 'Icon 图标',
      rule: 'Icon 图标',
      url: 'components/icon'
    },
    {
      title: 'container 页面布局容器',
      rule: 'container 页面布局容器',
      url: 'components/container'
    },
    {
      title: 'Button 按钮',
      rule: 'Button 按钮',
      url: 'components/button'
    },
    {
      title: 'input 输入框',
      rule: 'input 输入框',
      url: 'components/input'
    },
    {
      title: 'flutter',
      rule: 'flutter',
      url: 'expansion/Flutter/windows/WinInstall'
    }
  ]
  const searchValue = ref('')
  const isShow = ref(false)
  const resultList = ref()
  const onSearch = (): void => {
    resultList.value = searchList.filter(
      (item: { title: string; rule: string; url: string }): boolean => {
        return item.rule.includes(searchValue.value)
      }
    )
    if (resultList.value && resultList.value.length) {
      isShow.value = true
      setTimeout((): void => {
        const link: NodeListOf<HTMLLinkElement> =
          document.querySelectorAll('.vp-search__link')
        if (link.length === 1) {
          link[0].click()
        }
      }, 200)
    }
  }
  const hiddenResult = (): void => {
    isShow.value = false
    searchValue.value = ''
  }
</script>

<template>
  <div class="on-search">
    <dk-input
      v-model="searchValue"
      placeholder="请输入要搜索的内容"
      @enter="onSearch"
    ></dk-input>
    <!-- 搜索结果 -->
    <div
      v-if="isShow && resultList && resultList.length"
      class="on-search__result"
      @click.stop="hiddenResult"
    >
      <a
        v-for="(item, index) in resultList"
        :key="index"
        class="on-search__link"
        :href="`/${item.url}.html`"
      >
        {{ item.title }}
      </a>
    </div>
  </div>
</template>
<style lang="scss" setup>
  .on-search {
    max-width: 200px;
    min-width: 100px;
    margin: 0 16px;
    transition: width 0.4s;
    display: inline-block;
    position: relative;
    .on-search__result {
      position: absolute;
      background-color: #fff;
      width: 100%;
      box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
      max-height: 400px;
      overflow: auto;

      .on-search__link {
        margin: 4px;
        transition: 0.3s;
        display: block;
        line-height: 40px;
        padding: 0 13px;
        box-sizing: border-box;

        &:hover {
          background-color: #eee;
          color: #10b981;
        }
      }
    }
  }
</style>
