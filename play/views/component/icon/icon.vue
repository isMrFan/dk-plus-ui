<script lang="ts">
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: 'DkIconsm',
    setup() {
      const htmlJson = {
        foundation: '<dkIcon :icon="IconShanchu1"></dkIcon>',
        zidingyis: '<dkIcon :size="24" :color="\'red\'" :icon="IconShanchu1"></dkIcon>'
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
        ['IconQuerySys', '设备搜索'],
        ['IconLogOffSys', '注销系统'],
        ['IconMysql', 'mysql'],
        ['IconSystem', '系统'],
        ['IconSysLoad', '系统负载'],
        ['IconScienceSys', '科研系统'],
        ['IconSysOperation', '系统运维'],
        ['IconFileSys', '文档'],
        ['IconFileSysMedicine', '药品'],
        ['IconSysMsg1', '系统消息'],
        ['IconSysUpload', '系统导入'],
        ['IconSysSetting', '系统配置'],
        ['IconNotice', '通知'],
        ['IconLight', '提示'],
        ['IconSystem2', '系统'],
        ['IconSysManage', '系统管理'],
        ['IconSetting', '设置'],
        ['IconSetSeat', '位置配置'],
        ['IconAssetsDic', '资产字典'],
        ['IconSysConfig', '资产配置'],
        ['IconSysLog', '系统日志'],
        ['IconSysMsg2', '系统消息'],
        ['IconSystem3', '系统'],
        ['IconSysNotice1', '系统信息'],
        ['IconCallSys', '外呼系统'],
        ['IconSysSupervise', '系统监督'],
        ['IconSysMaintain', '系统维护'],
        ['IconLANSearch', '局域网搜索'],
        ['IconSystem4', '系统'],
        ['IconSysUpdate', '系统更新'],
        ['IconFaceID', '人脸识别'],
        ['IconCloudSearch', '云搜索'],
        ['IconSysPower', '权限'],
        ['IconLogout', '退出'],
        ['IconSysBugTesting', '系统漏洞检测'],
        ['IconFingerprintVerify', '指纹验证'],
        ['IconSysFile', '系统文档'],
        ['IconSysNotice', '系统公告']
      ]
      const iconNameSpace = [
        ['IconIos', '苹果'],
        ['IconAndroid', '安卓'],
        ['IconStart', '开始'],
        ['IconReduce', '下降折线'],
        ['IconUpArrow', '上箭头'],
        ['IconDoubleArrow', '双箭头'],
        ['IconRefresh', '刷新'],
        ['IconUpArrow1', '上箭头'],
        ['IconDownArrow', '下箭头'],
        ['IconCross', '十字'],
        ['IconBottomArrow', '下底部箭头'],
        ['IconTopArrow', '上部部箭头'],
        ['IconUnderThe', '下箭头亿'],
        ['IconOnThe', '上箭头亿'],
        ['IconRightArrow', '右箭头亿'],
        ['IconLeftArrow', '左箭头亿'],
        ['IconUpAndDown', '上下箭头'],
        ['IconBottomArrow1', '上横bott'],
        ['IconContraction', '收起'],
        ['IconExit', '退出登陆'],
        ['IconRise', '上升图标'],
        ['IconLeftMenu', '左菜单'],
        ['IconRightMenu', '右菜单'],
        ['IconLeftarrow1', '左边箭头1'],
        ['IconBottomArrow2', '下箭头1'],
        ['IconUpAndDown1', '上下箭头'],
        ['IconDownload','下载图标']
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
    <div v-if="false" class="icon_library">
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
          <dk-icon :icon="item[0]" :size="24" :color="'#606266'"></dk-icon>
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
