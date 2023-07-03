<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  export default defineComponent({
    name: 'Index',
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
            path: '/DkIcon',
            children: [
              {
                id: '2-1',
                name: 'System'
              },
              {
                id: '2-2',
                name: 'other'
              },
              {
                id: '2-3',
                name: 'Arrow'
              }
            ]
          },
          {
            name: '常见页面布局',
            path: '/DkContainer'
          },
          {
            name: '间距',
            path: '/DkInterval'
          },
          {
            name: '加载中',
            path: '/DkLoading'
          },
          {
            name: '按钮组件',
            path: '/Dkbutton'
          },
          {
            name: '输入框组件',
            path: '/Dkinput'
          },
          {
            name: '计数器组件',
            path: '/DkNumber'
          },
          {
            name: '计数器组件2',
            path: '/DkNumber'
          }
        ]
      })
      const active = reactive({
        childLiActiveIndex: '0'
      })
      // 子菜单点击事件 导航到对应的组件
      interface ChildItem {
        id: string
        name: string
      }
      const handleChildItemClick = (item: ChildItem, index: number): void => {
        active.childLiActiveIndex = item.id
        const title = document.querySelectorAll('.cont_template_icon_title')[index]
        // 将 title scroll 到顶部
        if (title?.innerHTML === item.name) {
          title.scrollIntoView({ behavior: 'smooth' })
        }
      }
      return {
        ...toRefs(data),
        ...toRefs(active),
        handleChildItemClick
      }
    }
  })
</script>
<template>
  <div class="index">
    <h1 class="index-h1">测试组件</h1>
    <div class="index-conten">
      <div class="index-conten-left">
        <ul>
          <li v-for="(item, ind) in rooterList" :key="ind">
            <router-link
              :to="item.path"
              :style="$route.path === item.path ? 'color: #34ab98;' : 'color: #ccc;'"
            >
              {{ item.name }}
            </router-link>
            <ul v-if="item.children && $route.path === item.path">
              <li
                v-for="(child, index) in item.children"
                :key="child.id"
                @click="handleChildItemClick(child, index)"
              >
                <span
                  :style="
                    childLiActiveIndex === child.id ? 'color: #34ab98;' : 'color: #ccc;'
                  "
                >{{ child.name }}</span>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div class="index-conten-right">
        <router-view />
      </div>
    </div>
  </div>
</template>
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
    // box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    // background: #ededed;
    border-radius: 10px;
    background-color: transparent;
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
      width: 98%;
      margin: 0 auto;
      display: flex;

      .index-conten-left {
        width: 124px;

        ul {
          list-style: none;

          li {
            margin-bottom: 10px;

            a {
              color: #000;
              text-decoration: none;
            }

            ul {
              margin-left: 10px;

              li:hover {
                cursor: pointer;
              }
            }
          }

          a:hover,
          span:hover {
            transition: all 0.2s;
            color: rgb(28, 177, 164) !important;
          }
        }
      }

      .index-conten-right {
        width: calc(100% - 124px);
        height: calc(100vh - 80px);
        overflow: scroll;
        // padding-bottom: 150px;
        box-sizing: border-box;
      }
    }
  }
</style>
