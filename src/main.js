import Vue from 'vue'
import App from './App'
import i18n from './i18n'
import store from './store'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import '@/vab'
import AMap from '@amap/amap-jsapi-loader'
Vue.use(AMap)
import 'github-markdown-css'
// 代码高亮
import 'highlight.js/styles/github-dark.css'

import '../public/static/css/main.css'
import axios from 'axios'
Vue.prototype.$http = axios

/**
 * @description 正式环境默认使用mock，正式项目记得注释后再打包
 */
import { baseURL, pwa, favicon } from './config'
import { isExternal } from '@/utils/validate'

if (process.env.NODE_ENV === 'production' && !isExternal(baseURL)) {
  const { mockXHR } = require('@/utils/static')
  mockXHR()
}
import Banner from '@/vab/components/banner'
Vue.use(Banner)

if (pwa) require('./registerServiceWorker')

Vue.config.productionTip = false
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: (h) => h(App),
})

document.querySelectorAll("link[rel*='icon']").forEach((item) => {
  item.href = favicon
})
