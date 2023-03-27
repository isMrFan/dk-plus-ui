<template>
  <div class="index_Dk-Shadow">
    <h4>1.Dk-Shadow 组件</h4>
    <p>(1).基础用法</p>
    <p>
      (2).type
      用来判定是标题还是内容(title|标题,box|自定义内容,默认为box)(标题插槽|slot-left
      -左插槽,slot-right -右插槽,slot-box -内容插槽)
    </p>
    <p>(3).shadowClass 自定义样式 默认: -</p>
    <p>(4).hoverType 用来判定是否开启悬停效果 默认:false</p>
    <p>(4).hoverClass 自定义悬停样式 默认: -</p>
    <!--基础使用-->
    <h6>1.基础组件使用</h6>
    <Dk-Shadow>1.基础组件使用</Dk-Shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.foundation" />
      <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
    </div>
    <div class="index_Dk_mg"></div>
    <!--基础使用结束-->
    <!--使用插槽-->
    <h6>2.使用插槽</h6>
    <Dk-Shadow :type="'title'" :hoverType="false">
      <template #left>
        <span>1.左插槽(#left) </span>
      </template>
      <template #right>
        <span>2.右插槽(#right)</span>
      </template>
    </Dk-Shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.chacaoshix" />
      <span class="fuzhi" @click="oncopy(htmlJson.chacaoshix)">复制代码</span>
    </div>
    <div class="index_Dk_mg"></div>
    <!--使用插槽结束-->
    <!--自定义样式-->
    <h6>3.自定义样式</h6>
    <Dk-Shadow :shadowClass="'cesa'">1.自定义样式(shadowClass)</Dk-Shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.zidingyihtml" />
      <span class="fuzhi" @click="oncopy(htmlJson.zidingyihtml)">复制代码</span>
    </div>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.zidingyihtmlcss" />
      <span class="fuzhi" @click="oncopy(htmlJson.zidingyihtmlcss)">复制代码</span>
    </div>
    <!--自定义样式结束-->
    <!--悬停效果-->
    <div class="index_Dk_mg"></div>
    <h6>4.用来判定是否开启悬停效果</h6>
    <Dk-Shadow :hoverType="true">1.组件悬停(hoverType)</Dk-Shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.xuantiao" />
      <span class="fuzhi" @click="oncopy(htmlJson.xuantiao)">复制代码</span>
    </div>
    <!--悬停效果结束-->
    <div class="index_Dk_mg"></div>
    <Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'"
      >1.自定义悬停效果:hoverClass</Dk-Shadow
    >
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.zdyxuantiao" />
      <span class="fuzhi" @click="oncopy(htmlJson.zdyxuantiao)">复制代码</span>
    </div>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.zdyxuantiaocss" />
      <span class="fuzhi" @click="oncopy(htmlJson.zdyxuantiaocss)">复制代码</span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkShadowsm',
    setup() {
      const htmlJson = {
        foundation: `<Dk-Shadow>1.基础组件使用</Dk-Shadow>`,
        chacaoshix: `<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.左插槽(#left) </span>
  </template>
  <template #right>
    <span>2.右插槽(#right)</span>
  </template>
</Dk-Shadow>`,
        zidingyihtml: `<Dk-Shadow :shadowClass="'cesa'">1.自定义样式(shadowClass)</Dk-Shadow>`,
        zidingyihtmlcss: `.cesa {
  box-shadow: 0 0 4px red;
}`,
        xuantiao: `<Dk-Shadow :hoverType="true">1.组件悬停(hoverType)</Dk-Shadow>`,
        zdyxuantiao: `<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'">
        1.自定义悬停效果:hoverClass
</Dk-Shadow>`,
        zdyxuantiaocss: `.hoverClass {
  transform: translateY(-2%);
  box-shadow: 1px 4px 10px 2px red;
}`
      }
      const oncopy = (e: any) => {
        const input = document.createElement('input')
        input.setAttribute('readonly', 'readonly')
        input.setAttribute('value', e)
        document.body.appendChild(input)
        input.setSelectionRange(0, 9999)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
        alert('复制成功')
      }
      return {
        htmlJson,
        oncopy
      }
    }
  })
</script>
<style lang="scss" scoped>
  .index_Dk-Shadow {
    width: 80%;
    margin: 10px auto;
    h4,
    h6 {
      margin-bottom: 10px;
    }
    p {
      margin-bottom: 10px;
    }
    .index_Dk_mg {
      margin-bottom: 20px;
    }
  }
  .cesa {
    box-shadow: 0 0 4px red;
  }
  .hoverClass {
    transform: translateY(-2%);
    box-shadow: 1px 4px 10px 2px red;
  }
</style>
