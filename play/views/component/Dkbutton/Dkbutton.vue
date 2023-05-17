<template>
  <div class="dkButton">
    <div class="dkButton_DK_csy">
      <div v-if="false">
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
          <Dk-Button text type="primary" :fontColor="'red'">
            自定义文字颜色英文
          </Dk-Button>
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
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(2)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType2">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList2" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
        <p style="margin: 10px">3: 禁用状态 disabled</p>
        <div class="dkButton_DK_wb">
          <Dk-Button text type="primary" size="small" disabled> small(小) </Dk-Button>
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(3)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType3">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList3" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
        <p style="margin: 10px">4: 文本上划线 中划线 下划线</p>
        <div class="dkButton_DK_wb">
          <Dk-Button text type="primary" size="small" :textDecoration="'lineThrough'">
            中划线
          </Dk-Button>
          <Dk-Button text type="primary" size="small" :textDecoration="'overline'">
            上划线
          </Dk-Button>
          <Dk-Button text type="primary" size="small" :textDecoration="'underline'">
            下划线
          </Dk-Button>
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(4)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType4">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList4" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false">
        <h3>2.A标签超文本标签</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button link :href="'https://m.baidu.com/'" type="primary">
            默认https://m.baidu.com/</Dk-Button
          >
          <Dk-Button
            link
            :href="'https://m.baidu.com/'"
            :textDecoration="'none'"
            :target="'_blank'"
          >
            A 标签_blank</Dk-Button
          >
          <Dk-Button
            link
            :href="'https://m.baidu.com/'"
            :textDecoration="'none'"
            :target="'_self'"
          >
            A 标签_self</Dk-Button
          >
          <Dk-Button
            link
            :href="'https://m.baidu.com/'"
            :textDecoration="'none'"
            :target="'_parent'"
          >
            A 标签_parent</Dk-Button
          >
          <Dk-Button
            link
            :href="'https://m.baidu.com/'"
            :textDecoration="'none'"
            :target="'_top'"
          >
            A 标签_top</Dk-Button
          >
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(5)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType5">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList5" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false">
        <h3>3.块元素按钮</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button> 默认</Dk-Button>
          <Dk-Button type="default">default</Dk-Button>
          <Dk-Button type="primary">primary</Dk-Button>
          <Dk-Button type="success">success</Dk-Button>
          <Dk-Button type="info">info</Dk-Button>
          <Dk-Button type="warning">warning</Dk-Button>
          <Dk-Button type="danger">danger</Dk-Button>
          <Dk-Button bgColor="#34AB98" fontColor="#fff"> 默认</Dk-Button>
          <Dk-Button
            bgColor="#34AB98"
            fontColor="#fff"
            disabled
            @click="onFoundationType(6)"
          >
            默认</Dk-Button
          >
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(6)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType6">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList6" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false">
        <h3>4.圆按钮</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button circle size="large">范</Dk-Button>
          <Dk-Button circle type="primary" size="medium">先</Dk-Button>
          <Dk-Button circle type="success" size="small">生</Dk-Button>
          <Dk-Button circle type="info" size="mini">英</Dk-Button>
          <Dk-Button circle type="warning" size="small" disabled>杰</Dk-Button>
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(7)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType7">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList7" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div v-if="false">
        <h3>4.带有阴影</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button shadow="0 1px 10px 0 #f0f0f0" size="large">默认按钮</Dk-Button>
          <Dk-Button shadow="0 1px 10px 0 #409eff" type="primary" size="large"
            >基础</Dk-Button
          >
          <Dk-Button shadow="0 1px 10px 0 #67c23a" type="success" size="large"
            >成功</Dk-Button
          >
          <Dk-Button shadow="0 1px 10px 0 #909399" type="info" size="large"
            >信息</Dk-Button
          >
          <Dk-Button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large"
            >警告</Dk-Button
          >
          <Dk-Button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large"
            >危险</Dk-Button
          >
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(8)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType8">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList8" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>5.涟漪效果</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button ripples size="large">默认</Dk-Button>
          <Dk-Button type="primary" ripples size="large">基础信息</Dk-Button>
          <Dk-Button type="success" ripples size="large">成功按钮</Dk-Button>
          <Dk-Button type="info" ripples size="large">信息按钮</Dk-Button>
          <Dk-Button type="warning" ripples size="large">警告按钮</Dk-Button>
          <Dk-Button type="danger" ripples size="large">危险按钮</Dk-Button>
          <Dk-Button ripples type="primary" ripplesBgColor="red" size="large"
            >自定义涟漪颜色</Dk-Button
          >
        </div>
        <div class="code_show_Title">
          <Dk-Shadow :type="'title'">
            <template #left>
              <div style="line-height: 42px">(1).代码展示区域</div>
            </template>
            <template #right>
              <Dk-Button text type="default" @click="onFoundationType(9)">
                {{ customizeType ? '关闭' : '开启' }}
              </Dk-Button>
            </template>
          </Dk-Shadow>
        </div>
        <div class="code_show" v-show="customizeType9">
          <div class="index_Dk_list" v-for="(item, ind) in customizeTypeList9" :key="ind">
            <div class="index_Dk_code" style="margin-top: 5px; width: 90%">
              <highlightjs language="javascript" :code="item.name"></highlightjs>
              <span class="fuzhi" @click="oncopy(item.name)">复制代码</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h3>5.扩散效果</h3>
        <div class="dkButton_DK_wb">
          <Dk-Button diffusion size="large" type="success">默认按钮</Dk-Button>
          <Dk-Button diffusion size="large" type="success">默认按钮</Dk-Button>
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
        customizeTypeList2: [
          {
            name: `<Dk-Button text type="primary" size="large"> large(大) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="medium"> medium(中) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="small"> small(小) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="mini"> mini(迷你) </Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="mini" :fontSize="30">`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList3: [
          {
            name: `<Dk-Button text type="primary" size="small" disabled> small(小) </Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList4: [
          {
            name: `<Dk-Button text type="primary" size="small" :textDecoration="'lineThrough'">中划线</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="small" :textDecoration="'overline'">上划线</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button text type="primary" size="small" :textDecoration="'underline'">下划线</Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList5: [
          {
            name: `<Dk-Button link :href="'https://m.baidu.com/'" type="primary"> 默认https://m.baidu.com/</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button link :href="'https://m.baidu.com/'" :textDecoration="'none'" :target="'_blank'"> A 标签_blank</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button link :href="'https://m.baidu.com/'" :textDecoration="'none'" :target="'_self'"> A 标签_self</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button link :href="'https://m.baidu.com/'" :textDecoration="'none'" :target="'_parent'"> A 标签_parent</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button link :href="'https://m.baidu.com/'" :textDecoration="'none'" :target="'_top'"> A 标签_top</Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList6: [
          {
            name: `<Dk-Button> 默认</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="default">default</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="primary">primary</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="success">success</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="info">info</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="warning">warning</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="danger">danger</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button bgColor="#34AB98" fontColor="#fff" disabled> 默认</Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList7: [
          {
            name: `<Dk-Button circle size="large">范</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button circle type="primary" size="medium">先</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button circle type="success" size="small">生</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button circle type="info" size="mini">英</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button circle type="warning" size="small" disabled>杰</Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList8: [
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #f0f0f0" size="large">默认按钮</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #409eff" type="primary" size="large">基础</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #67c23a" type="success" size="large">成功</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #909399" type="info" size="large">信息</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #e6a23c" type="warning" size="large">警告</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button shadow="0 1px 10px 0 #f56c6c" type="danger" size="large">危险</Dk-Button>`,
            nackName: '默认',
            type: ''
          }
        ],
        customizeTypeList9: [
          {
            name: `<Dk-Button ripples size="large">默认</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="primary" ripples size="large">基础信息</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="success" ripples size="large">成功按钮</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="info" ripples size="large">信息按钮</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="warning" ripples size="large">警告按钮</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button type="danger" ripples size="large">危险按钮</Dk-Button>`,
            nackName: '默认',
            type: ''
          },
          {
            name: `<Dk-Button ripples type="primary" ripplesBgColor="red" size="large">自定义涟漪颜色</Dk-Button>`,
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
