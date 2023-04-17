<template>
  <div class="input">
    <div class="box" v-for="item in htmlList" :key="item.title">
      <div>{{ item.title }}</div>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="item.code" />
        <span class="copy" @click="oncopy(item.code)">复制代码</span>
      </div>
      <dk-input v-bind="item.attrs" />
    </div>
    <!-- <dk-input prefix-icon="dk-icon-del1" :suffix-click="aaa" suffix-icon="dk-icon-del1">
      <template #suffix>
        <dk-icon @click="aaa" :size="13" class="dk-icon-search"></dk-icon>
      </template>
    </dk-input> -->
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
    const handleFixClick = () => {
      console.log("handleFixClick");
    };
    const data = reactive({
      htmlList: [
        {
          title: "基础用法",
          code: `<dk-input placeholder="基础用法"/>`,
          attrs: {
            placeholder: "基础用法",
          },
        },
        {
          title: "禁用状态",
          code: `<dk-input placeholder="禁用状态" disabled/>`,
          attrs: {
            placeholder: "禁用状态",
            disabled: true,
          },
        },
        {
          title: "可清空",
          code: `<dk-input placeholder="可清空" clearable/>`,
          attrs: {
            placeholder: "可清空",
            clearable: true,
          },
        },
        {
          title: "密码框",
          code: `<dk-input placeholder="密码框" type="password"/>`,
          attrs: {
            placeholder: "密码框",
            type: "password",
          },
        },
        {
          title: "数字输入框",
          code: `<dk-input placeholder="数字输入框" type="number"/>`,
          attrs: {
            placeholder: "数字输入框",
            type: "number",
          },
        },
        {
          title: "前缀图标",
          code: `<dk-input placeholder="前缀图标" prefix-icon="dk-icon-search"/>`,
          attrs: {
            placeholder: "前缀图标",
            prefixIcon: "dk-icon-search",
            prefixClick: "aaa",
          },
        },
        {
          title: "后缀图标",
          code: `<dk-input placeholder="后缀图标" suffix-icon="dk-icon-search"/>`,
          attrs: {
            placeholder: "后缀图标",
            suffixIcon: "dk-icon-search",
          },
        },
        {
          title: "前缀图标点击事件",
          code: `<dk-input placeholder="前缀图标" :prefix-click='handleSuffixClick' prefix-icon="dk-icon-search"/>`,
          attrs: {
            placeholder: "前缀图标",
            suffixIcon: "dk-icon-search",
            suffixClick: handleFixClick,
          },
        },
        {
          title: "后缀图标点击事件",
          code: `<dk-input placeholder="后缀图标" :suffix-click='handleSuffixClick' suffix-icon="dk-icon-search"/>`,
          attrs: {
            placeholder: "后缀图标",
            suffixIcon: "dk-icon-search",
            suffixClick: handleFixClick,
          },
        },
        {
          title: "前缀插槽",
          code: `<dk-input placeholder="前缀插槽">
  <template #prefix>
    <dk-icon :size="13" class="dk-icon-search"></dk-icon>
  </template>
</dk-input>`,
          attrs: {
            placeholder: "前缀插槽",
            prefixIcon: "dk-icon-search",
          },
        },
        {
          title: "后缀插槽",
          code: `<dk-input placeholder="后缀插槽">
  <template #suffix>
    <dk-icon :size="13" class="dk-icon-search"></dk-icon>
  </template>
</dk-input>`,
          attrs: {
            placeholder: "后缀插槽",
            suffixIcon: "dk-icon-search",
          },
        },
        {
          title: '文本域',
          code: `<dk-input placeholder="文本域" type="textarea" rows="3"/>`,
          attrs: {
            placeholder: "文本域",
            type: "textarea",
            rows: 3,
          },
        }
        // {
        //   title: "前缀内容",
        //   code: `<dk-input placeholder="前缀内容" prefix="￥"/>`,
        //   attrs: {
        //     placeholder: "前缀内容",
        //     prefix: "￥"
        //   }
        // },
        // {
        //   title: "后缀内容",
        //   code: `<dk-input placeholder="后缀内容" suffix=".00"/>`,
        //   attrs: {
        //     placeholder: "后缀内容",
        //     suffix: ".00"
        //   }
        // },
      ],
    });

    function getComponentName(code) {
      // 在这里根据字符串 code 返回对应的组件名称
      if (code === '<dk-input placeholder="基础用法"/>') {
        return "DkInput";
      }
    }
    return {
      ...data,
      oncopy,
      getComponentName,
      handleFixClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.input {
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

    .dk-input {
      width: 180px;
    }
  }
}
</style>
