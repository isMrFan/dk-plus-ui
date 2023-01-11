<template>
  <div class="template_icon">
    <div class="template_icon_jcsy">
      <!--基础使用-->
      <h4 class="template_icon_title">
        1.基础使用
      </h4>
      <dkIcon class="dk-yinsi"></dkIcon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.foundation" />
        <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
      </div>
      <!--基础使用结束-->
    </div>
    <h4 class="template_icon_title">
      2.自定义大小和颜色(颜色只支持16进制 和英文单词)
    </h4>
    <dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>
    <div class="index_Dk_code">
      <highlightjs language="javascript" :code="htmlJson.zidingyis" />
      <span class="fuzhi" @click="oncopy(htmlJson.zidingyis)">复制代码</span>
    </div>
    <div class="icon_library">
      <div class="icon_library_item" v-for="item in iconList" :key="item" @click="oncopy('dk-'+item)">
        <div class="icon_library_item_icon">
          <dkIcon :class="'dk-'+item" :size="24" :color="'#606266'"></dkIcon>
        </div>
        <div class="icon_library_item_name">
          {{ 'dk-'+item }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, } from "vue";
export default defineComponent({
  name: "DkIconsm",
  setup() {
    const htmlJson = {
      foundation: `<dkIcon class="dk-yinsi"></dkIcon>`,
      zidingyis: `<dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>`,
    };
    const iconList = [
      "icon-yinsi", 'icon-yinsi1', 'icon-fuwutiaokuanjiyinsi', 'icon-icon-test', 'icon-anquanyinsi', 'icon-yinsijimi', 'icon-a-yinsibaohuyanzhengma', 'icon-a-yinsisimibaomi',
      'icon-shezhi7', 'icon-fangxiang-xiangxia', 'icon-fangxiang-xiangxia', 'icon-fangxiang-xiangshang', 'icon-fangxiang-xiangzuo', 'icon-fangxiangsanjiao-xiangshang', 'icon-fangxiangsanjiao-xiangyou',
      'icon-fangxiangsanjiao-xiangxia', 'icon-fangxiangsanjiao-xiangzuo', 'icon-tongshezhi', 'icon-zhongqizhifu', 'icon-shezhi8', 'icon-zhifu', 'icon-jurassic_nav', 'icon-jurassic_nav1',
      'icon-fuzhushezhi', 'icon-gaojishezhi', 'icon-shezhi9', 'icon-shanchu1', 'icon-shezhi10', 'icon-gaojingshezhi', 'icon-geshuishezhi', 'icon-yunshezhi', 'icon-weishezhi',
      'icon-xitongshezhi', 'icon-zhifupeizhi', 'icon-ziyuan2', 'icon-zhanghushezhi', 'icon-zhanghushezhi', 'icon-shezhiguize', 'icon-shezhiguize', 'icon-jiaofeishezhi', 'icon-alipay1', 'icon-pay-taobao',
      'icon-data-management', 'icon-jichushezhi', 'icon-chanpinshezhi_1', 'icon-mobanshezhi', 'icon-duanxinshezhi', 'icon-zhifushezhi', 'icon-fangxiang', 'icon-huiyuanshezhi',
      'icon-jiejiarishezhi', 'icon-tianjiawenjian4', 'icon-a-1Drenyuanshezhi', 'icon-jianqie', 'icon-shanchuwenjian', 'icon-shanchuwenjianjia', 'icon-genzongmubiaoshezhi', 'icon-shezhi',
      'icon-weibiaoti2', 'icon-shezhi1', 'icon-uishezhi', 'icon-shezhi2', 'icon-icon1', 'icon-weixinzhifu', 'icon-zhifubaozhifu', 'icon-shunshizhenfangxiangclockwise5', 'icon-zhifuyichang', 'icon-zhifubaozhifu1',
      'icon-caozuo-shezhi', 'icon-zhifunengli', 'icon-zhifubaozhifu2', 'icon-xinyongzhifu', 'icon-kuaijiezhifu', 'icon-weixinzhifu1',
      'icon-shezhi3', 'icon-duobizhongshezhi', 'icon-shezhi4', 'icon-alipay', 'icon-alarm-settings', 'icon-notifications', 'icon-icon-elements', 'icon-shezhi5',
      'icon-baojingshezhi', 'icon-yunyingshezhi', 'icon-setting-role', 'icon-navicon-ctsz', 'icon-navicon-jgsz', 'icon-zhifubaotubiao', 'icon-ziyuan', 'icon-shezhizhugudong', 'icon-shezhi6',
      'icon-shanchu', 'icon-zhifupingtai-paypal', 'icon-ico_xitongshezhi_shebeipeizhi', 'icon-Settings-Help', 'icon-weixinzhifu2', 'icon-zizhanghaoshezhi', 'icon-ziyuan1', 'icon-yonghu71',
      'icon-yonghu71', 'icon-yonghu73', 'icon-24gf-user2', 'icon-24gf-userGroup2', 'icon-24gf-portraitMalePlus', 'icon-yonghu75', 'icon-yonghu76', 'icon-yonghu78',
      'icon-yonghu79', 'icon-yonghu80', 'icon-yonghu-tongyong', 'icon-yonghuming19', 'icon-yonghuming20', 'icon-yonghu82', 'icon-yonghu85', 'icon-yonghu86', 'icon-yonghu90', 'icon-yonghu91',
      'icon-yonghu92', 'icon-yonghu96', 'icon-yonghu97', 'icon-yonghuguohu-', 'icon-jurassic_user1', 'icon-yonghu101', 'icon-yonghu103', 'icon-yonghuID', 'icon-yonghuming23', 'icon-yonghufenzu', 'icon-yonghufenzu',
      'icon-yonghu108', 'icon-yonghu-jia', 'icon-yonghu-qianyi', 'icon-yonghu-shanchu', 'icon-yonghu112',
      'icon-yonghuming26', 'icon-user5', 'icon-yonghuguanli-yonghuguanli', 'icon-yonghuqun2', 'icon-yonghuming27', 'icon-yonghu121', 'icon-switchuser', 'icon-customer', 'icon-renzhengyonghu', 'icon-subscriber-square', 'icon-zhanghu',
      'icon-zuixing-45', 'icon-nvshangjia', 'icon-yonghu122', 'icon-zhanghubaobiao', 'icon-yingyongyonghuguanli', 'icon-yonghuming28', 'icon-chazhaoyonghu', 'icon-menu_yh_sjqx', 'icon-tianjiayonghu', 'icon-menu_yhgl', 'icon-suijiyonghu',
      'icon-menu_yhsz', 'icon-yonghu123', 'icon-yonghulei', 'icon-shiyanshiyonghuguanli', 'icon-tianjiayonghutianchong', 'icon-yonghu124', 'icon-a-yonghuxinxiyonghu', 'icon-a-huaban1fuben6', 'icon-quanyonghu',
      'icon-yonghuqun', 'icon-user', 'icon-yonghuming', 'icon-1', 'icon-yonhu', 'icon-yonghutongzhi', 'icon-yonghu9', 'icon-yonghuzhanghuguanli', 'icon-yonghu11',
      'icon-yonghu12', 'icon-user2', 'icon-yonghu01', 'icon-yonghu14', 'icon-yonghu22', 'icon-yonghu31', 'icon-yonghuming1', 'icon-yonghu16', 'icon-yonghuming3',
      'icon-yonghuming5', 'icon-5yonghu', 'icon-yonghu110', 'icon-yonghu23', 'icon-tongyongleiyonghunv', 'icon-yonghu20', 'icon-yonghu25',
      'icon-yonghu28', 'icon-yonghu30', 'icon-yonghuzu', 'icon-yonghu35', 'icon-yonghu-yuan', 'icon-user3', 'icon-yonghu-', 'icon-yonghuziliao',
      'icon-yonghuziliao-xianxing', 'icon-xinyonghu', 'icon-yonghu47', 'icon-yonghuqun1', 'icon-yonghu_tudi', 'icon-yonghu_tili', 'icon-icon-user-sm',
      'icon-user-group', 'icon-tubiaozhizuomobanyihuifu-', 'icon-yonghu53', 'icon-yonghuBI', 'icon-yonghu55', 'icon-yonghu56', 'icon-yonghu57', 'icon-yonghuxinxi2',
      'icon-yonghuming9', 'icon-yonghu-1', 'icon-yonghu60', 'icon-yonghu61', 'icon-yonghu63', 'icon-tab_yonghu', 'icon-tab_yonghu', 'icon-tab_yonghu1', 'icon-yonghuxinxi3',
      'icon-yonghukaihu', 'icon-yonghu64', 'icon-yonghu65', 'icon-yonghu67', 'icon-x_yonghu', 'icon-jihuoyonghu', 'icon-suodingyonghu', 'icon-erjiyonghu',
      'icon-yonghuming13','icon-yonghuzu1','icon-yonghu'
    ]
    const oncopy = (e: any) => {
      const input = document.createElement("input");
      input.setAttribute("readonly", "readonly");
      input.setAttribute("value", e);
      document.body.appendChild(input);
      input.setSelectionRange(0, 9999);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      alert("复制成功");
    };
    return {
      htmlJson,
      oncopy,
      iconList
    };
  }
})
</script>
<style lang="scss" scoped>
.template_icon {
  width: 100%;

  .template_icon_jcsy {
    margin-bottom: 10px;
  }

  .template_icon_title {
    margin-bottom: 10px;
  }

  .icon_library {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;

    .icon_library_item {
      width: 100px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 10px;
      border: 1px solid #ccc;
      border-radius: 5px;
      cursor: pointer;
      .icon_library_item_icon {
        font-size: 30px;
        margin-bottom: 10px;
      }

      .icon_library_item_name {
        width: 100%;
        font-size: 12px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        text-align: center;
      }
    }
  }
}
</style>