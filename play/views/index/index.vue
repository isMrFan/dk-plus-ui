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
              >{{item.name}}</router-link
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
import { defineComponent, toRefs, reactive } from "vue";
export default defineComponent({
  name: "index",
  setup() {
    const data = reactive({
      rooterList: [
        {
          name: "首页",
          path: "/",
        },
        {
          name: "自定义盒子模型",
          path: "/DkShadow",
        },
         {
          name: "图标",
          path: "/DkIcon",
        },
          {
          name: "按钮组件",
          path: "/Dkbutton",
        },
      ],
    });
    return {
      ...toRefs(data),
    };
  },
});
</script>
<style lang="scss" scoped>
.index {
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background: #fff;

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
    }
  }
}
</style>
