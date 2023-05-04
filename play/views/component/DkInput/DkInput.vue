<template>
  <div class="input">
    <dk-input></dk-input>
    <dk-input
      v-model="msg"
      @change="change"
      ref="input"
      prefix-icon="del1"
      show-length-limit
      @prefix-click="handleFixClick"
      prepend="https://"
      append=".com"
    >
      <!-- <template #prefix>
      <dk-icon slot="prefix" class="dk-icon-del1"></dk-icon>
    </template> -->
      <dk-icon slot="prepend" class="dk-icon-del1"></dk-icon>
    </dk-input>
    <div class="box" v-for="item in htmlList" :key="item.title">
      <div>{{ item.title }}</div>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="item.code" />
        <span class="copy" @click="oncopy(item.code)">复制代码</span>
      </div>
      <dk-input v-bind="item.attrs" />
    </div>
    <div class="box">
      <dk-input v-model="msg" type="" placeholder="清空" clearable />
      {{ msg }}
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref, watch, reactive } from 'vue'
  export default defineComponent({
    name: 'DkInputComponent',
    setup() {
      const oncopy = (code: string) => {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', code)
        document.body.appendChild(input)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
          alert('复制成功')
        }
        document.body.removeChild(input)
      }
      const handleFixClick = () => {
        console.log('handleFixClick')
      }
      const msg = ref('hello world')
      const change = e => {
        console.log('父组件', e)
      }
      const focus = e => {
        console.log('父组件', e)
      }
      const blur = e => {
        console.log('父组件', e)
        console.log(input)
      }
      const input = ref(null)
      const data = reactive({
        htmlList: [
          {
            title: 'change',
            code: `<dk-input v-model="msg" @change="change" prefix-icon="del1" @prefix-click="handleFixClick">`,
            attrs: {
              placeholder: 'change',
              prefixIcon: 'del1',
              change: change,
              modelValue: msg
            }
          },
          {
            title: '基础用法',
            code: `<dk-input placeholder="基础用法"/>`,
            attrs: {
              placeholder: '基础用法'
            }
          },
          {
            title: '禁用状态',
            code: `<dk-input placeholder="禁用状态" disabled/>`,
            attrs: {
              placeholder: '禁用状态',
              disabled: true
            }
          },
          {
            title: '可清空',
            code: `<dk-input placeholder="可清空" clearable/>`,
            attrs: {
              placeholder: '可清空',
              clearable: true
            }
          },
          {
            title: '密码框',
            code: `<dk-input placeholder="密码框" type="password"/>`,
            attrs: {
              placeholder: '密码框',
              type: 'password'
            }
          },
          {
            title: '可查看密码',
            code: `<dk-input placeholder="可查看密码" show-password type="password"/>`,
            attrs: {
              placeholder: '密码框',
              type: 'password',
              showPassword: true
            }
          },
          {
            title: '前缀图标',
            code: `<dk-input placeholder="前缀图标" prefix-icon="search"/>`,
            attrs: {
              placeholder: '前缀图标',
              prefixIcon: 'search'
            },
            emits: ['prefix-click']
          },
          {
            title: '后缀图标',
            code: `<dk-input placeholder="后缀图标" suffix-icon="search"/>`,
            attrs: {
              placeholder: '后缀图标',
              suffixIcon: 'search',
              clearable: true
            }
          },
          {
            title: '前缀图标点击事件',
            code: `<dk-input placeholder="前缀图标" @prefix-click='handleSuffixClick' prefix-icon="search"/>`,
            attrs: {
              placeholder: '前缀图标',
              prefixIcon: 'search'
            },
            emits: ['prefix-click']
          },
          {
            title: '后缀图标点击事件',
            code: `<dk-input placeholder="后缀图标" @suffix-click='handleSuffixClick' suffix-icon="search"/>`,
            attrs: {
              placeholder: '后缀图标',
              suffixIcon: 'search'
            },
            emits: ['suffix-click']
          },
          {
            title: '前缀插槽',
            code: `<dk-input placeholder="前缀插槽">
  <template #prefix>
    <dk-icon :size="13" class="dk-icon-search"></dk-icon>
  </template>
</dk-input>`,
            attrs: {
              placeholder: '前缀插槽',
              prefixIcon: 'search'
            }
          },
          {
            title: '后缀插槽',
            code: `<dk-input placeholder="后缀插槽">
  <template #suffix>
    <dk-icon :size="13" class="dk-icon-search"></dk-icon>
  </template>
</dk-input>`,
            attrs: {
              placeholder: '后缀插槽',
              suffixIcon: 'search'
            }
          },
          {
            title: '文本域',
            code: `<dk-input placeholder="文本域" type="textarea" rows="3"/>`,
            attrs: {
              placeholder: '文本域',
              type: 'textarea',
              rows: 3
            }
          },
          {
            title: '高度自适应文本域',
            code: `<dk-input placeholder="高度自适应文本域" type="textarea" autosize rows="3"/>`,
            attrs: {
              placeholder: '高度自适应文本域',
              type: 'textarea',
              rows: 3,
              autosize: true
            }
          },
          {
            title: '前缀内容',
            code: `<dk-input placeholder="前缀内容" prepend="￥"> 
  <template #prepend>
    <dk-icon class="dk-icon-del1"></dk-icon>
  </template>
</dk-input>`,
            attrs: {
              placeholder: '前缀内容',
              prepend: '￥',
              vModel: msg
            }
          },
          {
            title: '后缀内容',
            code: `<dk-input placeholder="后缀内容" append=".00"/>`,
            attrs: {
              placeholder: '后缀内容',
              append: '.00'
            }
          },
          {
            title: 'size',
            code: `<dk-input placeholder="size" size='medium'/>`,
            attrs: {
              placeholder: 'medium',
              size: 'medium'
            }
          },
          {
            title: 'size',
            code: `<dk-input placeholder="size" size='small'/>`,
            attrs: {
              placeholder: 'small',
              size: 'small'
            }
          },
          {
            title: 'size',
            code: `<dk-input placeholder="size" size='mini'/>`,
            attrs: {
              placeholder: 'mini',
              size: 'mini'
            }
          },
          {
            title: '输入框内容长度限制',
            code: `<dk-input placeholder="输入框内容长度限制" maxlength="10" minlength='4'/>`,
            attrs: {
              placeholder: '输入框内容长度限制',
              maxlength: 10,
              minlength: 4
            }
          }
        ]
      })

      function getComponentName(code) {
        // 在这里根据字符串 code 返回对应的组件名称
        if (code === '<dk-input placeholder="基础用法"/>') {
          return 'DkInput'
        }
      }

      return {
        ...data,
        oncopy,
        getComponentName,
        handleFixClick,
        msg,
        change,
        focus,
        blur,
        input
      }
    }
  })
</script>

<style lang="scss" scoped>
  .input {
    .dk-input {
      width: 400px;
    }
    .box {
      margin-bottom: 20px;
      margin-top: 10px;
      margin-right: 10px;
      border: #ccc 1px solid;
      padding: 20px;
      border-radius: 4px;
      .index_Dk_code {
        position: relative;
        margin-bottom: 20px;
        .copy {
          position: absolute;
          right: 10px;
          top: 10px;
          cursor: pointer;
          color: #ccc;
        }
      }
    }
  }
</style>
