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
  import { defineComponent, toRefs, reactive } from 'vue'
  import dkbutton from '@dk-plus/components/dkbutton'
  import DkIcon from '@dk-plus/components/icon'
  import '@dk-plus/theme-chalk/src/index.scss'
  import { contribution } from '../../json/contribution.json'
  import { friendlyList } from '../../json/friendlyLinks.json'
  import { useRouter } from 'vitepress'
  type dkbuttonType = { type?: string; round?: boolean }
  type dkiconType = { size?: string; color?: string }
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
        friendlyLinks:friendlyList
      })
      const mounted = reactive({
        handleStartClick() {
          router.go('/document/install.html')
        },
        handleJoinUs() {
          window.location.href = 'https://github.com/CadWalaDers/dk-ui'
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
          <div class="seat"></div>
          <div class="title">
            <img :src="mLogo" alt="" />
            <p>DK-Plus</p>
            <span>一套基于 Vue3.0 的 UI 组件库</span>
            <dk-button
              @click="handleStartClick"
              class="label--active_hover"
              type="primary"
              >开始使用 <dk-icon class="dk-icon-play" size="14"></dk-icon>
            </dk-button>
          </div>
          <div class="contribution">
            <div class="contribution_title">贡献者</div>
            <div class="contribution_personnel">
              <div class="personnel" v-for="(item, ind) in contributionList" :key="ind">
                <a :href="item.avatar" target="_blank">
                  <img :src="item.imgUrl" :alt="item.name" />
                </a>
              </div>
            </div>
            <div class="contribution_join">
              <dk-button
                @click="handleJoinUs"
                class="label--active_hover"
                size="small"
                type="success"
                round
                >加入其中</dk-button
              >
            </div>
          </div>
        </div>
        <div class="home_content_main_first_bill">
          <img src="https://oss.cadwaladerss.com/images/home/home_index.svg" alt="" />
        </div>
      </div>
      <div class="home_content_main_second">
        <div class="home_content_main_second_container">
          <div class="home_content_main_second_container_content">
            <div
              class="home_content_main_second_container_content_item"
              v-for="item in infoList"
              :key="item.id"
            >
              <img :src="item.img" alt="" />
              <h3>{{ item.title }}</h3>
              <p>{{ item.message }}</p>
              <dk-button>查看详情</dk-button>
            </div>
          </div>
          <div class="home_content_main_second_container_info">
            <div class="home_content_main_second_container_info_friendly">
              <h3>友情链接</h3>
              <div class="home_content_main_second_container_info_friendly_list">
                <div
                  class="home_content_main_second_container_info_friendly_list_item"
                  v-for="(item,index) in friendlyLinks"
                  :key="index"
                >
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

      > div {
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

            > img {
              position: absolute;
              top: -330px;
              left: -930px;
              width: 1368px;
              max-width: 1448px;
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

          .seat {
            width: 100%;
            height: 50px;
            position: absolute;
            top: 0;
            left: 0;
            background: linear-gradient(to bottom, #fff, rgba(255, 255, 255, 0));
          }
        }

        &_bill {
          flex: 5;

          svg {
            width: 100%;
            height: 90%;
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
              flex:1;
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
        }
      }
    }
  }
</style>
