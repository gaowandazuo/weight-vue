import Vue from 'vue'
import ElementUI from 'element-ui'
// 使用自定义主题
import '@/vab/styles/variables/element-variables.scss'
// 响应式布局,基于断点的隐藏类
import 'element-ui/lib/theme-chalk/display.css'
import i18n from '@/i18n'

Vue.use(ElementUI, {
  size: 'small',
  i18n: (key, value) => i18n.t(key, value),
})
