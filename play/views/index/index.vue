<template>
  <div class="index">
    <h1 class="index-h1">测试组件页面</h1>
    <div class="index-conten">
      <div class="index-conten-left">
        <ul>
          <li v-for="(item, ind) in rooterList" :key="ind">
            <router-link
              :to="item.path"
              :style="$route.path === item.path ? 'color: #29d;' : ''"
              >{{ item.name }}</router-link
            >
          </li>
        </ul>
      </div>
      <div class="index-conten-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'index',
    setup() {
      const data = reactive({
        rooterList: [
          {
            name: '首页',
            path: '/'
          },
          {
            name: '自定义盒子模型',
            path: '/DkShadow'
          },
          {
            name: '图标',
            path: '/DkIcon'
          },
          {
            name: '按钮组件',
            path: '/Dkbutton'
          }
        ]
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<style lang="scss" scoped>
  ::-webkit-scrollbar {
    /*滚动条整体样式*/
    width: 8px;
    /*高宽分别对应横竖滚动条的尺寸*/
    height: 9px;
  }

  ::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    background-color: rgb(28, 177, 164);
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }

  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: #ededed;
    border-radius: 10px;
  }

  .index {
    width: 100%;
    height: 100vh;
    background: #fff;
    overflow: hidden;

    .index-h1 {
      text-align: center;
      margin-bottom: 20px;
    }

    .index-conten {
      width: 90%;
      margin: 0 auto;
      display: flex;

      .index-conten-left {
        width: 200px;

        ul {
          list-style: none;

          li {
            margin-bottom: 10px;

            a {
              color: #000;
              text-decoration: none;
            }
          }
        }
      }

      .index-conten-right {
        width: calc(100% - 200px);
        height: 100vh;
        overflow: scroll;
        padding-bottom: 150px;
        box-sizing: border-box;
      }
    }
  }
</style>
