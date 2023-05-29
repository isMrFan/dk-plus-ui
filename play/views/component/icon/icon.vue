<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkIconsm',
    setup() {
      const htmlJson = {
        foundation: '<dkIcon class="dk-yinsi"></dkIcon>',
        zidingyis: '<dkIcon :size="24" :color="\'red\'" class="dk-yinsi"></dkIcon>'
      }
      const iconList = [
        ['IconShanchu1', '删除1'],
        ['IconShanchu2', '删除2'],
        ['IconSearchSmall', '搜索变小'],
        ['IconBigSearch', '搜索变大'],
        ['IconFile', '文件'],
        ['IconOpenFile', '打开的文件'],
        ['IconSearch', '搜索'],
        ['IconSearch2', '搜索2'],
        ['IconSearch3', '搜索3'],
        ['IconSysMenu', '系统菜单'],
        ['IconSysBack', '系统返回'],
        ['IconSysReset', '系统通知'],
        ['IconLink', '超链接'],
        ['IconSave', '系统运维保存授权'],
        ['IconSys1', '软件系统1'],
        ['IconSys2', '软件系统2'],
        ['IconNetworkSys', '软件系统3'],
        ['IconTheChildSys', '子系统'],
        ['IconIntelligenceSys', '智能展厅'],
        ['IconSysPer', '系统运转情况'],
        ['IconSysRun', '系统运转'],
        ['IconSysInformation', '系统信息'],
        ['IconSearchFile', '文件搜索'],
        ['IconPrint', '打印机'],
        ['IconAdministrator', '系统管理员'],
        ['IconSearchAdmin', '系统管理员搜索'],
        ['IconDataSys', '系统数据'],
        ['IconSysRole', '系统角色'],
        ['IconPause', '暂停'],
        ['IconEquipmentSearch', '设备搜索'],
        ['IconEquipmentSearch1', '设备搜索'],

        ['icon-logOffSys', '注销系统'],
        
        ['icon-adminSearch', '管理员搜索'],
        
        ['icon-dataSys', '数据系统'],
        
        ['icon-search1', '查询'],
        ['icon-mysql', 'mysql'],
        ['icon-system', '系统'],
        ['icon-sysLoad', '系统负载'],
        ['icon-scienceSys', '科研系统'],
        ['icon-sysOperation', '系统运维'],
        ['icon-fileSys', '文档'],
        ['icon-fileSysMedicine', '药品'],
        ['icon-sysMsg1', '系统消息'],
        ['icon-sysUpload', '系统导入'],
        ['icon-sysSetting', '系统配置'],
        ['icon-notice', '通知'],
        ['icon-light', '提示'],
        ['icon-system2', '系统'],
        ['icon-sysManage', '系统管理'],
        ['icon-setting', '设置'],
        ['icon-setSeat', '位置配置'],
        ['icon-assetsDic', '资产字典'],
        ['icon-sysConfig', '资产配置'],
        ['icon-sysLog', '系统日志'],
        ['icon-sysMsg2', '系统消息'],
        ['icon-system3', '系统'],
        ['icon-sysNotice1', '系统信息'],
        ['icon-callSys', '外呼系统'],
        ['icon-sysSupervise', '系统监督'],
        ['icon-sysMaintain', '系统维护'],
        ['icon-LANSearch', '局域网搜索'],
        ['icon-monitorSys', '视频监控'],
        ['icon-system4', '系统'],
        ['icon-sysUpdate', '系统更新'],
        ['icon-faceID', '人脸识别'],
        ['icon-cloudSearch', '云搜索'],
        ['icon-sysPower', '权限'],
        ['icon-logout', '退出'],
        ['icon-sysBugTesting', '系统漏洞检测'],
        ['icon-fingerprintVerify', '指纹验证'],
        ['icon-sysFile', '系统文档'],
        ['icon-sysNotice', '系统公告']
      ]
      const iconNameSpace = [
        ['icon-arrowDownFilling', '下箭头'],
        ['icon-arrowLeftFilling', '左箭头'],
        ['icon-arrowRightFilling', '右箭头'],
        ['icon-arrowGoForwardFill', '返回'],
        ['icon-icfNarrowScreenArrow', '缩小'],
        ['icon-boxArrowInDownRight', '右下'],
        ['icon-boxArrowInUpLeft', '左上'],
        ['icon-arrowLeftBottom', '左下折线箭头'],
        ['icon-arrowTopCurve', '曲线上箭头'],
        ['icon-arrowAround', '箭头'],
        ['icon-arrowRotate', '刷新'],
        ['icon-arrowUp', '上箭头'],
        ['icon-arrowDown1', '下箭头'],
        ['icon-arrowAlt', '扩大'],
        ['icon-arrowToBottom', '到底部'],
        ['icon-arrowToTop', '到顶部'],
        ['icon-longArrowDown', '下箭头'],
        ['icon-longArrowUp', '上箭头'],
        ['icon-arrowRight', '右箭头'],
        ['icon-arrowLeft', '左箭头'],
        ['icon-arrowsV', '展开'],
        ['icon-arrowAltFromTop', '下载'],
        ['icon-arrowAltFromBottom', '上传'],
        ['icon-narrow', '缩小'],
        ['icon-arrow', '退出'],
        ['icon-arrowGrowth', '折线箭头'],
        ['icon-rightArrowRect', '右箭头矩形'],
        ['icon-leftArrowRect', '左箭头矩形'],
        ['icon-arrowGrowth1', '折线箭头'],
        ['icon-arrowLeft1', '左箭头'],
        ['icon-arrowDown', '下箭头'],
        ['icon-arrowUpArrowDown', '切换'],
        ['icon-trayArrowDown', '下载'],
        ['icon-arrowRight1', '右单箭头'],
        ['icon-arrowDoubleLeft', '左双箭头'],
        ['icon-arrowDoubleRight', '右双箭头'],
        ['icon-arrowUpBold', '上箭头'],
        ['icon-arrowUpFilling', '上箭头-实心']
      ]
      const iconOther = [
        ['icon-halt', '暂停'],
        ['icon-play', '播放'],
        ['icon-android', '安卓'],
        ['icon-ios', 'ios'],
        ['icon-targetSetting', '定位设置'],
        ['icon-err', '错误'],
        ['icon-weChat', '微信'],
        ['icon-payTIp', '支付提醒'],
        ['icon-position', '定位'],
        ['icon-addShopCar', '添加购物车'],
        ['icon-collect', '未收藏'],
        ['icon-weChatPay', '微信支付'],
        ['icon-collected', '已收藏'],
        ['icon-weChat1', '微信'],
        ['icon-nv2', '女'],
        ['icon-show', '显示'],
        ['icon-addRemark', '编辑'],
        ['icon-qq', 'qq'],
        ['icon-key', '钥匙'],
        ['icon-trashCan', '回收站'],
        ['icon-fileRemove', '文件删除'],
        ['icon-zhiFuBao', '支付宝'],
        ['icon-position1', '定位'],
        ['icon-delMail', '删除邮件'],
        ['icon-nan', '男'],
        ['icon-payCard', '信用卡支付'],
        ['icon-del', '删除'],
        ['icon-pay', '支付'],
        ['icon-hide', '隐藏'],
        ['icon-QQ', 'QQ'],
        ['icon-imgAdd', '添加图片'],
        ['icon-lockClose1', '无填充'],
        ['icon-lockOpen', '填充星'],
        ['icon-lockClose', '填充星'],
        ['icon-minus', '减号'],
        ['icon-subscript', '收藏角标'],
        ['icon-add', '添加'],
        ['icon-collect1', '标签'],
        ['icon-addMsg', '添加消息'],
        ['icon-copPay', '资源'],
        ['icon-payErr', '失败'],
        ['icon-addCard', '添加卡片'],
        ['icon-collect3', '收藏'],
        ['icon-show1', '显示'],
        ['icon-hide1', '隐藏'],
        ['icon-addChild', '添加子集'],
        ['icon-delCrowd', '删除用户'],
        ['icon-delOrg', '删除分支'],
        ['icon-nan1', '男'],
        ['icon-addFollow', '添加用户'],
        ['icon-password', '密码锁'],
        ['icon-nv', '女'],
        ['icon-collect2', '收藏'],
        ['icon-collected2', '已收藏'],
        ['icon-collect4', '收藏'],
        ['icon-backRemove', '恢复删除'],
        ['icon-nv1', '女'],
        ['icon-setPay', '支付设置'],
        ['icon-delUser', '删除联系人'],
        ['icon-cardPay1', '支付'],
        ['icon-nan2', '男'],
        ['icon-onlinePay', '在线支付'],
        ['icon-lockUser', '用户锁'],
        ['icon-lockUser1', '用户锁'],
        ['icon-editPass', '编辑']
      ]
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
      const isChinese = false
      return {
        htmlJson,
        oncopy,
        iconList,
        iconNameSpace,
        iconOther,
        isChinese
      }
    }
  })
</script>
<template>
  <div class="template_icon">
    <div class="template_icon_jcsy">
      <!--基础使用-->
      <h2 class="template_icon_title">基础使用</h2>
      <dk-icon icon="IconShanchu1"></dk-icon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.foundation" />
        <span class="fuzhi" @click="oncopy(htmlJson.foundation)">复制代码</span>
      </div>
      <!--基础使用结束-->
    </div>
    <div class="template_icon_jcsy">
      <h2 class="template_icon_title">自定义大小和颜色(颜色只支持16进制 和英文单词)</h2>
      <dk-icon :size="24" :color="'red'" icon="IconShanchu1"></dk-icon>
      <div class="index_Dk_code">
        <highlightjs language="javascript" :code="htmlJson.zidingyis" />
        <span class="fuzhi" @click="oncopy(htmlJson.zidingyis)">复制代码</span>
      </div>
    </div>
    <h4 class="cont_template_icon_title">System</h4>
    <div class="icon_library">
      <div
        v-for="item in iconList"
        :key="item[0]"
        class="icon_library_item"
        @click="oncopy(item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :icon="item[0]" :size="24" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">other</h3>
    <div class="icon_library">
      <div
        v-for="item in iconNameSpace"
        :key="item[0]"
        class="icon_library_item"
        @click="oncopy('dk-' + item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :class="'dk-' + item[0]" :size="24" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
      </div>
    </div>
    <h3 class="cont_template_icon_title">Arrow</h3>
    <div class="icon_library">
      <div
        v-for="item in iconOther"
        :key="item[1]"
        class="icon_library_item"
        @click="oncopy(item[0])"
      >
        <div class="icon_library_item_icon">
          <dk-icon :class="'dk-' + item[0]" :size="24" :color="'#606266'"></dk-icon>
        </div>
        <div class="icon_library_item_name">
          {{ item[0] }}
        </div>
        <!-- <div class="icon_library_item_name" v-if="isChinese">
          {{ item[1] }}
        </div> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .template_icon {
    width: 100%;

    h2,
    h4 {
      font-weight: normal;
      margin-top: 20px;
    }
    h4 {
      color: #1f2f3d;
    }
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
      width: 95%;
      height: 100%;
      display: flex;
      flex-wrap: wrap;

      .icon_library_item {
        flex: 1;
        min-width: 103px;
        max-width: 103px;
        height: 100px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 0.5px solid #ededed;
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
          color: #ccc;
        }
      }

      .icon_library_item:hover {
        .icon_library_item_icon .dk-icon,
        .icon_library_item_name {
          transition: all 0.3s;
          color: #34ab98 !important;
        }
      }
    }
  }
</style>
