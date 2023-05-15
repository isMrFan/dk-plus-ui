import { createApp } from 'vue'
import App from './app.vue'
import router from './router'
import 'babel-polyfill'
// --- 文件src/main.ts | src/main.js
// highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'
hljs.registerLanguage('javascript', javascript)

//本地开发调试
import dkIcon from '@dk-plus/components/dkicon'
import DkShadow from '@dk-plus/components/dkshadow'
import dkbutton from '@dk-plus/components/dkbutton'
import '@dk-plus/theme-chalk/src/index.scss'

//全局的npm install 引用
// import dkPlus from "dk-plus";
//import '@dk-plus/theme-chalk/src/index.scss'
//import {DkIcon,DkShadow,DkButton} from "dk-plus";
const app = createApp(App)
app.use(router)
// app.use(dkPlus)
app.use(hljsVuePlugin)
app.use(dkIcon)
app.use(DkShadow)
app.use(dkbutton)
app.mount('#app')
