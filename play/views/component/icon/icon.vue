<template>
  <div class="template_icon">
    <div class="template_icon_jcsy">
      <!--基础使用-->
      <h4 class="template_icon_title">1.基础使用</h4>
      <dkIcon class="dk-yinsi"></dkIcon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.foundation" />
        <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
      </div>
      <!--基础使用结束-->
    </div>
    <div class="template_icon_jcsy">
      <h4 class="template_icon_title">2.自定义大小和颜色(颜色只支持16进制 和英文单词)</h4>
      <dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.zidingyis" />
        <span class="fuzhi" @click="oncopy(htmlJson.zidingyis)">复制代码</span>
      </div>
    </div>
    <h3 class="cont_template_icon_title">(1).System</h3>
    <div class="icon_library">
      <div
        class="icon_library_item"
        v-for="item in iconList"
        :key="item[0]"
        @click="oncopy('dk-' + item[0])"
      >
        <div class="icon_library_item_icon">
          <dkIcon :class="'dk-' + item[0]" :size="24" :color="'#606266'"></dkIcon>
        </div>
        <div class="icon_library_item_name">
          {{ item[1] }}
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">(2).other</h3>
    <div class="icon_library">
      <div
        class="icon_library_item"
        v-for="item in iconnamespace"
        :key="item[0]"
        @click="oncopy('dk-' + item[0])"
      >
        <div class="icon_library_item_icon">
          <dkIcon :class="'dk-' + item[0]" :size="24" :color="'#606266'"></dkIcon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
        <div class="icon_library_item_name">
          {{ item[1] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">(3).Arrow</h3>
    <div class="icon_library">
      <div
        class="icon_library_item"
        v-for="item in iconother"
        :key="item[1]"
        @click="oncopy('dk-' + item[0])"
      >
        <div class="icon_library_item_icon">
          <dkIcon :class="'dk-' + item[0]" :size="24" :color="'#606266'"></dkIcon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
        <div class="icon_library_item_name">
          {{ item[1] }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkIconsm',
    setup() {
      const htmlJson = {
        foundation: `<dkIcon class="dk-yinsi"></dkIcon>`,
        zidingyis: `<dkIcon :size="24" :color="'red'" class="dk-yinsi"></dkIcon>`
      }
      const iconList = [
        ['icon-sousuowenjian','文件'],
        ['icon-xitongxinxi','信息'],
        ['icon-02sousuo','搜索'],
        ['icon-sousuo','搜索'],
        ['icon-sousuoleimufill','搜索'],
        ['icon-xitongcaidan','系统菜单'],
        ['icon-xitongfanhui','系统返回'],
        ['icon-xitongtongzhi','系统通知'],
        ['icon-icon-link','超链接'],
        ['icon-xitongyunweidakaiwenjianjia','文件夹'],
        ['icon-xitongyunweibaocunshouquan','授权'],
        ['icon-drgspingtairuanjianxitong210','软件系统'],
        ['icon-drgspingtairuanjianxitong212','软件系统'],
        ['icon-xitong1','系统'],
        ['icon-xitong','系统'],
        ['icon-wangluoxitong','网络系统'],
        ['icon-xitongyunzhuanqingkuang','系统运转情况'],
        ['icon-xitongzhuangtai','系统转改'],
        ['icon-subsystem','权限分支'],
        ['icon-zhantingzhinengzhongkongxitong','中控'],
        ['icon-xitongguanliyuan','管理员'],
        ['icon-zhuxiaoxitong','注销系统'],
        ['icon-shebeisousuo','设备搜索'],
        ['icon-guanliyuansousuo_o','管理员搜索'],
        ['icon-shebeisousuo_o','设备搜索'],
        ['icon-shujuxitong','数据系统'],
        ['icon-svg-','svg-'],
        ['icon-chaxun','查询'],
        ['icon-mysql','mysql'],
        ['icon--xitong','系统'],
        ['icon-xitongfuzai','系统负载'],
        ['icon-keyanxitong','科研系统'],
        ['icon-xitongyunwei','系统运维'],
        ['icon-wendangguanlixitong-wendangguanlixitongtubiao','文档'],
        ['icon-wendangguanlixitong-yaopinliuxiangxitongtubiao','系统'],
        ['icon-xitongxiaoxi','消息'],
        ['icon-xitongdaoru','导入'],
        ['icon-xitongpeizhi','系统配置'],
        ['icon-xitongtongzhi1','通知'],
        ['icon-yewutubiao_keyanxitong','提示'],
        ['icon-xitong2','系统'],
        ['icon-xitongguanli','系统管理'],
        ['icon-xitong3','设置'],
        ['icon-xitong-weizhipeizhi','位置配置'],
        ['icon-xitong-zichanzidian','资产'],
        ['icon-xitong-zichanpeizhi','资产配置'],
        ['icon-xitongrizhi','日志'],
        ['icon-xitongxiaoxi1','系统消息'],
        ['icon-xitong4','系统'],
        ['icon-xitongxinxi1','系统信息'],
        ['icon-waihuxitong','外呼系统'],
        ['icon-xitongjiandu','系统监督'],
        ['icon-xitongweihu','系统维护'],
        ['icon-juyuwangsousuo','局域网搜索'],
        ['icon-shipinjiankongxitong','视频监控'],
        ['icon-xitong5','系统'],
        ['icon-xitonggengxin','系统更新'],
        ['icon-UIsheji_menjinxitong-10','门禁系统'],
        ['icon-cloud-search-full','云搜索'],
        ['icon-yingyongxitongzhanghaoyuquanxianshenqingliucheng__xianxing__-01','权限'],
        ['icon-tuichuxitong','退出'],
        ['icon-xitongloudongjianceshenqing','系统检测申请'],
        ['icon-xitonganquan','指纹验证'],
        ['icon-icon_1-16',''],
        ['icon-xitongwendang','系统文档'],
        ['icon-xitonggonggao','系统公告']
      ]
      const iconnamespace = [
        ['icon-arrow-down-filling','下箭头'],
        ['icon-arrow-left-filling','左箭头'],
        ['icon-arrow-right-filling','右箭头'],
        ['icon-arrow-go-forward-fill','返回'],
        ['icon-icf_narrow_screen_arrow','缩小'],
        ['icon-box-arrow-in-down-right','右下'],
        ['icon-box-arrow-in-up-left','左上'],
        ['icon-arrowgraphdownleft','折线箭头'],
        ['icon-jiantouarrow482','曲线箭头'],
        ['icon-jianarrows67','箭头'],
        ['icon-arrows_rotate','刷新'],
        ['icon-arrowup','上箭头'],
        ['icon-arrowdown','下箭头'],
        ['icon-arrows-alt','扩大'],
        ['icon-arrow-to-bottom','到底部'],
        ['icon-arrow-to-top','到顶部'],
        ['icon-long-arrow-down','下箭头'],
        ['icon-long-arrow-up','上箭头'],
        ['icon-arrow-right','右箭头'],
        ['icon-arrow-left','左箭头'],
        ['icon-arrows-v','展开'],
        ['icon-arrow-alt-from-top','下载'],
        ['icon-arrow-alt-from-botto','上传'],
        ['icon-narrow','缩小'],
        ['icon--arrow-','退出'],
        ['icon-arrow-growth','折线箭头'],
        ['icon-right-arrow-rect','右箭头矩形'],
        ['icon-left-arrow-rect','左箭头矩形'],
        ['icon-arrow-growth1','折线箭头'],
        ['icon-arrow-left1','左箭头'],
        ['icon-arrow-down','下箭头'],
        ['icon-arrow_up_arrow_down','切换'],
        ['icon-tray_arrow_down','下载'],
        ['icon-arrow-right1','右单箭头'],
        ['icon-arrow-double-left','左双箭头'],
        ['icon-arrow-double-right','右双箭头'],
        ['icon-arrow-up-bold','上箭头'],
        ['icon-arrow-up-filling','上箭头-实心'],
      ]
      const iconother = [
        ['icon-genzongmubiaoshezhi','定位设置'],
        ['icon-cuowu','错误'],
        ['icon-weixin','微信'],
        ['icon-zhifutixing','支付提醒'],
        ['icon-wxbdingwei','定位'],
        ['icon-gouwuchetianjia','添加购物车'],
        ['icon-jushoucang','未收藏'],
        ['icon-weixinzhifu','微信支付'],
        ['icon-jushoucanggift','已收藏'],
        ['icon-z-weixin','微信'],
        ['icon-icon','男'],
        ['icon-mimakejian','显示'],
        ['icon-tianjiabeizhu','编辑'],
        ['icon-qq','qq'],
        ['icon-mima','钥匙'],
        ['icon-dustbin-recycle-bin-trash-erase-ebaccf','回收站'],
        ['icon-wenjianshanchu','文件删除'],
        ['icon-zhifubao','支付宝'],
        ['icon-dingwei','定位'],
        ['icon-shanchuyoujian','删除邮件'],
        ['icon-nan','男'],
        ['icon-xinyongqiazhifu','信用卡支付'],
        ['icon-shanchu','删除'],
        ['icon-zhifu','支付'],
        ['icon-biyan','隐藏'],
        ['icon-QQ','QQ'],
        ['icon-tupiantianjia','添加图片'],
        ['icon-weibiaoti--','无填充'],
        ['icon-tianchongxing-','填充星'],
        ['icon-tianchongxing-1','填充星'],
        ['icon-jianhao','减号'],
        ['icon-shoucangjiaobiao','收藏角标'],
        ['icon-tianjia','添加'],
        ['icon-shoucang','标签'],
        ['icon-tianjiaxiaoxi','添加消息'],
        ['icon-ziyuan','资源'],
        ['icon-zhifushibai','失败'],
        ['icon-idcard-add-fill','添加卡片'],
        ['icon-shoucang1','收藏'],
        ['icon-mimaxianshi','显示'],
        ['icon-mimayincang','隐藏'],
        ['icon-tianjiaziji','添加子集'],
        ['icon-jurassic_delete-users','删除用户'],
        ['icon-jurassic_delete-org','删除分支'],
        ['icon-nan1','男'],
        ['icon-tianjia1','添加用户'],
        ['icon-mima1','密码锁'],
        ['icon-nv','女'],
        ['icon-shoucang2','收藏'],
        ['icon-shoucang3','已收藏'],
        ['icon-shoucang4','收藏'],
        ['icon-huifushanchu','恢复删除'],
        ['icon-nv1','女'],
        ['icon-zhifushezhi','支付设置'],
        ['icon-Deletemember','删除联系人'],
        ['icon-union-pay','支付'],
        ['icon-nan2','男'],
        ['icon-zaixianzhifuPay','在线支付'],
        ['icon-a-Lock-User2','用户锁'],
        ['icon-a-Lock-User1','用户锁'],
        ['icon-Union-41','编辑'],
      ]
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
        oncopy,
        iconList,
        iconnamespace,
        iconother
      }
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
    .cont_template_icon_title {
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
        padding: 0 10px;
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
      .icon_library_item:hover {
        border: 1px solid #34ab98;
      }
    }
  }
</style>
