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
    <div class="template_icon_jcsy">
      <h4 class="template_icon_title">
        2.自定义大小和颜色(颜色只支持16进制 和英文单词)
      </h4>
      <dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.zidingyis" />
        <span class="fuzhi" @click="oncopy(htmlJson.zidingyis)">复制代码</span>
      </div>
    </div>
    <h3 class="cont_template_icon_title">(1).System</h3>
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
    <h3 class="cont_template_icon_title">(2).other</h3>
    <div class="icon_library">
      <div class="icon_library_item" v-for="item in iconnamespace" :key="item" @click="oncopy('dk-'+item)">
        <div class="icon_library_item_icon">
          <dkIcon :class="'dk-'+item" :size="24" :color="'#606266'"></dkIcon>
        </div>
        <div class="icon_library_item_name">
          {{ 'dk-'+item }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">(3).Arrow</h3>
      <div class="icon_library">
      <div class="icon_library_item" v-for="item in iconother" :key="item" @click="oncopy('dk-'+item)">
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
      "icon-sousuowenjian", "icon-xitongxinxi", "icon-02sousuo", "icon-sousuo", "icon-sousuoleimufill", "icon-xitongcaidan", "icon-xitongfanhui", "icon-xitongtongzhi",
      "icon-icon-link", "icon-xitongyunweidakaiwenjianjia", "icon-xitongyunweibaocunshouquan", "icon-drgspingtairuanjianxitong210", "icon-drgspingtairuanjianxitong212", "icon-xitong1",
      "icon-xitong", "icon-wangluoxitong", "icon-xitongyunzhuanqingkuang", "icon-xitongzhuangtai", "icon-subsystem", "icon-zhantingzhinengzhongkongxitong", "icon-xitongguanliyuan", "icon-zhuxiaoxitong",
      "icon-shebeisousuo", "icon-guanliyuansousuo_o", "icon-shebeisousuo_o", "icon-shujuxitong", "icon-svg-", "icon-chaxun", "icon-mysql", "icon--xitong", "icon-xitongfuzai", "icon-keyanxitong",
      "icon-xitongyunwei", "icon-wendangguanlixitong-wendangguanlixitongtubiao", "icon-wendangguanlixitong-yaopinliuxiangxitongtubiao", "icon-xitongxiaoxi", "icon-xitongdaoru",
      "icon-xitongpeizhi", "icon-xitongtongzhi1", "icon-yewutubiao_keyanxitong", "icon-xitong2", "icon-xitongguanli", "icon-xitong3", "icon-xitong-weizhipeizhi", "icon-xitong-zichanzidian",
      "icon-xitong-zichanpeizhi", "icon-xitongrizhi", "icon-xitongxiaoxi1", "icon-xitong4", "icon-xitongxinxi1", "icon-waihuxitong",  "icon-xitongjiandu", "icon-xitongweihu",
      "icon-juyuwangsousuo", "icon-shipinjiankongxitong", "icon-xitong5", "icon-xitonggengxin", "icon-UIsheji_menjinxitong-10", "icon-cloud-search-full", "icon-yingyongxitongzhanghaoyuquanxianshenqingliucheng__xianxing__-01",
      "icon-tuichuxitong","icon-xitongloudongjianceshenqing","icon-xitonganquan","icon-icon_1-16","icon-xitongwendang","icon-xitonggonggao"
    ]
    const iconnamespace = [
      "icon-arrow-down-filling", "icon-arrow-left-filling", 'icon-arrow-right-filling', 'icon-arrow-go-forward-fill', 'icon-icf_narrow_screen_arrow', 'icon-box-arrow-in-down-right', 'icon-box-arrow-in-up-left',
      'icon-arrowgraphdownleft', 'icon-jiantouarrow482', 'icon-jianarrows67', 'icon-arrows_rotate', 'icon-arrowup', 'icon-arrowdown', 'icon-arrows-alt', 'icon-arrow-to-bottom',
      'icon-arrow-to-top', 'icon-long-arrow-down', 'icon-long-arrow-up', 'icon-arrow-right', 'icon-arrow-left', 'icon-arrows-v', 'icon-arrow-alt-from-top', 'icon-arrow-alt-from-botto', 'icon-narrow',
      'icon--arrow-', 'icon-arrow-growth', 'icon-right-arrow-rect', 'icon-left-arrow-rect', 'icon-arrow-growth1', 'icon-arrow-left1', 'icon-arrow-down', 'icon-arrow_up_arrow_down',
      'icon-tray_arrow_down','icon-arrow-right1','icon-arrow-double-left','icon-arrow-double-right','icon-arrow-up-bold','icon-arrow-up-filling'
    ]
    const iconother = [
      'icon-genzongmubiaoshezhi', 'icon-cuowu', 'icon-weixin', 'icon-zhifutixing', 'icon-wxbdingwei', 'icon-gouwuchetianjia', 'icon-jushoucang', 'icon-weixinzhifu', 'icon-jushoucanggift', 'icon-z-weixin',
      'icon-icon', 'icon-mimakejian', 'icon-tianjiabeizhu', 'icon-qq', 'icon-mima', 'icon-dustbin-recycle-bin-trash-erase-ebaccf', 'icon-wenjianshanchu', 'icon-zhifubao', 'icon-dingwei',
      'icon-shanchuyoujian', 'icon-nan', 'icon-xinyongqiazhifu', 'icon-shanchu', 'icon-zhifu', 'icon-biyan', 'icon-QQ', 'icon-tupiantianjia', 'icon-weibiaoti--',
      'icon-tianchongxing-', 'icon-tianchongxing-1', 'icon-jianhao', 'icon-shoucangjiaobiao', 'icon-tianjia', 'icon-shoucang', 'icon-tianjiaxiaoxi',
      'icon-ziyuan', 'icon-zhifushibai', 'icon-idcard-add-fill', 'icon-shoucang1', 'icon-mimaxianshi', 'icon-mimayincang', 'icon-tianjiaziji', 'icon-jurassic_delete-users',
      'icon-jurassic_delete-org', 'icon-nan1', 'icon-tianjia1', 'icon-mima1', 'icon-nv', 'icon-shoucang2', 'icon-shoucang3', 'icon-shoucang4', 'icon-huifushanchu',
      'icon-nv1','icon-zhifushezhi','icon-Deletemember','icon-union-pay','icon-nan2','icon-zaixianzhifuPay','icon-a-Lock-User2','icon-a-Lock-User1','icon-Union-41'
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
      iconList,
      iconnamespace,
      iconother
    };
  }
})
</script>
<style lang="scss" scoped>

.template_icon {
  width: 100%;

  .template_icon_jcsy {
    width: 95%;
    margin-bottom: 10px;
  }

  .template_icon_title {
    width: 95%;
    margin-bottom: 10px;
  }
  .cont_template_icon_title{
    margin: 10px 0;
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