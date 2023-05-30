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
import dkinput from '@dk-plus/components/dkinput'
import dkcodedisplay from '@dk-plus/components/dkcodedisplay'
import * as icons from '@dk-plus/components/_icon'
import '@dk-plus/theme-chalk/src/index.scss'
const { 
  IconShanchu1 ,IconShanchu2,IconSysRun,IconSysConfig,
  IconBigSearch,IconSearchSmall,IconAssetsDic,IconSystem3,
  IconFile,IconOpenFile,IconSearch,IconSysLog,
  IconSearch2,IconSearch3,IconSysMenu,IconSysMsg2,
  IconSysBack,IconSysReset,IconLink,IconSysNotice1,
  IconSave,IconSys1,IconSys2,IconNetworkSys,IconCallSys,
  IconTheChildSys,IconIntelligenceSys,IconSysPer,
  IconSysInformation,IconSearchFile,IconPrint,
  IconAdministrator,IconSearchAdmin,IconDataSys,
  IconSysRole,IconPause,IconEquipmentSearch,
  IconEquipmentSearch1,IconQuerySys,IconLogOffSys,
  IconMysql,IconSystem,IconSysLoad,IconScienceSys,
  IconSysOperation,IconFileSys,IconFileSysMedicine,IconSysNotice,
  IconSysMsg1,IconSysUpload,IconSysSetting,IconNotice,
  IconLight,IconSystem2,IconSysManage,IconSetting,IconSetSeat,
  IconSysSupervise,IconSysMaintain,IconLANSearch,IconFingerprintVerify,
  IconMonitorSys,IconSystem4,IconSysUpdate,IconFaceID,IconSysFile,
  IconCloudSearch,IconSysPower,IconLogout,IconSysBugTesting
} = icons.default
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
app.use(dkinput)
app.use(dkcodedisplay)
app.use(IconShanchu1).use(IconShanchu2).use(IconIntelligenceSys).use(IconAssetsDic)
.use(IconSearchSmall).use(IconBigSearch).use(IconTheChildSys)
app.use(IconFile).use(IconOpenFile).use(IconSearch).use(IconSearch2)
app.use(IconSearch3).use(IconSysMenu).use(IconSysBack).use(IconSysReset).use(IconSave)
app.use(IconLink).use(IconSys1).use(IconSys2).use(IconNetworkSys)
app.use(IconSysPer).use(IconSysRun).use(IconSysInformation).use(IconSearchFile)
app.use(IconPrint).use(IconAdministrator).use(IconSearchAdmin)
app.use(IconDataSys).use(IconSysRole).use(IconPause).use(IconEquipmentSearch)
app.use(IconEquipmentSearch1).use(IconQuerySys).use(IconLogOffSys)
app.use(IconMysql).use(IconSystem).use(IconSysLoad).use(IconScienceSys)
app.use(IconSysOperation).use(IconFileSys).use(IconFileSysMedicine).use(IconCallSys)
app.use(IconSysMsg1).use(IconSysUpload).use(IconSysSetting).use(IconSetting)
app.use(IconNotice).use(IconLight).use(IconSystem2).use(IconSysManage).use(IconSetSeat)
app.use(IconSysConfig).use(IconSysLog).use(IconSysMsg2).use(IconSystem3).use(IconSysNotice1)
app.use(IconSysSupervise).use(IconSysMaintain).use(IconLANSearch)
app.use(IconMonitorSys).use(IconSystem4).use(IconSysUpdate).use(IconFaceID)
app.use(IconCloudSearch).use(IconSysPower).use(IconSysPer).use(IconLogout)
app.use(IconSysBugTesting).use(IconFingerprintVerify).use(IconFingerprintVerify)
app.use(IconSysFile).use(IconSysNotice)
app.mount('#app')
