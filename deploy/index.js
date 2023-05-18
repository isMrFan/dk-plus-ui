/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @name index.ts
 * @author fankai16
 * @Time 2023/04/11
 * @function runQueLoop   登录执行
 * @function beifen   备份命令执行后
 * @function deployFile   上传发布
 * @description 自动化前端文件
 *  "chalk": "^4.1.2",
 *  "cross-env": "^7.0.3",
 *  "ora": "^5.1.0",
 *  "readline": "^1.3.0",
 *  "scp2": "^0.5.0"
 **/
const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
const scpClient = require('scp2')
const ora = require('ora')
const chalk = require('chalk')
const config = require('./config.js')
const Client = require('ssh2').Client
const conn = new Client()
console.log(chalk.red('***特别注意此自动化脚本会执行自动备份和删除命令'))
console.log(chalk.red('***特别注意备份文件名称_backUp'))
console.log(chalk.red('***特别注意上传文件名称dist'))
console.log(chalk.red('***特别注意会执行以下命令'))
console.log(chalk.red('***rm -rf !(_backUp|dist|.htaccess|.user.ini|404.html)'))
const biaoti = ora(
  '正在发布到' +
    (process.env.NODE_ENV === 'prod' ? '生产' : '测试') +
    '服务器---' +
    '应用域名为:' +
    config.domain
)
biaoti.start()
biaoti.stop()
const questions = [
  '请输入服务器IP地址',
  '请输入管理员给的用户名: ',
  '请输入管理员给的密码: '
]
const linelimit = 3
const inputArr = []
let index = 0
let server = null

runQueLoop()
// 依次执行命令行交互语句
function runQueLoop() {
  if (index === linelimit) {
    server = config
    server.host = inputArr[0]
    server.username = inputArr[1]
    server.password = inputArr[2]
    deployFile()
    return
  }
  rl.question(questions[index], as => {
    inputArr[index] = as
    index++
    runQueLoop()
  })
}
function deployFile() {
  // 将前面的 scp2 上传文件到服务器代码，封装到这里。
  const toLogin = ora(chalk.yellow('正在验证服务器账户密码请稍后...'))
  toLogin.start()
  conn
    .on('ready', function () {
      const rootPath = server.rootPath
      const path = server.path
      const rootFolder = 'BCS_docs'
      const currentTime = Thistime()
      toLogin.stop()
      console.log(chalk.green('登录成功'))
      const successful = ora(
        chalk.green(
          '登入成功请稍后正在执行执行下一步操作....(执行' +
            (process.env.NODE_ENV === 'docs' ? '文档项目' : '暂无其他') +
            '代码备份)'
        )
      )
      successful.start()
      let cmd = `cd ${rootPath}\n
            mkdir -p _backUp/${rootFolder}_${currentTime}\n 
            cp -r ${path} ${rootPath}/_backUp/${rootFolder}_${currentTime}/\n 
            rm -rf ${path}`
      successful.stop()
      console.log(chalk.red('即将执行以下命令'))
      console.log(chalk.yellow('cd' + rootPath))
      console.log(chalk.yellow('mkdir -p _backUp/' + rootFolder + '_' + currentTime))
      console.log(
        chalk.yellow(
          'cp -r ' + path + '' + rootPath + '/_backUp/' + rootFolder + '_' + currentTime
        )
      )
      console.log(chalk.yellow('rm -rf' + path))
      conn.exec(cmd, function (err, stream) {
        // 备份命令执行后
        console.log(chalk.green('已执行完成备份命令,即将上传dist文件上传到服务器'))
        if (err) {
          throw err
        } else {
          scpClientscpDist()
        }
        // 在执行命令行成功后上传文件到服务器上
        stream.on('close', function (code, signal) {
          // 执行部署工作
          console.log('code', code)
          console.log('signal', signal)
        })
      })
    })
    .on('error', function () {
      toLogin.stop()
      console.log(chalk.red('链接服务器出错请您核对账号密码'))
    })
    .connect({
      host: server.host,
      port: server.port,
      username: server.username,
      password: server.password
    })

  function scpClientscpDist() {
    const Enterthe = ora(chalk.yellow('正在上传本地打包文件至服务器请稍后...'))
    Enterthe.start()
    scpClient.scp(
      './docs/.vitepress/dist/',
      {
        host: server.host,
        port: server.port,
        username: server.username,
        password: server.password,
        path: server.path
      },
      function (err) {
        if (err) {
          Enterthe.stop()
          console.log(chalk.red('认证失败中止命令.\n'))
          return
        } else {
          Enterthe.stop()
          console.log(chalk.green('正在替换目标文件请稍后'))
          const rootPath = server.rootPath
          const path = server.path
          let cmd = `rm -rf !(_backUp|dist|.htaccess|.user.ini|404.html)`
          console.log(chalk.red('即将执行以下命令'))
          console.log(chalk.green(`rm -rf !(_backUp|dist|.htaccess|.user.ini|404.html)`))
          console.log(chalk.green(`cp -r ${path}/* ${rootPath}`))
          conn.exec(cmd, function (err) {
            if (err) {
              throw err
            } else {
              let cmd1 = `cp -r ${path}/* ${rootPath}`
              conn.exec(cmd1, function (zire) {
                if (zire) {
                  throw zire
                } else {
                  console.log(
                    chalk.green(
                      'Success! 成功发布到' +
                        (process.env.NODE_ENV === 'prod' ? '生产' : '测试') +
                        '服务器! \n'
                    )
                  )
                }
              })
            }
          })
        }
      }
    )
  }
}
function Thistime() {
  //当前日期
  var date = new Date()
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var mytime = date.toLocaleTimeString() //获取当前时间
  // myDate.toLocaleString( );
  var time = year + '-' + month + '-' + day + mytime
  return time
}
