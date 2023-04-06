<template>
  <div id="app">
          <router-view />
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'APP',
    setup() {
      window.alert = alert
      function alert(data: any) {
        var a: any = document.createElement('div'),
          p = document.createElement('p'),
          btn = document.createElement('div'),
          textNode = document.createTextNode(data ? data : '')
        // btnText = document.createTextNode("确定");
        // 控制样式
        css(a, {
          width: '280px;',
          padding: '10px 20px;',
          background: '#EDF2FC',
          'border-radius': '5px',
          'box-shadow': '0 0 10px #ccc',
          'text-align': 'center',
          'font-size': '14px',
          color: '#333',
          'line-height': '20px',
          'word-break': 'break-all',
          'word-wrap': 'break-word',
          position: 'fixed',
          left: '50%',
          top: '10%',
          transform: 'translate(-50%,-50%)'
        })
        css(btn, {
          width: '100%',
          height: '30px',
          'line-height': '30px',
          background: '#f60',
          'border-radius': '5px',
          color: '#fff',
          'margin-top': '10px',
          cursor: 'pointer'
        })
        // 内部结构套入
        p.appendChild(textNode)
        // btn.appendChild(btnText);
        a.appendChild(p)
        // a.appendChild(btn);
        // 整体显示到页面内
        document.getElementsByTagName('body')[0].appendChild(a)
        setTimeout(function () {
          a.parentNode.removeChild(a)
        }, 2000)
        // 确定绑定点击事件删除标签
        // btn.onclick = function () {
        //   a.parentNode.removeChild(a);
        // }
      }
      function css(targetObj, cssObj) {
        var str = targetObj.getAttribute('style') ? targetObj.getAttribute('style') : ''
        for (var i in cssObj) {
          str += i + ':' + cssObj[i] + ';'
        }
        targetObj.style.cssText = str
      }
    }
  })
</script>
<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    margin: 0 !important;
    padding: 0 !important;
  }
  .index_Dk_code {
    margin-top: 15px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    .fuzhi {
      position: absolute;
      right: 0;
      top: 0;
      padding: 9px 10px;
      color: #ccc;
      border-bottom: none;
      cursor: pointer;
    }
  }
  #app {
    width: 100%;
    height: 100%;
  }
</style>
