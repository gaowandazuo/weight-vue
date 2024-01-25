# 通用工具说明

## 公共方法

- 框架全局引入 lodash，可通过

```js
import _ from 'lodash'
```

进行调用

- `src/utils`中提供了`复制数据到剪切板`、`字符串加密`、`转excel`、`时间格式化`、`获取随机id`等方法，请自行查阅

## 公共组件

框架将常用组件抽离，并注册到全局。在组件中引用时不必`import`，直接在标签中使用即可。

1. 可折叠 banner

```html
<g-banner></g-banner>
```

2. 可拖拽、位置持久化布局(位置缓存在浏览器中)

```html
<vab-home-layout>
  <vab-home-card></vab-home-card>
</vab-home-layout>
```

`vab-home-card`

|     属性     | 是否必填 |                           说明                           |
| :----------: | :------: | :------------------------------------------------------: |
|     key      |    是    |                组件唯一值，用于位置持久化                |
|     icon     |    否    |              图标，当 title 为空时，不显示               |
|    title     |    否    |                           标题                           |
|  responsive  |    否    | 响应式布局设置，{ lg: 8, md: 12, sm: 24, xl: 8, xs: 24 } |
|     url      |    否    |               iframe 链接，为空时，不展示                |
| verticalGrid |    否    |                 竖直方向高度，1、2、3、4                 |

3. markdown 格式文件读取

```html
<vab-markdown-viewer></vab-markdown-viewer>
```

## 公共插件

参数按注释顺序

- 全局加载层

```js
/**
 * @description 全局加载层
 * @param {number} index 自定义加载图标类名ID
 * @param {string} text 显示在加载图标下方的加载文案
 */
this.$baseLoading()
```

- 全局 Message

```js
/**
 * @description 全局Message
 * @param {string|VNode} message 消息文字
 * @param {'success'|'warning'|'info'|'error'} type 主题
 * @param {string} customClass 自定义类名
 * @param {boolean} dangerouslyUseHTMLString 是否将message属性作为HTML片段处理
 */
this.$baseMessage('上传完成!', 'success', 'vab-hey-message-success')
```

- 全局 Alert

```js
/**
 * @description 全局Alert
 * @param {string|VNode} content 消息正文内容
 * @param {string} title 标题
 * @param {function} callback 若不使用Promise,可以使用此参数指定MessageBox关闭后的回调
 */
this.$baseAlert('警告！')
```

- 全局 Confirm

```js
/**
 * @description 全局Confirm
 * @param {string|VNode} content 消息正文内容
 * @param {string} title 标题
 * @param {function} callback1 确认回调
 * @param {function} callback2 关闭或取消回调
 * @param {string} confirmButtonText 确定按钮的文本内容
 * @param {string} cancelButtonText 取消按钮的自定义类名
 */
this.$baseConfirm('点击确定', null, async () => {
  await test()
})
```

- 全局 Notification

```js
/**
 * @description 全局Notification
 * @param {string} message 说明文字
 * @param {string|VNode} title 标题
 * @param {'success'|'warning'|'info'|'error'} type 主题样式,如果不在可选值内将被忽略
 * @param {'top-right'|'top-left'|'bottom-right'|'bottom-left'} position 自定义弹出位置
 * @param duration 显示时间,毫秒
 */
this.$baseNotify('警告', '这是一条警告', 'success')
```

- 全局事件总线

```js
this.$baseEventBus.$on('test-bus', () => {
  test()
})

this.$baseEventBus.$emit('test-bus')
```

- 自定义指令 v-drag（dom 可拖动）

```html
<div v-drag></div>
```
