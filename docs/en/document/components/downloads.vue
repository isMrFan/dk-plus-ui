<script lang="ts">
  /**
   * @name downloads
   * @author fanKai16
   * @version 1.0.0
   * @Time 2023/04/10
   * @description 介绍内下载趋势
   **/
  import { defineComponent, toRefs, reactive, onMounted } from 'vue'
  interface DownloadItem {
    downloads: number
    end: string
    start: string
    zh: string
  }
  interface Download {
    'last-month': DownloadItem | null
    'last-week': DownloadItem | null
    'last-day': DownloadItem | null
  }

  export default defineComponent({
    name: 'Downloads',
    setup() {
      const data = reactive({
        times: [
          { en: 'last-month', zh: '上个月' },
          { en: 'last-week', zh: '上周' },
          { en: 'last-day', zh: '昨天' }
        ] as const,
        downloadVolume: {
          'last-month': null,
          'last-week': null,
          'last-day': null
        } as Download
      })
      const methods = reactive({
        init() {
          data.times.forEach(item => {
            fetch(`https://api.npmjs.org/downloads/point/${item.en}/dk-plus`)
              .then((res: Response) => res.json())
              .then((res: DownloadItem) => {
                if (res) {
                  res.zh = item.zh
                  data.downloadVolume[item.en as keyof Download] = res
                }
              })
              .catch(err => console.log(err))
          })
        }
      })
      onMounted(() => {
        methods.init()
      })
      return {
        ...toRefs(data),
        ...toRefs(methods)
      }
    }
  })
</script>

<template>
  <table id="downloads-table">
    <thead>
      <tr>
        <th>时间范围</th>
        <th>时间</th>
        <th>下载量</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, index) in downloadVolume" :key="index">
        <template v-if="item">
          <td>{{ item.start }} ~ {{ item.end }}</td>
          <td>{{ item.zh }}</td>
          <td>{{ item.downloads }}</td>
        </template>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
  #downloads-table {
    width: 100%;
    border-spacing: 0;
    border-collapse: collapse;
    table-layout: fixed;
    text-align: left;
    display: inline-table;
  }
</style>
