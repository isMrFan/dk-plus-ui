<script lang="ts">
  /**
   * @name Dkbutton
   * @author fanKai16
   * @Time 2023/03/13
   * @property {Array} foundationList  基础使用
   * @description 自定义按钮组件
   **/
  import { defineComponent, reactive, toRefs } from 'vue'
  export default defineComponent({
    name: 'Dkbuttonsm',
    setup() {
      const data = reactive({
        foundationHighlightjs: [
          {
            name: '<Dk-Button text type="default"> 默认(default) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary"> 基础(primary) </Dk-Button>',
            nackName: '主要按钮',
            type: 'primary'
          },
          {
            name: '<Dk-Button text type="success"> 成功(success) </Dk-Button>',
            nackName: '成功',
            type: 'success'
          },
          {
            name: '<Dk-Button text type="info"> 信息(info) </Dk-Button>',
            nackName: '信息',
            type: 'info'
          },
          {
            name: '<Dk-Button text type="warning"> 警告(warning) </Dk-Button>',
            nackName: '警告',
            type: 'warning'
          },
          {
            name: '<Dk-Button text type="danger"> 危险(danger) </Dk-Button>',
            nackName: '危险',
            type: 'danger'
          }
        ],
        customizeTypeList: [
          {
            name: '<Dk-Button text type="primary" :fontColor="\'#cb7979\'"> 基础(primary) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" :fontColor="\'red\'"> 基础(primary) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" :fontColor="\'rgb(255,0,0)\'"> 基础(primary) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" :fontColor="\'rgba(255,0,0,0.4)\'"> 基础(primary) </Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList2: [
          {
            name: '<Dk-Button text type="primary" size="large"> large(大) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="medium"> medium(中) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="small"> small(小) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="mini"> mini(迷你) </Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="mini" :fontSize="30">',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList3: [
          {
            name: '<Dk-Button text type="primary" size="small" disabled> small(小) </Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList4: [
          {
            name: '<Dk-Button text type="primary" size="small" :textDecoration="\'lineThrough\'">中划线</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="small" :textDecoration="\'overline\'">上划线</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button text type="primary" size="small" :textDecoration="\'underline\'">下划线</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList5: [
          {
            name: '<Dk-Button link :href="\'https://m.baidu.com/\'" type="primary"> 默认https://m.baidu.com/</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button link :href="\'https://m.baidu.com/\'" :textDecoration="\'none\'" :target="\'_blank\'"> A 标签_blank</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button link :href="\'https://m.baidu.com/\'" :textDecoration="\'none\'" :target="\'_self\'"> A 标签_self</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button link :href="\'https://m.baidu.com/\'" :textDecoration="\'none\'" :target="\'_parent\'"> A 标签_parent</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button link :href="\'https://m.baidu.com/\'" :textDecoration="\'none\'" :target="\'_top\'"> A 标签_top</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList6: [
          {
            name: '<Dk-Button> 默认</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="default">default</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="primary">primary</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="success">success</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="info">info</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="warning">warning</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="danger">danger</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button bgColor="#34AB98" fontColor="#fff" disabled> 默认</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList7: [
          {
            name: '<Dk-Button circle size="large">范</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button circle type="primary" size="medium">先</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button circle type="success" size="small">生</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button circle type="info" size="mini">英</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button circle type="warning" size="small" disabled>杰</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList8: [
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #f0f0f0" size="large">默认按钮</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #409eff" type="primary" size="large">基础</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #67c23a" type="success" size="large">成功</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #909399" type="info" size="large">信息</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">警告</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">危险</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList9: [
          {
            name: '<Dk-Button ripples size="large">默认</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="primary" ripples size="large">基础信息</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="success" ripples size="large">成功按钮</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="info" ripples size="large">信息按钮</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="warning" ripples size="large">警告按钮</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button type="danger" ripples size="large">危险按钮</Dk-Button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<Dk-Button ripples type="primary" ripplesBgColor="red" size="large">自定义涟漪颜色</Dk-Button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList10: [
          {
            name: '<dk-button diffusion type="primary" size="large">基础信息</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion type="success" size="large">成功按钮</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion type="info" size="large">信息按钮</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion type="warning" size="large">警告按钮</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion type="danger" size="large">危险按钮</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion size="large" type="success" disabled>默认按钮</dk-button>',
            nackName: '默认',
            type: ''
          },
          {
            name: '<dk-button diffusion type="primary" diffusion-bg-color="red" size="large">自定扩散效果 颜色</dk-button>',
            nackName: '默认',
            type: ''
          }
        ],
        customizeType2: false,
        customizeType3: false,
        customizeType4: false,
        customizeType5: false,
        customizeType6: false,
        customizeType7: false,
        customizeType8: false,
        customizeType9: false,
        customizeType10: false,
        FoundationType: false,
        customizeType: false,
        disableType: false,
        RoundType: false,
        Circle: false,
        BtnSize: false,
        BtnLoading: false
      })
      const methods = reactive({
        oncopy(e: string) {
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
          } else if (type === 2) {
            data.customizeType2 = !data.customizeType2
          } else if (type === 3) {
            data.customizeType3 = !data.customizeType3
          } else if (type === 4) {
            data.customizeType4 = !data.customizeType4
          } else if (type === 5) {
            data.customizeType5 = !data.customizeType5
          } else if (type === 6) {
            data.customizeType6 = !data.customizeType6
          } else if (type === 7) {
            data.customizeType7 = !data.customizeType7
          } else if (type === 8) {
            data.customizeType8 = !data.customizeType8
          } else if (type === 9) {
            data.customizeType9 = !data.customizeType9
          } else if (type === 10) {
            data.customizeType10 = !data.customizeType10
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
<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <div>
        <h3>1.文本按钮</h3>
        <dk-button loading> 加载中 </dk-button>
        <div class="dkButton_DK_wb">
          <dk-button text :icon="'IconShanchu1'" :after-icon="'IconShanchu1'">
            默认
          </dk-button>
          <dk-button text type="primary"> 基础(primary) </dk-button>
          <dk-button text type="success"> 成功(success) </dk-button>
          <dk-button text type="info"> 信息(info) </dk-button>
          <dk-button text type="warning"> 警告(warning) </dk-button>
          <dk-button text type="danger"> 危险(danger) </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(0)">
                {{ FoundationType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="FoundationType" class="code_show">
          <div
            v-for="(item, ind) in foundationHighlightjs"
            :key="ind"
            class="index_Dk_list"
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
          <dk-button text type="primary" :font-color="'#cb7979'">
            自定义文字颜色16进制
          </dk-button>
          <dk-button text type="primary" :font-color="'red'">
            自定义文字颜色英文
          </dk-button>
          <dk-button text type="primary" :font-color="'rgb(255,0,0)'">
            自定义文字颜色英文
          </dk-button>
          <dk-button text type="primary" :font-color="'rgba(255,0,0,0.4)'">
            自定义文字颜色英文
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(1)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType" class="code_show">
          <div v-for="(item, ind) in customizeTypeList" :key="ind" class="index_Dk_list">
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
          <dk-button text type="primary" size="large"> large(大) </dk-button>
          <dk-button text type="primary" size="medium"> medium(中) </dk-button>
          <dk-button text type="primary" size="small"> small(小) </dk-button>
          <dk-button text type="primary" size="mini"> mini(迷你) </dk-button>
          <dk-button text type="primary" size="mini" :font-size="30">
            自定义大小(fontSize:30)
          </dk-button>
          <dk-button
            text
            type="primary"
            size="mini"
            :font-size="22"
            :font-color="'rgba(255,0,0,0.4)'"
          >
            组合使用
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(2)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType2" class="code_show">
          <div v-for="(item, ind) in customizeTypeList2" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
        <p style="margin: 10px">3: 禁用状态 disabled</p>
        <div class="dkButton_DK_wb">
          <dk-button text type="primary" size="small" disabled> small(小) </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(3)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType3" class="code_show">
          <div v-for="(item, ind) in customizeTypeList3" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
        <p style="margin: 10px">4: 文本上划线 中划线 下划线</p>
        <div class="dkButton_DK_wb">
          <dk-button text type="primary" size="small" :text-decoration="'lineThrough'">
            中划线
          </dk-button>
          <dk-button text type="primary" size="small" :text-decoration="'overline'">
            上划线
          </dk-button>
          <dk-button text type="primary" size="small" :text-decoration="'underline'">
            下划线
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(4)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType4" class="code_show">
          <div v-for="(item, ind) in customizeTypeList4" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>2.A标签超文本标签</h3>
        <div class="dkButton_DK_wb">
          <dk-button
            link
            :href="'https://m.baidu.com/'"
            :icon="'IconShanchu1'"
            :after-icon="'IconShanchu1'"
            type="primary"
          >
            默认https://m.baidu.com/
          </dk-button>
          <dk-button
            link
            :href="'https://m.baidu.com/'"
            :text-decoration="'none'"
            :target="'_blank'"
          >
            A 标签_blank
          </dk-button>
          <dk-button
            link
            :href="'https://m.baidu.com/'"
            :text-decoration="'none'"
            :target="'_self'"
          >
            A 标签_self
          </dk-button>
          <dk-button
            link
            :href="'https://m.baidu.com/'"
            :text-decoration="'none'"
            :target="'_parent'"
          >
            A 标签_parent
          </dk-button>
          <dk-button
            link
            :href="'https://m.baidu.com/'"
            :text-decoration="'none'"
            :target="'_top'"
          >
            A 标签_top
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(5)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType5" class="code_show">
          <div v-for="(item, ind) in customizeTypeList5" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>3.块元素按钮</h3>
        <div class="dkButton_DK_wb">
          <dk-button :icon="'IconShanchu1'" :after-icon="'IconShanchu1'"> 默认</dk-button>
          <dk-button :icon="'IconShanchu1'" :after-icon="'IconShanchu1'" type="default">
            default
          </dk-button>
          <dk-button type="primary">primary</dk-button>
          <dk-button type="success">success</dk-button>
          <dk-button type="info">info</dk-button>
          <dk-button type="warning">warning</dk-button>
          <dk-button type="danger">danger</dk-button>
          <dk-button bg-color="#34AB98" font-color="#fff"> 默认</dk-button>
          <dk-button
            bg-color="#34AB98"
            font-color="#fff"
            disabled
            @click="onFoundationType(6)"
          >
            默认
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(6)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType6" class="code_show">
          <div v-for="(item, ind) in customizeTypeList6" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>4.圆按钮</h3>
        <div class="dkButton_DK_wb">
          <dk-button circle :icon="'IconShanchu1'" size="large"></dk-button>
          <dk-button circle :icon="'IconShanchu1'" type="primary" size="medium">
          </dk-button>
          <dk-button circle type="success" size="small">生</dk-button>
          <dk-button circle type="info" size="mini">英</dk-button>
          <dk-button circle type="warning" size="small" disabled>杰</dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(7)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType7" class="code_show">
          <div v-for="(item, ind) in customizeTypeList7" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>4.带有阴影</h3>
        <div class="dkButton_DK_wb">
          <dk-button shadow="0 1px 10px 0 #f0f0f0" size="large">默认按钮</dk-button>
          <dk-button shadow="0 1px 10px 0 #409eff" type="primary" size="large">
            基础
          </dk-button>
          <dk-button shadow="0 1px 10px 0 #67c23a" type="success" size="large">
            成功
          </dk-button>
          <dk-button shadow="0 1px 10px 0 #909399" type="info" size="large">
            信息
          </dk-button>
          <dk-button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">
            警告
          </dk-button>
          <dk-button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">
            危险
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(8)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType8" class="code_show">
          <div v-for="(item, ind) in customizeTypeList8" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>5.涟漪效果(不可和扩散效果联动因为太丑)</h3>
        <div class="dkButton_DK_wb">
          <dk-button ripples size="large">默认</dk-button>
          <dk-button type="primary" ripples size="large">基础信息</dk-button>
          <dk-button type="success" ripples size="large">成功按钮</dk-button>
          <dk-button type="info" ripples size="large">信息按钮</dk-button>
          <dk-button type="warning" ripples size="large">警告按钮</dk-button>
          <dk-button type="danger" ripples size="large">危险按钮</dk-button>
          <dk-button ripples type="primary" ripples-bg-color="red" size="large">
            自定义涟漪颜色
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(9)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType9" class="code_show">
          <div v-for="(item, ind) in customizeTypeList9" :key="ind" class="index_Dk_list">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>6.扩散效果(不可和涟漪效果联动因为太丑)</h3>
        <div class="dkButton_DK_wb">
          <dk-button diffusion type="primary" size="large">基础信息</dk-button>
          <dk-button diffusion type="success" size="large">成功按钮</dk-button>
          <dk-button diffusion type="info" size="large">信息按钮</dk-button>
          <dk-button diffusion type="warning" size="large">警告按钮</dk-button>
          <dk-button diffusion type="danger" size="large">危险按钮</dk-button>
          <dk-button diffusion size="large" type="success" disabled>默认按钮</dk-button>
          <dk-button diffusion type="primary" diffusion-bg-color="red" size="large">
            自定扩散效果 颜色
          </dk-button>
        </div>
        <div class="code_show_Title">
          <dk-shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <dk-button text type="default" @click="onFoundationType(10)">
                {{ customizeType ? '关闭' : '开启' }}
              </dk-button>
            </template>
          </dk-shadow>
        </div>
        <div v-show="customizeType10" class="code_show">
          <div
            v-for="(item, ind) in customizeTypeList10"
            :key="ind"
            class="index_Dk_list"
          >
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>7.圆角按钮 round</h3>
        <div class="dkButton_DK_wb">
          <dk-button round>圆角按钮</dk-button>
        </div>
      </div>
      <div>
        <h3>7.1 按钮图标 icon</h3>
        <div class="dkButton_DK_wb">asdas</div>
      </div>
      <div>
        <h3>8.个性按钮</h3>
        <p>personalityType(个性按钮类型):</p>
        <p>disabled(是否禁用)</p>
        <p>personalitySize(个性按钮大小):同传统按钮配置相同</p>
        <p>personalityBorderColor:(自定义BORder) 支持数组['上','右','下','左']</p>
        <p>
          personalityBorderHoveColor:(自定义hoverBORder) 支持数组['上','右','下','左']
        </p>
        <p>personalityBgColor:(自定义背景色)</p>
        <p>personalityBgHoveColor:(自定义hover背景色)</p>
        <p>personalityFontColor:(自定字体颜色)</p>
        <p>personalityFontHoveColor:(自定字体颜色hover)</p>
        <p>personalityBoxShadow:(自定义阴影)</p>
        <p>personalityBoxShadowHove:(自定义阴影悬停配置)</p>
        <h4>8.1 BI缺角渐变按钮(BiCurvedA)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="BiCurvedA" personality-size="large">
            BI缺角渐变按钮(BiCurvedA)
          </dk-button>
        </div>
        <h4>8.2 多重阴影按钮(multiple)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="multiple" personality-size="large">
            多重阴影按钮(multiple)
          </dk-button>
          <dk-button
            personality
            personality-type="multiple"
            loading
            :personality-border-color="['red', 'red', 'red', 'red']"
            :personality-border-hove-color="['blue', 'blue', 'blue', 'blue']"
            personality-font-color="red"
            personality-box-shadow-hove="red 5px 5px, red 10px 10px,red 50px 50px"
          >
            多重阴影按钮(multiple)
          </dk-button>
        </div>
        <h4>8.3 收缩动画按钮(stretchBtn)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="stretchBtn" personality-size="medium">
            基础信息(stretchBtn)
          </dk-button>
        </div>
        <h4>8.4 闪亮 发光(shine)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="shine" personality-size="medium">
            基础信息(shine)
          </dk-button>
          <dk-button
            personality
            personality-type="shine"
            personality-bg-color="#38ef7d"
            personality-bg-hove-color="red"
            personality-size="medium"
          >
            自定义基础信息(shine)
          </dk-button>
        </div>
        <h4>8.5 银光倒影(SilverReflection)</h4>
        <div class="dkButton_DK_wb">
          <dk-button
            personality
            personality-type="SilverReflection"
            personality-size="medium"
          >
            银光倒影(SilverReflection)
          </dk-button>
        </div>
        <h4 style="margin-top: 50px">8.6 扁平按钮(flatBtn)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="flatBtn" personality-size="medium">
            扁平按钮(flatBtn)
          </dk-button>
        </div>
        <h4>8.7 双展开按钮(TurnOpen)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="TurnOpen" personality-size="medium">
            双展开按钮(TurnOpen)
          </dk-button>
        </div>
        <h4>8.8 灯光按钮(lightBtn)</h4>
        <div class="dkButton_DK_wb">
          <dk-button personality personality-type="lightBtn" personality-size="medium">
            灯光按钮(lightBtn)
          </dk-button>
        </div>
        <h4>8.9 立体嵌入式按钮(stereoscopic)</h4>
        <div class="dkButton_DK_wb">
          <dk-button
            personality
            personality-type="stereoscopic"
            personality-size="medium"
          >
            立体嵌入式按钮(lightBtn)
          </dk-button>
        </div>
        <h4>8.10 双展开按钮2(TurnOpenBorder)</h4>
        <div class="dkButton_DK_wb">
          <dk-button
            personality
            personality-type="TurnOpenBorder"
            personality-size="medium"
          >
            双展开按钮2(TurnOpenBorder)
          </dk-button>
        </div>
      </div>
    </div>
  </div>
</template>
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
</style>./DkButton.vue
