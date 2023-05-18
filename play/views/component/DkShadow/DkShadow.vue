<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkShadowsm',
    setup() {
      const htmlJson = {
        foundation: '<Dk-Shadow>1.基础组件使用</Dk-Shadow>',
        chacaoshix: `<Dk-Shadow :type="'title'" :hoverType="false">
  <template #left>
    <span>1.左插槽(#left) </span>
  </template>
  <template #right>
    <span>2.右插槽(#right)</span>
  </template>
</Dk-Shadow>`,
        zidingyihtml:
          '<Dk-Shadow :shadowClass="\'cesa\'">1.自定义样式(shadowClass)</Dk-Shadow>',
        zidingyihtmlcss: `.cesa {
  box-shadow: 0 0 4px red;
}`,
        xuantiao: '<Dk-Shadow :hoverType="true">1.组件悬停(hoverType)</Dk-Shadow>',
        zdyxuantiao: `<Dk-Shadow :hoverType="true" :hoverClass="'hoverClass'">
        1.自定义悬停效果:hoverClass
</Dk-Shadow>`,
        zdyxuantiaocss: `.hoverClass {
  transform: translateY(-2%);
  box-shadow: 1px 4px 10px 2px red;
}`
      }
      const oncopy = (e: string): void => {
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
<template>
  <div class="index_Dk-Shadow">
    <h2>Dk-Shadow 组件</h2>
    <p>基础用法</p>
    <p>
      type 用来判定是标题还是内容(title|标题,box|自定义内容,默认为box)(标题插槽|slot-left
      -左插槽,slot-right -右插槽,slot-box -内容插槽)
    </p>
    <p>shadowClass 自定义样式 默认: -</p>
    <p>hoverType 用来判定是否开启悬停效果 默认:false</p>
    <p>hoverClass 自定义悬停样式 默认: -</p>
    <!--基础使用-->
    <h4>基础组件使用</h4>
    <dk-shadow>基础组件使用</dk-shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.foundation" />
      <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
    </div>
    <div class="index_Dk_mg"></div>
    <!--基础使用结束-->
    <!--使用插槽-->
    <h4>使用插槽</h4>
    <dk-shadow :type="'title'" :hover-type="false">
      <template #left>
        <span>左插槽(#left) </span>
      </template>
      <template #right>
        <span>右插槽(#right)</span>
      </template>
    </dk-shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.chacaoshix" />
      <span class="fuzhi" @click="oncopy(htmlJson.chacaoshix)">复制代码</span>
    </div>
    <div class="index_Dk_mg"></div>
    <!--使用插槽结束-->
    <!--自定义样式-->
    <h4>自定义样式</h4>
    <dk-shadow :shadow-class="'cesa'">自定义样式(shadowClass)</dk-shadow>
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
    <h4>用来判定是否开启悬停效果</h4>
    <dk-shadow hover-type>组件悬停(hoverType)</dk-shadow>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.xuantiao" />
      <span class="fuzhi" @click="oncopy(htmlJson.xuantiao)">复制代码</span>
    </div>
    <!--悬停效果结束-->
    <div class="index_Dk_mg"></div>
    <dk-shadow hover-type :hover-class="'hoverClass'">
      自定义悬停效果:hoverClass
    </dk-shadow>
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
<style lang="scss" scoped>
  .index_Dk-Shadow {
    width: 80%;
    margin: 10px auto;
    h2,
    h4 {
      margin-bottom: 10px;
      font-weight: normal;
      color: #1f2f3d;
    }
    h4 {
      margin-top: 40px;
    }
    p {
      margin-bottom: 10px;
      font-size: 13px;
      color: #5e6d82;
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
