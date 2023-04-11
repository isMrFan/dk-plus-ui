<script lang="ts">
/**
 * @name home
 * @author fanKai16 and wangYingJie
 * @version 1.0.0
 * @Time 2023/04/10
 * @property {string} icon  图表class
 * @property {Array}  contributionList  贡献者列表
 * @property {string} mLogo  logo
 * @property {Array}  infoList  信息列表
 * @property {Array}  friendlyLinks  友情链接
 * @function handleStartClick  点击开始使用
 * @function handleJoinUs  点击加入我们
 * @description 文档首页
 **/
import { defineComponent, toRefs, reactive, nextTick } from 'vue'
import dkbutton from '@dk-plus/components/dkbutton'
import DkIcon from '@dk-plus/components/icon'
import '@dk-plus/theme-chalk/src/index.scss'
import { contribution } from '../../json/contribution.json'
import { friendlyList } from '../../json/friendlyLinks.json'
import { useRouter } from 'vitepress'

type dkbuttonType = { type?: string; round?: boolean }
type dkiconType = { size?: string; color?: string }
let document: Document;
export default defineComponent({
  name: 'home',
  components: {
    'dk-button': dkbutton as unknown as dkbuttonType,
    'dk-icon': DkIcon as unknown as dkiconType
  },
  setup() {
    const router = useRouter()
    const data = reactive({
      contributionList: contribution,
      mLogo: 'https://oss.cadwaladerss.com/images/wyjIcon.png',
      infoList: [
        {
          id: 1,
          title: '简单',
          img: 'https://oss.cadwaladerss.com/images/home/jiandan.png',
          message: '简单的API，简单的使用方式，让你的开发更加简单'
        },
        {
          id: 2,
          title: '轻量',
          img: 'https://oss.cadwaladerss.com/images/home/qingliang.png',
          message: '轻量的组件，轻量的体积，让你的项目更加轻量'
        },
        {
          id: 3,
          title: '可靠',
          img: 'https://oss.cadwaladerss.com/images/home/kekao.png',
          message: '可靠的组件，可靠的开发团队，让你的项目更加可靠'
        }
      ],
      friendlyLinks: friendlyList,
      isDark: false, // 是否是暗黑模式
    })
    // 切换主题
    const changeTheme = () => {
      if (typeof window !== 'undefined' && typeof document !== 'undefined') {
        const VPNav = document!.querySelector('.VPNav') 
        if (document.querySelector('html')!.classList.contains('dark')) {
          data.isDark = true
        } else {
          data.isDark = false
        }
        if (data.isDark) {
          VPNav!.classList.add('dark-style')
          VPNav!.classList.add('VPNavDark')
        } else {
          VPNav!.classList.remove('dark-style')
          VPNav!.classList.remove('VPNavDark')
        }
      }
    }
    // 页面初始化 设置 VPSwitch addEventListener
    const init = () => {
      const VPSwitch = document.querySelector('.VPSwitch')
      VPSwitch!.addEventListener('click', () => {
        data.isDark = !data.isDark
        changeTheme()
      })
    }
    nextTick(() => {
      setTimeout(() => {
        // init()
        // changeTheme()
      }, 1000)
    })
    const mounted = reactive({
      handleStartClick() {
        router.go('/document/install.html')
      },
      handleJoinUs() {
        window.location.href = 'https://github.com/CadWalaDers/dk-ui'
      },
      handleColorSchemeChange(e) {
       console.log("e", e)
      }
    })
    return {
      ...toRefs(data),
      ...toRefs(mounted),
    }
  }
})
</script>
<template>
  <div class="home_subject">
    <div class="home_content_main">
      <div class="home_content_main_first">
        <div class="home_content_main_first_container">
          <div :class="isDark ? 'seat dark-seat' : 'seat'"></div>
          <div class="title">
            <!-- <img :src="mLogo" alt="" /> -->
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 447.24 452.11">
              <defs>
              </defs>
              <g id="图层_2" data-name="图层 2">
                <g id="图层_1-2" data-name="图层 1">
                  <path class="cls-1"
                    d="M447.05,212.43H310.46l-73.95,65.83-54.16-60.37a14.25,14.25,0,0,0-11.58,2,14,14,0,0,0-5.26,14.27l68.88,77.38,86.35-78.69L423,235A205.33,205.33,0,0,1,296.32,413a206.65,206.65,0,0,1-158.14-.76A204,204,0,0,1,90.1,383.9a209.86,209.86,0,0,1-27.23-26.39A216.13,216.13,0,0,1,38.45,323l-26.12.28.43,1.13c3.18,8.17,7.49,16.29,16.34,28.59a252.14,252.14,0,0,0,16.57,20.89A223.8,223.8,0,0,0,72.39,399.9a238.4,238.4,0,0,0,26,18.31,219,219,0,0,0,33.52,17.23,230.45,230.45,0,0,0,36.72,11.22,235.42,235.42,0,0,0,32.21,4.79,224.58,224.58,0,0,0,35.54-.09c3.16-.26,11.66-1,22.58-3.05a238.53,238.53,0,0,0,37.42-10.09,228.87,228.87,0,0,0,36.76-17,226.41,226.41,0,0,0,29-20.19A233.71,233.71,0,0,0,402,359.34,228.71,228.71,0,0,0,416.11,338,231.86,231.86,0,0,0,428,314.26,234.81,234.81,0,0,0,439.12,283a235,235,0,0,0,7.93-70.61Z" />
                  <path class="cls-1"
                    d="M.2,239.68H136.79l74-65.83,54.16,60.37a14.25,14.25,0,0,0,11.58-2A14,14,0,0,0,281.74,218l-68.88-77.38L126.51,219.3,24.25,217.16A205.33,205.33,0,0,1,150.93,39.09a206.65,206.65,0,0,1,158.14.76,204,204,0,0,1,48.08,28.36A209.86,209.86,0,0,1,384.38,94.6a216.13,216.13,0,0,1,24.42,34.56l26.12-.28-.43-1.13c-3.18-8.17-7.49-16.29-16.34-28.59a252.14,252.14,0,0,0-16.57-20.89,223.8,223.8,0,0,0-26.72-26.06,238.4,238.4,0,0,0-26-18.31,219,219,0,0,0-33.52-17.23A230.45,230.45,0,0,0,278.66,5.45,235.42,235.42,0,0,0,246.45.66a224.58,224.58,0,0,0-35.54.09c-3.16.26-11.66,1-22.58,3.05a238.53,238.53,0,0,0-37.42,10.09,228.87,228.87,0,0,0-36.76,17A226.41,226.41,0,0,0,85.13,51,233.71,233.71,0,0,0,45.27,92.77a228.71,228.71,0,0,0-14.13,21.32,231.86,231.86,0,0,0-11.93,23.76A234.81,234.81,0,0,0,8.13,169.07,235,235,0,0,0,.2,239.68Z" />
                </g>
              </g>
            </svg>
            <p :class="isDark ? 'dark-text' : ''">DK-Plus</p>
            <span :class="isDark ? 'dark-text' : ''">一套基于 Vue3.0 的 UI 组件库</span>
            <dk-button @click="handleStartClick" class="label--active_hover"
              type="primary">开始使用 <dk-icon class="dk-icon-play" size="14"></dk-icon>
            </dk-button>
          </div>
          <div :class="isDark ? 'contribution dark-contribution' : 'contribution'">
            <div class="contribution_title">贡献者</div>
            <div class="contribution_personnel">
              <div :class="isDark ? 'btn-dark' : ''" class="personnel" v-for="(item, ind) in contributionList" :key="ind">
                <a :href="item.avatar" target="_blank">
                  <img :src="item.imgUrl" :alt="item.name" />
                </a>
              </div>
            </div>
            <div class="contribution_join">
              <dk-button :class="isDark ? 'btn-dark-bg' : ''" @click="handleJoinUs" class="label--active_hover" size="small"
                type="success" round>加入其中</dk-button>
            </div>
          </div>
        </div>
        <div class="home_content_main_first_bill">
          <img :class="isDark ? 'home_content_main_first_bill_img--dark' : ''"
            src="https://oss.cadwaladerss.com/images/home/home_index.svg" alt="" />
        </div>
      </div>
      <div class="home_content_main_second">
        <div class="home_content_main_second_container">
          <div class="home_content_main_second_container_content">
            <div
              :class="isDark ? 'home_content_main_second_container_content_item home_content_main_second_container_content_item--dark' : 'home_content_main_second_container_content_item'"
              v-for="item in infoList" :key="item.id">
              <img :src="item.img" alt="" />
              <h3 :class="isDark ? 'dark-text' : ''">{{ item.title }}</h3>
              <p :class="isDark ? 'dark-text' : ''">{{ item.message }}</p>
              <dk-button :class="isDark ? 'btn-dark-bg-border btn-dark-bg' : ''">查看详情</dk-button>
            </div>
          </div>
          <div :class="isDark ? 'home_content_main_second_container_info home_content_main_second_container_info--dark' : 'home_content_main_second_container_info'">
            <div class="home_content_main_second_container_info_friendly">
              <h3>友情链接</h3>
              <div class="home_content_main_second_container_info_friendly_list">
                <div :class="isDark ? 'btn-dark' : ''"   class="home_content_main_second_container_info_friendly_list_item"
                  v-for="(item, index) in friendlyLinks" :key="index">
                  <a :href="item.logoSrc" target="_blank">
                    <img :src="item.logoImg" alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div class="home_content_main_second_container_info_empower">
              <p>Copyright 2023 cadwaladerss(dk-plus) 京ICP备2022007747号-1</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../style/global.scss';

.home_subject {
  width: 100%;
  height: calc(100vh - 64px);
  margin: 0 auto;

  .home_content_main {
    height: 100%;
    @include scroll-style;

    >div {
      @include scroll-child-style;
      width: 100%;
      height: 100%;
      display: flex;
    }

    &_first {
      overflow: hidden;

      &_container {
        flex: 2;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .title {
          width: 220px;
          position: relative;
          height: 260px;

          .cls-1 {
            fill: $theme-color;
          }

          >svg {
            position: absolute;
            top: -348px;
            left: -879px;
            width: 1061px;
            max-width: 1062px;
            height: auto;
            z-index: -1;
            opacity: 0.5;
          }

          p {
            @include title-style;
          }

          span {
            font-size: 16px;
            @include sub-title-style;
          }

          .dk-button {
            background-color: $theme-color;
            border: none;
            border-radius: 20px;
            margin-top: 20px;
          }
        }

        .contribution {
          width: 100%;
          position: absolute;
          bottom: 0;
          left: 0;
          padding: 50px 0 10px 0;
          background: linear-gradient(to top, #fff, rgba(255, 255, 255, 0));
          padding-left: 10px;

          .contribution_title {
            font-size: 12px;
            color: $sub-title-color;
          }

          .contribution_personnel {
            width: 98%;
            height: 34px;
            display: flex;
            flex-wrap: nowrap;
            overflow: auto;

            ::-webkit-scrollbar {
              display: none;
            }

            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;

            .personnel {
              scroll-snap-align: start;
              scroll-snap-stop: always;
              width: 24px;
              min-width: 24px;
              height: 100%;
              margin-right: 2px;

              a {
                img {
                  width: 24px;
                  height: 24px;
                  border-radius: 12px;
                }
              }
            }
          }

          .contribution_join {
            .dk-button {
              background-color: $sub-theme-color;
              border: none;
            }
          }
        }

        .dark-contribution {
          background: linear-gradient(to top, $dark-bg-color, rgba(255, 255, 255, 0));
        }

        .seat {
          width: 100%;
          height: 50px;
          position: absolute;
          top: 0;
          left: 0;
          background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
        }

        .dark-seat {
          background: linear-gradient(to bottom, $dark-bg-color, rgba(0, 0, 0, 0));
        }
      }

      &_bill {
        flex: 5;

        svg {
          width: 100%;
          height: 90%;
        }

        &_img--dark {
          opacity: .4;
        }
      }
    }

    &_second {
      height: 100%;

      &_container {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 20px;

        &_content {
          width: 66.66%;
          height: 60%;
          flex: 2;
          display: flex;
          justify-content: center;
          padding-top: 20px;
          gap: 20px;

          &_item {
            flex: 1;
            width: 100%;
            height: 100%;
            // border-radius: 5px;
            @include border-style;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 20px;
            background-color: #fff;

            img {
              flex: 1;
              margin-bottom: 10%;
            }

            h3 {
              flex: 2;
              @include sec-title-style;
            }

            p {
              flex: 1;
              @include sub-title-style;
            }

            .dk-button {
              width: 100%;
              margin-top: 10%;
            }
            .dk-button:hover{
              border: .4px solid #409eff !important;
            }
          }

          &_item--dark {
            background-color: $dark-main-bg-color;
            border: 1px solid $dark-main-bg-color;
          }

          &_item:hover {
            box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
            transform: scale(1.02);
          }
        }

        &_info {
          height: 30%;
          flex: 1;
          width: 100%;
          background-color: $bg-color;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 20px 0 20px;
          position: relative;

          &_friendly {
            flex: 1;
            width: 66.66%;
            display: flex;
            flex-direction: column;

            h3 {
              // flex: 1;
              width: 100%;
              @include sec-title-style;
              // margin-bottom: 1rem;
            }

            &_list {
              // flex: 1;
              width: 100%;
              height: auto;
              display: flex;
              flex-wrap: wrap;
              flex-direction: row;
              gap: 20px;

              &_item {
                @include scroll-child-style;
                width: 8.3rem;
                height: 3rem;
                text-align: center;

                img {
                  border-radius: 5px;
                  width: 100%;
                  height: 100%;
                }

                a {
                  @include sub-title-style;
                }
              }

              &_item:hover {
                transform: scale(1.02);
                cursor: pointer;

                a {
                  color: $theme-color;
                }
              }
            }
          }

          &_empower {
            flex: 1;
            display: flex;
            justify-content: center;

            p {
              @include sub-title-style;
            }
          }
        }
        &_info--dark {
          background-color: $dark-main-bg-color;
        }
      }
    }
  }
}

.btn-dark-bg {
  background-color: $dark-btn-bg-color !important;
}
.btn-dark-bg-border{
  border: .4px solid $dark-border-color !important;
}
.dark-text{
  color: $dark-text-color !important;
}
</style>
