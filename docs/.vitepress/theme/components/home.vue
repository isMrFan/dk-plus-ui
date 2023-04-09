<template>
  <div class="home_subject">
    <!-- <div class="home_banner"></div> -->
    <!-- <div class="home_content"> -->
    <div class="home_content_main">
      <div class="home_content_main_first">
        <div class="home_content_main_first_container">
          <div class="seat"></div>
          <div class="title">
            <img :src="mLogo" alt="">
            <p>DK-Plus</p>
            <span>一套基于 Vue3.0 的 UI 组件库</span>
            <dk-button @click="handleStartClick" class="label--active_hover" type="primary">开始使用 <dk-icon
                class="dk-icon-play" size="14"></dk-icon>
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
              <dk-button @click="handleJoinUs" class="label--active_hover" size="small" type="success" round>加入其中</dk-button>
            </div>
          </div>
        </div>
        <div class="home_content_main_first_bill">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 1121 1024" height="1024" width="1121">
            <path fill="#FBFBFB"
              d="M1112.05 741.589C1112.05 767.635 1090.92 788.757 1064.88 788.757H656.033C629.977 788.757 608.865 767.635 608.865 741.589V144.033C608.865 117.968 629.987 96.8649 656.033 96.8649H939.079L1112.06 269.834L1112.05 741.589Z">
            </path>
            <path fill="#D8E5ED" d="M955 253L1112.24 408.179V268.713L1096.53 253H955Z"></path>
            <path fill="url(#paint0_linear_1608_18719)"
              d="M939.077 96.8649V222.655C939.077 248.71 960.201 269.834 986.255 269.834H1112.06L939.077 96.8649Z"></path>
            <path fill="#D8E5ED" d="M891.442 318.326H680.643V337.82H891.442V318.326Z"></path>
            <path fill="#D8E5ED" d="M1029.29 388.139H680.643V407.634H1029.29V388.139Z"></path>
            <path fill="#D8E5ED" d="M1029.29 428.688H680.643V448.183H1029.29V428.688Z"></path>
            <path fill="#D8E5ED" d="M1029.29 469.276H680.643V488.77H1029.29V469.276Z"></path>
            <path fill="#D8E5ED" d="M1029.29 509.825H680.643V529.319H1029.29V509.825Z"></path>
            <path fill="#D8E5ED" d="M1029.29 550.393H680.643V569.888H1029.29V550.393Z"></path>
            <path fill="#D8E5ED" d="M1029.29 590.963H680.643V610.458H1029.29V590.963Z"></path>
            <path fill="#D8E5ED" d="M971.78 631.53H680.643V651.025H971.78V631.53Z"></path>
            <path fill="white"
              d="M778.175 0H55.3514C24.7816 0 0 24.7816 0 55.3514V830.27C0 860.84 24.7816 885.622 55.3514 885.622H778.175C808.745 885.622 833.526 860.84 833.526 830.27V55.3514C833.526 24.7816 808.745 0 778.175 0Z">
            </path>
            <path fill="url(#paint1_linear_1608_18719)"
              d="M156.936 104.191H105.529C97.8862 104.191 91.6909 110.386 91.6909 118.029V169.897C91.6909 177.539 97.8862 183.735 105.529 183.735H156.936C164.579 183.735 170.774 177.539 170.774 169.897V118.029C170.774 110.386 164.579 104.191 156.936 104.191Z">
            </path>
            <path fill="#B5D1DE" d="M489.201 113.032H202.392V133.87H489.201V113.032Z"></path>
            <path fill="#B5D1DE" d="M410.248 155.608H202.392V176.446H410.248V155.608Z"></path>
            <path fill="#D8E5ED"
              d="M714.687 216.065H119.367C104.082 216.065 91.6909 228.457 91.6909 243.741V452.596C91.6909 467.881 104.082 480.271 119.367 480.271H714.687C729.971 480.271 742.363 467.881 742.363 452.596V243.741C742.363 228.457 729.971 216.065 714.687 216.065Z">
            </path>
            <path fill="#F5B1AE"
              d="M156.88 507.93H105.005C97.3626 507.93 91.1673 514.125 91.1673 521.768V573.637C91.1673 581.279 97.3626 587.474 105.005 587.474H156.88C164.522 587.474 170.717 581.279 170.717 573.637V521.768C170.717 514.125 164.522 507.93 156.88 507.93Z">
            </path>
            <path fill="#B5D1DE" d="M491.029 516.778H202.525V537.617H491.029V516.778Z"></path>
            <path fill="#D8E5ED" d="M736.596 620.101H91.1673V646.15H736.596V620.101Z"></path>
            <path fill="#D8E5ED" d="M736.596 661.525H91.1673V687.573H736.596V661.525Z"></path>
            <path fill="#D8E5ED" d="M702.507 702.951H91.1673V728.998H702.507V702.951Z"></path>
            <path fill="#B5D1DE" d="M411.609 559.341H202.525V580.179H411.609V559.341Z"></path>
            <path fill="url(#paint2_linear_1608_18719)"
              d="M803.197 1011.37C895.239 1011.37 969.854 936.752 969.854 844.71C969.854 752.669 895.239 678.054 803.197 678.054C711.156 678.054 636.541 752.669 636.541 844.71C636.541 936.752 711.156 1011.37 803.197 1011.37Z">
            </path>
            <path fill="white"
              d="M852.249 792.649C849.914 792.927 847.774 794.086 846.265 795.889C844.756 797.692 843.992 800.004 844.13 802.351C844.267 804.698 845.297 806.904 847.006 808.519C848.716 810.132 850.977 811.033 853.328 811.036H876.392V903.288H728.788V811.036H751.851C754.298 811.036 756.645 810.063 758.374 808.333C760.104 806.603 761.077 804.257 761.077 801.81C761.077 799.363 760.104 797.017 758.374 795.287C756.645 793.557 754.298 792.586 751.851 792.586H728.788C726.365 792.586 723.967 793.062 721.728 793.989C719.489 794.917 717.454 796.276 715.741 797.989C714.028 799.702 712.669 801.737 711.742 803.974C710.815 806.213 710.338 808.613 710.338 811.036V903.288C710.338 905.71 710.815 908.11 711.742 910.349C712.669 912.587 714.028 914.62 715.741 916.335C717.454 918.048 719.489 919.407 721.728 920.334C723.967 921.261 726.365 921.738 728.788 921.738H876.392C878.815 921.738 881.214 921.261 883.453 920.334C885.691 919.407 887.725 918.048 889.438 916.335C891.151 914.62 892.51 912.587 893.437 910.349C894.366 908.11 894.842 905.71 894.842 903.288V811.036C894.842 808.613 894.366 806.213 893.437 803.974C892.51 801.737 891.151 799.702 889.438 797.989C887.725 796.276 885.691 794.917 883.453 793.989C881.214 793.062 878.815 792.586 876.392 792.586H853.328L852.249 792.649Z">
            </path>
            <path fill="white"
              d="M806.122 742.41C805.002 741.946 803.803 741.708 802.592 741.708C801.38 741.708 800.18 741.946 799.06 742.41C797.942 742.873 796.925 743.553 796.069 744.409C795.212 745.266 794.533 746.283 794.069 747.402C793.604 748.522 793.366 749.722 793.366 750.932V824.735H765.93C764.968 824.738 764.031 825.041 763.251 825.601C762.469 826.163 761.884 826.955 761.574 827.865C761.265 828.776 761.249 829.761 761.527 830.681C761.805 831.603 762.364 832.414 763.126 833L798.69 860.344C799.896 861.27 801.374 861.773 802.895 861.775C804.416 861.776 805.894 861.277 807.103 860.354L842.933 833.01C843.903 832.267 844.54 831.171 844.702 829.96C844.865 828.749 844.54 827.523 843.801 826.552L843.22 825.925C842.374 825.161 841.277 824.738 840.138 824.735H811.816V750.932C811.816 749.722 811.578 748.522 811.115 747.402C810.651 746.283 809.972 745.266 809.115 744.409C808.258 743.553 807.241 742.873 806.122 742.41Z">
            </path>
            <defs>
              <linearGradient gradientUnits="userSpaceOnUse" y2="183.346" x2="1112.05" y1="183.346" x1="939.076"
                id="paint0_linear_1608_18719">
                <stop stop-color="#F8BB67"></stop>
                <stop stop-color="#FEE6B6" offset="1"></stop>
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" y2="143.958" x2="170.771" y1="143.958" x1="91.6916"
                id="paint1_linear_1608_18719">
                <stop stop-color="#88EEBE"></stop>
                <stop stop-color="#70D1D6" offset="1"></stop>
              </linearGradient>
              <linearGradient gradientUnits="userSpaceOnUse" y2="844.707" x2="969.85" y1="844.707" x1="636.536"
                id="paint2_linear_1608_18719">
                <stop stop-color="#88EEBE"></stop>
                <stop stop-color="#70D1D6" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>

        </div>
      </div>
      <div class="home_content_main_second" v-if="false">afd</div>
    </div>









    <!-- <div class="home_content_title">
        <img
          class="home_content_img"
          src="https://pic5.58cdn.com.cn/nowater/webim/big/n_v2380ca63f26f9441f8b860d0c0b9ed3ad.png"
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
      </div> -->
    <!-- <div class="home_content_subtitle">
        <p class="home_content_subtitle_p1">
          DK-Plus 是一套基于 Vue3.0 的 UI 组件库
          <p>主要用于快速开发 PC端中后台产品,全面的组件和便捷的工具会让您信手拈来，如鱼得水。</p>
        </p>
      </div> -->


    <!-- </div> -->


    <!-- <div class="home_btn">
      <dk-button type="primary">开始使用</dk-button>
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
        <dk-button type="success" round>加入其中</dk-button>
      </div>
    </div> -->
  </div>
</template>
<script lang="ts">
import { defineComponent, toRefs, reactive } from 'vue'
import dkbutton from '@dk-plus/components/dkbutton'
import Icon from '@dk-plus/components/Icon'
import '@dk-plus/theme-chalk/src/index.scss'
import { contribution } from '../../json/contribution.json'
import { useRouter } from 'vitepress'
type dkbuttonType = { type?: string; round?: boolean }
type dkiconType = { size?: string; color?: string }

/** 处理第一页内容 */
const handleFirstEffect = () => {
  const router = useRouter()
  /** 开始使用 跳转到文档 */
  const handleStartClick = () => {
    router.go('/document/install.html')
  }
  /** 跳转到git */
  const handleJoinUs = () => {
    // router.go('https://github.com/CadWalaDers/dk-ui')
    window.location.href = 'https://github.com/CadWalaDers/dk-ui'
  }
  return {
    handleStartClick,
    handleJoinUs
  }
}


export default defineComponent({
  name: 'home',
  components: {
    'dk-button': dkbutton as unknown as dkbuttonType,
    'dk-icon': Icon as unknown as dkiconType
  },
  setup() {
    const data = reactive({
      contributionList: contribution
    })

    // logo地址
    const mLogo = 'https://pic6.58cdn.com.cn/nowater/webim/big/n_v26b2afb7f4ffc4555a2a70cab60f77b7c.png'
    const { handleStartClick,handleJoinUs } = handleFirstEffect()
    return {
      ...toRefs(data),
      mLogo,
      handleStartClick,
      handleJoinUs
    }
  }
})
</script>
<style lang="scss" scoped>
@import '../style/global.scss';

.home_subject {
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

      >img {
        width: 100px;
      }

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

        p {
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

    .contribution_join {
      .dk-button {
        background-color: $sub-theme-color;
      }
    }
  }
}

.home_subject {
  width: 100%;
  height: calc(100vh - 64px);
  margin: 0 auto;

  .home_content_main {
    height: 100%;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    -webkit-overflow-scrolling: touch;

    >div {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }

    &_first,
    &_second {
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

          >img {
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
            line-height: 20px;
            color: $sub-title-color;
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
        // background-color: rgb(249, 248, 221);
        svg{
          width: 100%;
          height: 90%;
        }
      }
    }

    &_second {
      background-color: rgb(107, 245, 215);
    }

  }
}

// ::-webkit-scrollbar {
//   display: block;
//   /*滚动条整体样式*/
//   width: 6px;
//   /*高宽分别对应横竖滚动条的尺寸*/
//   height: 9px;
// }
// ::-webkit-scrollbar-thumb {
//   /*滚动条里面小方块*/
//   border-radius: 10px;
//   background-color: rgb(28, 177, 164);
//   background-image: -webkit-linear-gradient(45deg,
//       rgba(255, 255, 255, 0.2) 25%,
//       transparent 25%,
//       transparent 50%,
//       rgba(255, 255, 255, 0.2) 50%,
//       rgba(255, 255, 255, 0.2) 75%,
//       transparent 75%,
//       transparent);
// }


// ::-webkit-scrollbar-track {
//   /*滚动条里面轨道*/
//   background-color: transparent;
// }
</style>
