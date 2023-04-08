<template>
  <div class="home_subject">
    <div class="home_banner" v-if="false">你好啊哈哈哈哈</div>
    <div class="home_content">
      <div class="home_content_title">
        <img
          class="home_content_img"
          src="https://oss.cadwaladerss.com/images/120ICON.png.png"
        />
        <div class="home_content_IStitle">
          <span>DK-Plus</span>
          <a class="home_content_A" href="https://github.com/CadWalaDers/dk-ui">
            <img
              src="https://img.shields.io/github/stars/CadWalaDers/dk-ui?style=social"
              alt=""
            />
          </a>
        </div>
      </div>
      <div class="home_content_subtitle">
        <p class="home_content_subtitle_p1">
          DK-Plus 是一套基于 Vue3.0 的 UI 组件库
          <p>主要用于快速开发 PC端中后台产品,全面的组件和便捷的工具会让您信手拈来，如鱼得水。</p>
        </p>
      </div>
    </div>
    <div class="home_btn">
      <Dk-Button type="primary">开始使用</Dk-Button>
    </div>
    <div class="home_contribution">
      <div class="home_contribution_title">贡献者</div>
      <div class="home_contribution_personnel">
        <div class="personnel" v-for="(item, ind) in contributionList" :key="ind">
          <a :href="item.avatar" target="_blank">
            <img :src="item.imgUrl" :alt="item.name" />
          </a>
        </div>
      </div>
      <div class="home_contribution_join">
        <Dk-Button type="success" round>加入其中</Dk-Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, toRefs, reactive } from 'vue'
  import dkbutton from '@dk-plus/components/dkbutton'
  import '@dk-plus/theme-chalk/src/index.scss'
  import { contribution } from '../../json/contribution.json'
  type dkbuttonType = { type?: string; round?: boolean }
  export default defineComponent({
    name: 'home',
    components: {
      'Dk-Button': dkbutton as unknown as dkbuttonType
    },
    setup() {
      const data = reactive({
        contributionList: contribution
      })
      return {
        ...toRefs(data)
      }
    }
  })
</script>
<style lang="scss" scoped>
  .home_subject {
    width: 100%;

    .home_banner {
      width: 100%;
    }

    .home_content {
      width: 100%;
      padding: 30px;
      box-sizing: border-box;

      .home_content_title {
        max-width: 1300px;
        margin: 0 auto;

        .home_content_img {
          margin-bottom: 20px;
        }

        .home_content_IStitle {
          width: 100%;
          display: flex;

          span {
            font-size: 32px;
            line-height: 43px;
            text-align: left;
            letter-spacing: -1.2px;
            font-weight: 700;
            word-break: normal;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: transparent;
            padding-left: 5px;
            background: -webkit-linear-gradient(55deg, #395ce3 10%, #5ee0dd);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .home_content_A {
            margin-top: 12px;
            margin-left: 20px;
          }
        }
      }

      .home_content_subtitle {
        max-width: 1300px;
        margin: 0 auto;
        padding-left: 5px;

        .home_content_subtitle_p1 {
          margin-top: 10px;
          font-size: 33px;
          font-weight: 700;
          font-weight: 500;
          line-height: 50px;
          p{
            font-size: 16px;
            font-weight: 400;
            line-height: 24px;
            color: #666;
          }
        }
      }
    }

    .home_btn {
      max-width: 1300px;
      margin: 0 auto;
      padding-left: 5px;
    }

    .home_contribution {
      max-width: 1300px;
      margin: 0 auto;
      padding: 60px 5px;
      box-sizing: border-box;

      .home_contribution_title {
        text-align: center;
        font-size: 32px;
        font-weight: 700;
        line-height: 43px;
        letter-spacing: -1.2px;
        color: #333;
        margin-bottom: 40px;
      }

      .home_contribution_personnel {
        max-width: 800px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;

        .personnel {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          margin: 5px;

          img {
            border-radius: 50%;
          }
        }
      }

      .home_contribution_join {
      }
    }
  }
</style>
