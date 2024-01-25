/**
 * @description 5个子配置，vue/cli配置|通用配置|主题配置|网络配置导出|静态文件配置
 *              config中的部分配置由vue.config.js读取，本质是node，故不可使用window等浏览器对象
 */
const cli = require('./cli.config')
const setting = require('./setting.config')
const theme = require('./theme.config')
const network = require('./net.config')
const nodeConfig = require('../../public/customConfig.json')

function SyncRequest(url) {
  let obj = new XMLHttpRequest()
  obj.open('GET', encodeURI(url), false)
  obj.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  obj.send(null)
  return obj.responseText
}

function getConfigFromCenter() {
  if (!nodeConfig.useConfigFromCenter) {
    return false
  }
  let res = eval(
    '(' +
      SyncRequest(
        `${nodeConfig.baseURL}/config/ueConfig/select?code=${nodeConfig.appApiKey}`
      ) +
      ')'
  )
  if (res.code == 20000 && res.data.layout) {
    return res.data
  } else {
    console.log('未成功获取配置，可能是接口出错或配置不完整')
    return false
  }
}

function getConfigFromLocal() {
  return eval('(' + SyncRequest(`${cli.publicPath}customConfig.json`) + ')')
}

let custom =
  typeof window == 'undefined'
    ? nodeConfig
    : getConfigFromCenter() || getConfigFromLocal()

console.log(custom)
module.exports = {
  ...cli,
  ...setting,
  ...theme,
  ...network,
  ...custom,
}
