<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <h3>1.文本按钮</h3>
      <div class="dkButton_DK_wb">
        <Dk-Button text> 默认</Dk-Button>
        <Dk-Button text type="primary"> 基础(primary) </Dk-Button>
        <Dk-Button text type="success"> 成功(success) </Dk-Button>
        <Dk-Button text type="info"> 信息(info) </Dk-Button>
        <Dk-Button text type="warning"> 警告(warning) </Dk-Button>
        <Dk-Button text type="danger"> 危险(danger) </Dk-Button>
      </div>
      <div class="code_show_Title">
        <Dk-Shadow :type="'title'">
          <template #left>
            <div style="line-height: 42px">(1).代码展示区域</div>
          </template>
          <template #right>
            <Dk-Button text type="default" @click="onFoundationType(0)">
              {{ FoundationType ? '关闭' : '开启' }}
            </Dk-Button>
          </template>
        </Dk-Shadow>
      </div>
      <div class="code_show" v-show="FoundationType">
        <div
          class="index_Dk_list"
          v-for="(item, ind) in foundationHighlightjs"
          :key="ind"
        >
          <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
            <highlightjs language="javascript" :code="item.name"></highlightjs>
            <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
          </div>
        </div>
      </div>
      <h3>2.文本按钮自定义</h3>
      <p style="margin-left: 10px; margin-bottom: 10px">
        1: fontColor 支持16进制 英文单词 rgb rgba
      </p>
      <div class="dkButton_DK_wb">
        <Dk-Button text type="primary" :fontColor="'#cb7979'">
          自定义文字颜色16进制
        </Dk-Button>
        <Dk-Button text type="primary" :fontColor="'red'"> 自定义文字颜色英文 </Dk-Button>
        <Dk-Button text type="primary" :fontColor="'rgb(255,0,0)'">
          自定义文字颜色英文
        </Dk-Button>
        <Dk-Button text type="primary" :fontColor="'rgba(255,0,0,0.4)'">
          自定义文字颜色英文
        </Dk-Button>
      </div>
      <div class="code_show_Title">
        <Dk-Shadow :type="'title'">
          <template #left>
            <div style="line-height: 42px">(1).代码展示区域</div>
          </template>
          <template #right>
            <Dk-Button text type="default" @click="onFoundationType(1)">
              {{ customizeType ? '关闭' : '开启' }}
            </Dk-Button>
          </template>
        </Dk-Shadow>
      </div>
      <div class="code_show" v-show="customizeType">
        <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList" :key="ind">
          <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
            <highlightjs language="javascript" :code="item.name"></highlightjs>
            <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
          </div>
        </div>
      </div>
      <p style="margin: 10px">
        2: size 设置按钮大小large(大) medium(中) small(小) mini(迷你)
      </p>
      <div class="dkButton_DK_wb">
        <Dk-Button text type="primary" size="large"> large(大) </Dk-Button>
        <Dk-Button text type="primary" size="medium"> medium(中) </Dk-Button>
        <Dk-Button text type="primary" size="small"> small(小) </Dk-Button>
        <Dk-Button text type="primary" size="mini"> mini(迷你) </Dk-Button>
        <Dk-Button text type="primary" size="mini" :fontSize="30">
          自定义大小(fontSize:30)
        </Dk-Button>
        <Dk-Button
          text
          type="primary"
          size="mini"
          :fontSize="22"
          :fontColor="'rgba(255,0,0,0.4)'"
        >
          组合使用
        </Dk-Button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  /**
   * @name Dkbutton
   * @author fanKai16
   * @Time 2023/03/13
   * @property {Array} foundationList  基础使用
   * @property {Array} disableList     禁用状态
   * @property {Array} foundationHighlightjs  1.基础使用代码展示区逻辑代码
   * @property {Array} ForbiddenmodeList      1.禁用状态代码展示区逻辑代码
   * @property {Array} roundList       圆角按钮
   * @property {Array} roundNackList   1.圆角按钮代码展示区逻辑代码
   * @property {Array} circleList      圆形按钮
   * @property {Array} circleNackList  1.圆形按钮代码展示区逻辑代码
   * @property {Array} sizeList        尺寸size
   * @property {Array} sizeNackList    1.尺寸size代码展示区逻辑代码
   * @property {booler} FoundationType   基础使用代码开启区域
   * @property {booler} disableType   禁用使用代码开启区域
   * @property {booler} RoundType     圆角按钮代码开启区域
   * @property {booler} Circle        圆形按钮代码开启区域
   * @property {booler} BtnSize       尺寸 size代码开启区域
   * @property {booler} BtnLoading    加载中的状态开启区域
   * @property {Array}  LoadingNackList   加载中列表
   * @function oncopy  辅助区域
   * @function onFoundationType   基础使用代码开启区域点击事件
   * @function onDisableTypeType  禁用使用代码开启区域点击事件
   * @function onRoundTypeType    圆角按钮代码开启区域点击事件
   * @function onCircleType       圆形按钮代码开启区域点击事件
   * @function onBtnSize          尺寸 size代码开启区域点击事件
   * @function onloading          加载中的状态代码开启区域点击事件
   * @description 自定义按钮组件
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'Dkbuttonsm',
    setup() {
      const data = reactive({
        foundationHighlightjs: [
          {
            name: `<Dk-Button text type="default"> 默认(default) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary"> 基础(primary) </Dk-Button>`,
            nackName: '主要按钮',
            type: 'primary'
          },
          {
            name: `<Dk-Button text type="success"> 成功(success) </Dk-Button>`,
            nackName: '成功',
            type: 'success'
          },
          {
            name: `<Dk-Button text type="info"> 信息(info) </Dk-Button>`,
            nackName: '信息',
            type: 'info'
          },
          {
            name: `<Dk-Button text type="warning"> 警告(warning) </Dk-Button>`,
            nackName: '警告',
            type: 'warning'
          },
          {
            name: `<Dk-Button text type="danger"> 危险(danger) </Dk-Button>`,
            nackName: '危险',
            type: 'danger'
          }
        ],
        customizeTypeList: [
          {
            name: `<Dk-Button text type="primary" :fontColor="'#cb7979'"> 基础(primary) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" :fontColor="'red'"> 基础(primary) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" :fontColor="'rgb(255,0,0)'"> 基础(primary) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" :fontColor="'rgba(255,0,0,0.4)'"> 基础(primary) </Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        FoundationType: false,
        customizeType: false,
        disableType: false,
        RoundType: false,
        Circle: false,
        BtnSize: false,
        BtnLoading: false
      })
      const methods = reactive({
        oncopy(e: any) {
          const input = document.createElement('input')
          input.setAttribute('readonly', 'readonly')
          input.setAttribute('value', e)
          document.body.appendChild(input)
          input.setSelectionRange(0, 9999)
          input.select()
          document.execCommand('copy')
          document.body.removeChild(input)
          alert('复制成功')
        },
        onFoundationType(type) {
          if (type === 0) {
            data.FoundationType = !data.FoundationType
          } else if (type === 1) {
            data.customizeType = !data.customizeType
          }
        },
        onDisableTypeType() {
          data.disableType = !data.disableType
        },
        onRoundTypeType() {
          data.RoundType = !data.RoundType
        },
        onCircleType() {
          data.Circle = !data.Circle
        },
        onBtnSize() {
          data.BtnSize = !data.BtnSize
        },
        onloading() {
          data.BtnLoading = !data.BtnLoading
        }
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>
<style lang="scss" scoped>
  .dkButton {
    width: 100%;
    .dkButton_DK_wb {
      margin-bottom: 10px;
    }
    h3 {
      margin: 10px 0;
    }
    .dkButton_DK_csy {
      width: 100%;
      margin: 0 auto;

      .dkButton_DK_csy_title {
        padding: 0 0 10px 0;
        box-sizing: border-box;
      }

      .dkButton_DK_csy_div {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 5px;
      }

      .code_show_Title {
        width: 90%;
        padding: 0 5px;
        box-sizing: border-box;
      }

      .code_show {
        width: 100%;
      }

      .index_Dk_list {
        margin-top: 5px;
      }
    }
  }
</style>
