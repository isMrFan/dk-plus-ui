<template>
  <div class="input">
    <div class="box" v-for="item in htmlList" :key="item.title">
      <div>{{item.title}}</div>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="item.code" />
        <span class="copy" @click="oncopy(item.code)">复制代码</span>
      </div>

      <dk-input v-bind="item.attrs" />
      
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, reactive } from "vue";
export default defineComponent({
  name: "DkInputComponent",
  setup() {
  
    const oncopy = (code: string) => {
      const input = document.createElement("input");
      input.setAttribute("readonly", "readonly");
      input.setAttribute("value", code);
      document.body.appendChild(input);
      input.select();
      if (document.execCommand("copy")) {
        document.execCommand("copy");
        alert("复制成功");
      }
      document.body.removeChild(input);
    };
    const data = reactive({
      htmlList: [
        {
          title: "基础用法",
          code: `<dk-input placeholder="基础用法"/>`,
          attrs: {
            placeholder: "基础用法"
          }
        },
        {
          title: "禁用状态",
          code: `<dk-input placeholder="禁用状态" disabled/>`,
          attrs: {
            placeholder: "禁用状态",
            disabled: true
          }
        },
        {
          title: "可清空",
          code: `<dk-input placeholder="可清空" clearable/>`,
          attrs: {
            placeholder: "可清空",
            clearable: true
          }
        },
        {
          title: "密码框",
          code: `<dk-input placeholder="密码框" type="password"/>`,
          attrs: {
            placeholder: "密码框",
            type: "password"
          }
        },
        {
          title: "数字输入框",
          code: `<dk-input placeholder="数字输入框" type="number"/>`,
          attrs: {
            placeholder: "数字输入框",
            type: "number"
          }
        },
      ]
    });

    function getComponentName(code) {
      // 在这里根据字符串 code 返回对应的组件名称
      if (code === '<dk-input placeholder="基础用法"/>') {
        return 'DkInput'
      }
    }
    return {
      ...data,
      oncopy,
      getComponentName
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
.box{
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
      top: 50%;
      transform: translateY(-50%);
      cursor: pointer;
      color: #ccc;
    }
  }

  .dk-input {
    width: 180px;
    height: 34px;
  }
}
}
</style>
