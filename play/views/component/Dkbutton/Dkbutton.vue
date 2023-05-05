<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <div class="dkButton_DK_wb">
        <Dk-Button text type="primary">
          这是按钮
        </Dk-Button>
        <Dk-Button text type="primary">
          这是按钮
        </Dk-Button>
        <!-- <Dk-Button text type="primary"> 文本 </Dk-Button>
        <Dk-Button text type="success"> 文本 </Dk-Button>
        <Dk-Button text type="info"> 文本 </Dk-Button>
        <Dk-Button text type="warning"> 文本 </Dk-Button>
        <Dk-Button text type="danger"> 文本 </Dk-Button> -->
      </div>

      <div class="code_show_Title">
        <Dk-Shadow :type="'title'">
          <template #left>
            <div style="line-height: 42px">(1).代码展示区域</div>
          </template>
          <template #right>
            <!-- <Dk-Button @click="onFoundationType">
              {{ FoundationType ? '关闭' : '开启' }}
            </Dk-Button> -->
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
            name: `<Dk-Button>基础使用</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="primary">主要按钮</Dk-Button>`,
            nackName: '主要按钮',
            type: 'primary'
          },
          {
            name: `<Dk-Button type="success">成功</Dk-Button>`,
            nackName: '成功',
            type: 'success'
          },
          {
            name: `<Dk-Button type="info">信息</Dk-Button>`,
            nackName: '信息',
            type: 'info'
          },
          {
            name: `<Dk-Button type="warning">警告</Dk-Button>`,
            nackName: '警告',
            type: 'warning'
          },
          {
            name: `<Dk-Button type="danger">危险</Dk-Button>`,
            nackName: '危险',
            type: 'danger'
          }
        ],
        FoundationType: false,
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
        onFoundationType() {
          data.FoundationType = !data.FoundationType
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
