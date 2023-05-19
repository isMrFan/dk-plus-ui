<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'DkInputComponent',
  setup() {
    const oncopy = (code: string): void => {
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
    const handleFixClick = (): void => {
      console.log('handleFixClick')
    }
    const msg = ref('asdf')
    const input = ref(null)

    const isDisabled = ref(true)
    return {
      oncopy,
      handleFixClick,
      msg,
      focus,
      blur,
      input,
      isDisabled
    }
  }
})
</script>

<template>
  <div class="input">
    <!-- <Dk-Input
      v-model="msg"
      placeholder="change"
      :disabled="isDisabled"
    >
    </Dk-Input>
    <dk-button @click="toggleDisabled">切换{{ isDisabled }}</dk-button> -->

    <!-- <dk-input clearable placeholder="prefix插槽形式">
      <template #prefix>
        <dk-icon class="dk-icon-del1" />
      </template>
    </dk-input> -->

    <h4>文本域</h4>
    <dk-input type="textarea" placeholder="文本域" />

    <h4>数字框</h4>
    <dk-input type="number" placeholder="数字框" />

    <h4>密码框</h4>
    <dk-input type="password" placeholder="密码框" show-password />

    <h4>前后缀</h4>
    <dk-input></dk-input>
    <dk-input clearable placeholder="prefix属性绑定形式" prefix-icon />
    <dk-input clearable placeholder="prefix属性绑定形式" prefix-icon="dk-icon-del1" />
    <dk-input placeholder="插槽形式" prefix-icon suffix-icon>
      <template #prefix>
        <dk-icon class="dk-icon-del1" />
      </template>
      <template #suffix>
        <dk-icon class="dk-icon-del1" />
      </template>
    </dk-input>

    <h4>禁用</h4>
    <dk-input disabled placeholder="禁用" />

    <h4>清空</h4>
    <dk-input v-model="msg" clearable placeholder="清空" />
    {{ msg }}

    <!-- <Dk-Input focus-border-color="#f0f" text-color="#f0f"></Dk-Input> -->
    <!-- <div class="box" v-for="item in htmlList" :key="item.title">
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
    </div> -->
  </div>
</template>

<style lang="scss" scoped>
.input {
  width: 100%;

  .dk-input {
    margin-bottom: 20px;
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
}</style>
