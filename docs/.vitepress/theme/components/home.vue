<template>
  <div class="home_subject">
    <div class="home_banner" v-if="false">
       你好啊哈哈哈哈
    </div>
    <div class="home_content">
      <div class="home_content_title">
          <img class="home_content_img" src="https://oss.cadwaladerss.com/images/120ICON.png.png" />
          <div class="home_content_IStitle">
           <span>DK-Plus</span>  
           <a class="home_content_A" href="https://github.com/CadWalaDers/dk-ui">
            <img src="https://img.shields.io/github/stars/CadWalaDers/dk-ui?style=social" alt=""/>
           </a>
          </div>
      </div>
      <div class="home_content_subtitle">
        <p class="home_content_subtitle_p1">DK-Plus 是一套基于 Vue3.0 的 UI 组件库，主要用于快速开发 PC 端中后台产品,全面的组件和便捷的工具会让您信手拈来，如鱼得水。</p>
      </div>
    </div>
    <Dk-Button type="primary">开始使用</Dk-Button>
  </div>
</template>
<script lang="ts">
import {dkbutton} from "dk-plus";
import '@dk-plus/theme-chalk/src/index.scss'
export default {
  name: 'home',
  components: {
    'Dk-Button': dkbutton
  }
}
</script>
<style lang="scss" scoped>
.home_subject{
  width: 100%;
  .home_banner{
    width: 100%;
  }
  .home_content{
    width: 100%;
    padding: 30px;
    box-sizing: border-box;
    .home_content_title{
      max-width: 1300px;
      margin: 0 auto;
      .home_content_img{
        margin-bottom: 20px;
      }
      .home_content_IStitle{
        width:100%;
        display: flex;
        span{
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
          background: -webkit-linear-gradient(55deg,#395ce3 10%,#5ee0dd);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .home_content_A{
          margin-top: 12px;
          margin-left:20px;
        }
      }
    }
    .home_content_subtitle{
      max-width: 1300px;
      margin: 0 auto;
      padding-left: 5px;
      .home_content_subtitle_p1{
        margin-top: 10px;
        font-size: 33px;
        font-weight: 700;
        font-weight: 500;
        line-height: 50px;
      }
    }
  }
}

</style>