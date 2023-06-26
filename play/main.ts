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
import * as icons from '@dk-plus/components/_icon'
import '@dk-plus/theme-chalk/src/index.scss'
const {
  IconShanchu1,
  IconShanchu2,
  IconSysRun,
  IconSysConfig,
  IconBigSearch,
  IconSearchSmall,
  IconAssetsDic,
  IconSystem3,
  IconFile,
  IconOpenFile,
  IconSearch,
  IconSysLog,
  IconReturn,
  IconSearch2,
  IconSearch3,
  IconSysMenu,
  IconSysMsg2,
  IconDeletionGroup,
  IconSysBack,
  IconSysReset,
  IconLink,
  IconSysNotice1,
  IconSave,
  IconSys1,
  IconSys2,
  IconNetworkSys,
  IconCallSys,
  IconTheChildSys,
  IconIntelligenceSys,
  IconSysPer,
  IconQQ1,
  IconSysInformation,
  IconSearchFile,
  IconPrint,
  IconCollect,
  IconAdministrator,
  IconSearchAdmin,
  IconDataSys,
  IconPay1,
  IconSysRole,
  IconPause,
  IconEquipmentSearch,
  IconIos,
  IconEquipmentSearch1,
  IconQuerySys,
  IconLogOffSys,
  IconMale,
  IconMysql,
  IconSystem,
  IconSysLoad,
  IconScienceSys,
  IconCreditCard,
  IconSysOperation,
  IconFileSys,
  IconFileSysMedicine,
  IconSysNotice,
  IconSysMsg1,
  IconSysUpload,
  IconSysSetting,
  IconNotice,
  IconLight,
  IconSystem2,
  IconSysManage,
  IconSetting,
  IconSetSeat,
  IconSysSupervise,
  IconSysMaintain,
  IconLANSearch,
  IconFingerprintVerify,
  IconMonitorSys,
  IconSystem4,
  IconSysUpdate,
  IconFaceID,
  IconSysFile,
  IconCloudSearch,
  IconSysPower,
  IconLogout,
  IconSysBugTesting,
  IconAndroid,
  IconStart,
  IconReduce,
  IconUpArrow,
  IconCross,
  IconMinusSign,
  IconDoubleArrow,
  IconRefresh,
  IconUpArrow1,
  IconDownArrow,
  IconRemarks,
  IconBottomArrow,
  IconTopArrow,
  IconUnderThe,
  IconOnThe,
  IconPaymentReminder,
  IconRightArrow,
  IconLeftArrow,
  IconUpAndDown,
  IconBottomArrow1,
  IconDelete1,
  IconContraction,
  IconExit,
  IconRise,
  IconLeftMenu,
  IconRightMenu,
  IconLeftarrow1,
  IconBottomArrow2,
  IconUpAndDown1,
  IconDownload,
  IconShoppingCart,
  IconRightArrow1,
  LeftFastForward,
  RightFastForward,
  IconUpArrow2,
  IconPositioning,
  IconUpperTriangle,
  IconLowerTriangle,
  IconLeftTriangle,
  IconRightTriangle,
  IconContraction1,
  IconLeftFold,
  IconTopFold,
  IconTrack,
  IconError,
  IconWeiXin,
  IconWeixinPlay,
  IconCollectActive,
  IconWeixin1,
  IconFemale,
  IconPasswordShow,
  IconDeleteMeige,
  IconQQ,
  IconPassword,
  IconRecyclingStation,
  IconFileDeletion,
  IconZFB,
  IconPositioning1,
  IconPasswordSee,
  IconImageAddition,
  IconPassword1,
  IconPassword2,
  IconPassword3,
  IconCollect1,
  IconAdd,
  IconCollect2,
  IconAddMessage,
  IconMeasurement,
  IconAdditive,
  IconFailureToPay,
  IconCertificate,
  IconCollect3,
  PasswordDisplay,
  PasswordHiding,
  IconDeletionGroup1,
  IconMale1,
  IconPayAttention,
  IconPassword4,
  IconFemale2,
  IconEdit,
  IconFemale1,
  IconCollect4,
  IconCollect5,
  IconCollect6,
  IconRestoreDelete,
  IconPaymentSetup,
  IconDeletionPersonnel,
  IconUnionPay,
  IconMale2,
  IconOnlinePayment,
  IconPassword5,
  IconPassword6
} = icons.default
//全局的npm install 引用
// import dkPlus from 'dk-plus';
// import '@dk-plus/theme-chalk/src/index.scss'
//import {DkIcon,DkShadow,DkButton} from "dk-plus";
const app = createApp(App)
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
app
  .use(IconShanchu1)
  .use(IconShanchu2)
  .use(IconIntelligenceSys)
  .use(IconAssetsDic)
  .use(IconSearchSmall)
  .use(IconBigSearch)
  .use(IconTheChildSys)
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
app
  .use(IconSysConfig)
  .use(IconSysLog)
  .use(IconSysMsg2)
  .use(IconSystem3)
  .use(IconSysNotice1)
app.use(IconSysSupervise).use(IconSysMaintain).use(IconLANSearch)
app.use(IconMonitorSys).use(IconSystem4).use(IconSysUpdate).use(IconFaceID)
app.use(IconCloudSearch).use(IconSysPower).use(IconLogout)
app.use(IconSysBugTesting).use(IconFingerprintVerify)
app.use(IconSysFile).use(IconSysNotice).use(IconIos).use(IconMale),
  app.use(IconAndroid).use(IconStart).use(IconReduce)
app.use(IconUpArrow).use(IconDoubleArrow).use(IconRefresh)
app.use(IconUpArrow1).use(IconDownArrow).use(IconCross)
app.use(IconBottomArrow).use(IconTopArrow).use(IconUnderThe)
app.use(IconOnThe).use(IconRightArrow).use(IconLeftArrow).use(IconUpAndDown)
app.use(IconBottomArrow1).use(IconContraction).use(IconExit)
app.use(IconRise).use(IconLeftMenu).use(IconRightMenu).use(IconDownload)
app.use(IconLeftarrow1).use(IconBottomArrow2).use(IconUpAndDown1)
app.use(IconRightArrow1).use(LeftFastForward).use(RightFastForward)
app.use(IconUpArrow2).use(IconUpperTriangle).use(IconLowerTriangle)
app.use(IconLeftTriangle).use(IconRightTriangle).use(IconReturn)
app.use(IconContraction1).use(IconLeftFold).use(IconTopFold).use(IconTrack)
app.use(IconError).use(IconWeiXin).use(IconPaymentReminder).use(IconPositioning)
app.use(IconShoppingCart).use(IconCollect).use(IconWeixinPlay)
app.use(IconCollectActive).use(IconWeixin1).use(IconFemale).use(IconPasswordShow)
app.use(IconRemarks).use(IconQQ).use(IconPassword).use(IconRecyclingStation)
app.use(IconFileDeletion).use(IconZFB).use(IconPositioning1).use(IconDeleteMeige)
app.use(IconCreditCard).use(IconDelete1).use(IconPay1).use(IconAddMessage)
app.use(IconPasswordSee).use(IconQQ1).use(IconImageAddition)
app.use(IconPassword1).use(IconPassword2).use(IconPassword3)
app.use(IconMinusSign).use(IconCollect1).use(IconAdd).use(IconCollect2)
app.use(IconMeasurement).use(IconFailureToPay).use(IconCertificate)
app.use(IconCollect3).use(PasswordDisplay).use(PasswordHiding)
app.use(IconAdditive).use(IconDeletionGroup).use(IconDeletionGroup1)
app.use(IconMale1).use(IconPayAttention).use(IconPassword4)
app.use(IconFemale1).use(IconCollect4).use(IconCollect5).use(IconCollect6)
app.use(IconRestoreDelete).use(IconFemale2).use(IconPaymentSetup)
app.use(IconDeletionPersonnel).use(IconUnionPay).use(IconMale2).use(IconOnlinePayment)
app.use(IconPassword5).use(IconPassword6).use(IconEdit)
app.use(dkheader)
app.use(dkspace)
app.mount('#app')
