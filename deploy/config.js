/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @name config.js
 * @author fankai16
 * @Time 2023/04/11
 * @property {any}  path 引入查看包文件
 * @property {string}   envfile   环境变量
 * @property {string}   envPath   环境变量路径
 * @property {string}   envObj    解析文件内容
 * @property {string}   ENV_NAME  获取
 * @description 自动化前端部署配置文件
 **/
const fs = require('fs')
const path = require('path')
const envfile =
  process.env.NODE_ENV === 'docs' ? '../.env.deploy.docs.build' : '暂无其他服务器配置'
const envPath = path.resolve(__dirname, envfile)
const envObj = parse(fs.readFileSync(envPath, 'utf8'))
const ENV_NAME = envObj['NODE_ENV']
/**
 * 解析KEY=VAL格式的配置文件
 * @Author   fankai
 * @DateTime 2023-04-011T16:30:14+0800
 * @param    {[type]}                 src [description]
 * @return   {[type]}                     [description]
 */
function parse(src) {
  const res = {}
  src.split('\n').forEach(line => {
    // matching "KEY' and 'VAL' in 'KEY=VAL'
    // eslint-disable-next-line no-useless-escape
    const keyValueArr = line.match(/^\s*([\w\.\-]+)\s*=\s*(.*)?\s*$/)
    // matched?
    if (keyValueArr != null) {
      const key = keyValueArr[1]
      let value = keyValueArr[2] || ''

      // expand newlines in quoted values
      const len = value ? value.length : 0
      if (len > 0 && value.charAt(0) === '"' && value.charAt(len - 1) === '"') {
        value = value.replace(/\\n/gm, '\n')
      }

      // remove any surrounding quotes and extra spaces
      value = value.replace(/(^['"]|['"]$)/g, '').trim()

      res[key] = value
    }
  })
  return res
}

/*
 *定义多个服务器账号 及 根据 SERVER_ID 导出当前环境服务器账号
 */
const SERVER_LIST = {
  dosc: {
    id: 1,
    name: 'A-这是文档发布地址',
    domain: 'https://cadwaladerss.com/',
    host: '', // 服务器ip
    port: 6098, // 登录服务器端口
    username: '', // 登录服务器的账号
    password: '', // 登录服务器的账号
    path: '/www/wwwroot/cadwaladerss.com/dist', // 发布至静态服务器的项目路径
    rootPath: '/www/wwwroot/cadwaladerss.com'
  }
}

module.exports = SERVER_LIST[ENV_NAME]
