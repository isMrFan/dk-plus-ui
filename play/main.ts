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
import DkContainer from '@dk-plus/components/dkcontainer'
import dkbutton from '@dk-plus/components/dkbutton'
import dkheader from '@dk-plus/components/dkheader'
import dkmain from '@dk-plus/components/dkmain'
import dkfooter from '@dk-plus/components/dkfooter'
import dklaside from '@dk-plus/components/dklaside'
import dkinput from '@dk-plus/components/dkinput'
import dkInputNumber from '@dk-plus/components/dkInputNumber'
import dkcodedisplay from '@dk-plus/components/dkcodedisplay'
import dkspace from '@dk-plus/components/dkspace'
//import dkloading from '@dk-plus/components/dkloading'
import { IconShanchu1 } from '@dk-plus/components/_icon'
import { DirectiveLoading } from '@dk-plus/components/_hooks/_directive/loading/index'
import '@dk-plus/theme-chalk/index.scss'
//全局的npm install 引用
// import dkPlus from 'dk-plus';
// import '@dk-plus/theme-chalk/src/index.scss'
//import {DkIcon,DkShadow,DkButton} from "dk-plus";
const app = createApp(App)
app.directive('dk-loading', DirectiveLoading())
app.use(router)
//app.use(dkPlus)
app.use(hljsVuePlugin)
app.use(dkIcon)
app.use(DkContainer)
app.use(DkShadow)
app.use(dkbutton)
app.use(dkinput)
app.use(dkInputNumber)
app.use(dkcodedisplay)
app.use(dkmain)
app.use(dkfooter)
app.use(dklaside)
app.use(IconShanchu1)

app.use(dkheader)
app.use(dkspace)
//app.use(dkloading)
app.mount('#app')
