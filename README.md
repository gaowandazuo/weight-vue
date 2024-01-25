<p style="font-size: 34px; text-align: center;">浪潮智慧水利统一UI中心使用说明</p>

# 入门

## 简介

本系统为纯前端项目，推荐使用 vscode 进行开发。本工程 git 地址为。
本工程目录接口为：

```text
├── .vscode                                     # vscode 配置（不可删除）
├── mock                                        # 本地 mock 数据
├── node_modules                                # 项目依赖模块
├── public
│   ├── img                                     # pwa图标
│   ├── static                                  # 静态资源
│   ├── favicon.ico                             # favicon图标
│   └── index.html                              # 入口 HTML
├── src
│   ├── api                                     # API 服务模块
│   ├── assets                                  # 本地静态资源
│   ├── config                                  # 项目配置
│   │   ├── cli.config.js                       # vue/cli配置
│   │   ├── net.config.js                       # 网络配置
│   │   ├── setting.config.js                   # 通用配置
│   │   ├── theme.config.js                     # 主题配置
│   │   └── index.js                            # 自定义配置合并（不建议修改）
│   ├── extra                                   # 封装的小工具
│   ├── i18n                                    # 多语言
│   ├── icon                                    # 存放自定义svg图标 ，仅在icon属性为isCustomSvg时才会调用svg图标
│   ├── router                                  # 路由配置
│   ├── store                                   # vuex 状态管理配置
│   ├── utils                                   # js 工具
│   ├── vab                                     # 核心模块
│   │   |── components                          # 所有组件
|   |   |   ├── VabAppMain                      # 内页
|   |   |   ├── VabAvatar                       # 头像
|   |   |   ├── VabBreadcrumb                   # 面包屑
|   |   |   ├── VabFold                         # 展开合并
|   |   |   ├── VabFullScreen                   # 全屏
|   |   |   ├── VabLanguage                     # 国际化
|   |   |   ├── VabLogo                         # logo
|   |   |   ├── VabNav                          # 顶部navBar
|   |   |   ├── VabNotice                       # 通知
|   |   |   ├── VabRefresh                      # 刷新
|   |   |   ├── VabSearch                       # 搜索
|   |   |   ├── VabSideBar                      # 左侧菜单
|   |   |   ├── VabTabs                         # 多标签页
|   |   |   ├── VabTheme                        # 主题
|   |   |   ├── VabTopBar                       # 横向布局头部
|   |   |   ├── VabLink                         # 链接跳转封装
|   |   |   ├── VabMenu                         # 菜单封装
│   │   |   └── VabQueryForm                    # 顶部查询条件布局封装
│   │   ├── layouts                             # 界面布局(不需要主题可删除)
|   |   |   ├── VabLayoutColumn                 # 分栏布局
|   |   |   ├── VabLayoutCommon                 # 常规布局
|   |   |   ├── VabLayoutComprehensive          # 综合布局
|   |   |   ├── VabLayoutHorizontal             # 横向布局
|   |   |   ├── VabLayoutFloat                  # 浮动布局
|   |   |   └── VabLayoutVertical               # 纵向布局
│   │   ├── pulgin                              # 必要插件
│   │   └── styles                              # 主题相关
│   ├── views                                   # 页面组件
│   │   ├── callback                            # 第三方登录回调页面
│   │   ├── index                               # 首页
│   │   ├── login                               # 登录
│   │   ├── doc                                 # markdown渲染组件
│   │   └── typicalPage                         # 典型页面
│   ├── App.vue                                 # 应用入口组件
│   ├── registerServiceWorker.js                # PWA注册（支持https生产环境）
│   └── main.js                                 # 应用入口js
├── .eslintrc.js                                # eslint 配置项
├── babel.config.js                             # babel-loader 配置
├── package.json                                # 依赖文件
├── postcss.config.js                           # postcss 配置
├── prettier.config.js                          # prettier 配置
├── vab.config.js                               # 配置
└── vue.config.js                               # vue-cli 配置
```

### 演示地址

http://10.110.60.147:7776/wuu/

# 开发

## 开发配置建议

- 开发工具 vscode（请勿使用其他工具）
- 浏览器调试工具(edge > 99.0.1150.39 或 chrome > 99.0.1150.39)
- node 版本请使用 16 或 18

## 开发工具配置

### vscode 配置（建议使用）

vscode 下载地址https://code.visualstudio.com/

### 插件安装

- [Local History (opens new window)](https://marketplace.visualstudio.com/items?itemName=xyz.local-history)local-history]（强烈推荐，必须安装，可找回丢失代码）
- [Eslint (opens new window)](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)eslint（必须安装）
- [Stylelint (opens new window)](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)stylelint（必须安装）
- [Prettier - Code formatter (opens new window)](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)代码自动格式化（必须安装）
- [Vetur (opens new window)](https://marketplace.visualstudio.com/items?itemName=octref.vetur)vue2 开发必备
- [Auto Import (opens new window)](https://marketplace.visualstudio.com/items?itemName=steoates.autoimport)import 引入自动补全（推荐安装）
- [Import Cost (opens new window)](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost)查看你引入的依赖模块大小（推荐安装）
- [Auto Close Tag (opens new window)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)自动补全 html 标签（推荐安装）
- [Auto Rename Tag (opens new window)](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)自动重命名 html 标签（推荐安装）
- [Docthis (opens new window)](https://marketplace.visualstudio.com/items?itemName=oouo-diogo-perdigao.docthis)注释插件（可不安装）
- [One Monokai Theme (opens new window)](https://marketplace.visualstudio.com/items?itemName=azemoh.one-monokai)vscode 主题包（可不安装）
- [Git History (opens new window)](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory)查看 git 提交历史（可不安装）
- [Live Server (opens new window)](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)打包项目可直接预览（可不安装）
- [Svg Preview (opens new window)](https://marketplace.visualstudio.com/items?itemName=SimonSiefke.svg-preview)svg 查看器（可不安装）

## 关闭 eslint（强烈不推荐）

- 文件位置`src/config/cli.config.js`

- 特别注意：一旦关闭 eslint，必须删除`package.json`中的`lint-staged`相关的全部代码，否则由于插件机制一旦强制推送失败，可能导致所有 git 暂存文件全部丢失，除 webstom 外几乎没有任何开发工具可以找回！！！

  ```js
  /**
   * @description 导出vue/cli配置，以下所有配置修改需要重启项目！！！
   */
  module.exports = {
    // 开发环境每次保存时是否输出为eslint编译警告，改为false重启即可关闭eslint
    lintOnSave: true,
  }
  ```

`.vscode/setting.js`配置（这里只做展示，默认已配好，无需再次配置）

```json
{
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.quickSuggestions": {
    "strings": true
  },
  "workbench.colorTheme": "One Monokai",
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "emmet.triggerExpansionOnTab": true,
  "editor.formatOnSave": true,
  "javascript.format.enable": true,
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "git.confirmSync": false,
  "[json]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "liveServer.settings.donotShowInfoMsg": true,
  "explorer.confirmDelete": false,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "files.exclude": {
    "**/.idea": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
    "source.fixAll.eslint": true
  },
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.defaultFormatter": "HookyQR.beautify"
  },
  "[jsonc]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.suggest.snippetsPreventQuickSuggestions": false,
  "prettier.htmlWhitespaceSensitivity": "ignore",
  "prettier.vueIndentScriptAndStyle": true,
  "docthis.authorName": "sunzhengjun sunzhengjun@inspur.com",
  "docthis.includeAuthorTag": true,
  "docthis.includeDescriptionTag": true,
  "docthis.enableHungarianNotationEvaluation": true,
  "docthis.inferTypesFromNames": true,
  "vetur.format.defaultFormatter.html": "prettier",
  "files.autoSave": "onFocusChange"
}
```

## 开始

### 框架的工作流程

- 网站启动后，会加载全局配置

- 用户访问一个页面(如：/index)后，会验证是否有 token，没有会跳转到/login 页面

- 持有 token 后，会通过/userInfo 接口获取用户信息(包含：用户名、头像、guard)

- 根据全局配置，选择前端导出路由或者后端导出路由，根据用户 roles 和 ability 过滤，放入 vue router

- 打开/index 页面

  ### 安装依赖

  **npm i** **--registry=http://mirrors.cloud.tencent.com/npm/**

  ### 全局配置

#### vue/cli 配置

位置：`src/config/cli.config.js`

```js
/**
 * @description 导出vue/cli配置，以下所有配置修改需要重启项目
 */
module.exports = {
  // 开发以及部署时的URL
  // hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"
  // history模式默认使用"/"或者"/二级目录/"，记住只有hash时publicPath可以为空
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: ['resize-detector'],
  // 开发环境端口号
  devPort: 10000,
  // 需要自动注入并加载的模块
  providePlugin: {},
  // npm run build时是否自动生成7z压缩包
  build7z: false,
  // npm run build时是否生成gzip
  buildGzip: false,
  // npm run build时是否开启图片压缩，由于国内网路原因image-webpack-loader必须使用cnpm安装，如无法使用cnpm，请配置false
  imageCompression: true,
  // pwa 项目缓存，服务挂掉时，也可操作。服务器重新启动应用，可检测到，并重新加载
  pwa: true,
}
```

#### 网络配置

位置：`src/config/net.config.js`

```js
/**
 * @description 导出网络配置
 **/
module.exports = {
  // 默认的接口地址，开发环境和生产环境都会走/vab-mock-server
  // 正式项目可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/vab-mock-server'
      : '/vab-mock-server',
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 最长请求时间
  requestTimeout: 10000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, '200', '0'],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'msg',
}
```

#### 通用配置

位置：`src/config/setting.config.js`

```js
/**
 * @description 导出通用配置
 */
module.exports = {
  // 标题，此项修改后需要重启项目！！！ (包括初次加载雪花屏的标题 页面的标题 浏览器的标题)
  title: '水利统一UE中心',
  // 标题分隔符
  titleSeparator: ' - ',
  // 标题是否反转
  // 如果为false: "page - title"
  // 如果为ture : "title - page"
  titleReverse: false,
  // 简写
  abbreviation: 'sw-vue',
  // pro版本copyright可随意修改
  copyright: '浪潮智慧科技',
  // 缓存路由的最大数量
  keepAliveMaxNum: 20,
  // 路由模式，可选值为 history 或 hash
  routerMode: 'hash',
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，请使用query传参，配置时只配置path即可
  routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
  // 加载时显示文字
  loadingText: '正在加载中...',
  // token名称
  tokenName: 'token',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'admin-pro-token',
  // token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  // token失效回退到登录页时是否记录本次的路由（是否记录当前tab页）
  recordRoute: true,
  // 是否开启logo，不显示时设置false，请填写src/icon路径下的图标名称
  // 如需使用内置RemixIcon图标，请自行去logo组件切换注释代码(内置svg雪碧图较大，对性能有一定影响)
  logo: 'vuejs-fill',
  // 语言类型zh、en
  i18n: 'zh',
  // 消息框消失时间
  messageDuration: 3000,
  // 在哪些环境下显示高亮错误 ['development', 'production']
  errorLog: 'development',
  // 是否开启登录拦截
  loginInterception: true,
  // 是否开启登录RSA加密
  loginRSA: false,
  // intelligence(前端导出路由)和all(后端导出路由)两种方式
  authentication: 'intelligence',
  // 是否支持游客模式，支持情况下，访问白名单，可查看所有asyncRoutes
  supportVisit: false,
  // 是否开启roles字段进行角色权限控制(如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段)
  rolesControl: true,
  // vertical column comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: false,
  // vertical column comprehensive common布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOpeneds: [
    '/vab',
    '/vab/table',
    '/vab/icon',
    '/vab/form',
    '/vab/editor',
    '/vab/editor',
  ],
  // 需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  // 分栏布局和综合布局时，是否点击一级菜单默认开启二级菜单(默认第一个，可通过redirect自定义)
  openFirstMenu: true,
}
```

#### 主题配置

位置：`src/config/theme.config.js`

```js
/**
 * @description 导出主题配置，注意事项：此配置下的项修改后需清理浏览器缓存
 */
module.exports = {
  // 布局种类：横向布局horizontal、纵向布局vertical、分栏布局column、综合布局comprehensive、常规布局common、浮动布局float
  layout: 'column',
  // 主题名称：默认blue-black、blue-white、blue-pure、green-black、green-white、渐变ocean、red-white、red-black
  themeName: 'blue-black',
  // 菜单背景 none、vab-background
  background: 'none',
  // 分栏风格(仅针对分栏布局column时生效)：横向风格horizontal、纵向风格vertical、卡片风格card、箭头风格arrow
  columnStyle: 'card',
  // 是否固定头部固定
  fixedHeader: true,
  // 是否开启顶部进度条
  showProgressBar: true,
  // 是否开启标签页
  showTabs: true,
  // 显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth
  tabsBarStyle: 'smooth',
  // 是否标签页图标
  showTabsIcon: true,
  // 是否开启语言选择组件
  showLanguage: true,
  // 是否开启刷新组件
  showRefresh: true,
  // 是否开启搜索组件
  showSearch: true,
  // 是否开启主题组件
  showTheme: true,
  // 是否开启通知组件
  showNotice: true,
  // 是否开启全屏组件
  showFullScreen: true,
  // 是否开启右侧悬浮窗
  showThemeSetting: true,
  //纵向布局、常规布局、综合布局时是否默认收起左侧菜单（不支持分栏布局、横向布局）
  collapse: false,
}
```

### 前端代理连接

打开 vue.config.js 放开注释，就可以了

```js
roxy: {
  [baseURL]: {
    target: `http://你的后端接口地址`,//所有配置不要动，只改这一个地方，改完重启项目
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      ["^/" + baseURL]: "",
    },
  },
},
```

### 图标模块

vab-icons 为封装好的组件，包括以下属性：

- icon @/icon 文件夹下自定义的 svg 图标 或 内置的图标（可在系统图标-小清新图标中查阅）
- isCustomSvg 是否为自定义图标

如何自定义图标？
把设计好的 svg 放置在 @/icon 文件夹下，项目通过

```js
requireContext.keys().map(requireContext)
```

脚本进行前端工程自动化引入

# 构建和发布

## 打包命令

```bash
# 项目根目录
npm run build
```

#### 打包后配置

位置：`customConfig.json`

```js
{
  // "标题",
  "title": "水利统一UE中心",

  // "版权信息",
  "copyright": "浪潮智慧科技",

  // "加载时显示文字",
  "loadingText": "正在加载中...",

  // "语言类型zh、en",
  "i18n": "zh",

  // "是否开启logo，不显示时设置false；将logo文件放置到/logo文件夹下，请填写logo文件夹下图片名称（包括扩展名）,图片大小可自适应",
  "logo": "logo-lc.png",

  // "使用本地文件时，将.ico文件放置到根路径下。使用远程地址时，填写完整路径",
  "favicon": "./favicon.ico",

  // "布局种类：横向布局horizontal、纵向布局vertical、分栏布局column、综合布局comprehensive、常规布局common、浮动布局float",
  "layout": "column",

  // "主题名称：默认blue-black、blue-white、blue-pure、green-black、green-white、渐变ocean、red-white、red-black",
  "themeName": "blue-black",

  // "菜单背景 none、vab-background",
  "background": "none",

  // "分栏风格(仅针对分栏布局column时生效)：横向风格horizontal、纵向风格vertical、卡片风格card、箭头风格arrow",
  "columnStyle": "card",

  // "是否开启标签页",
  "showTabs": true,

  // "显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth",
  "tabsBarStyle": "smooth",

  // "是否开启语言选择组件",
  "showLanguage": true,

  // "是否开启刷新组件",
  "shokRefresh": true,

  // "是否开启搜索组件",
  "showSearch": true,

  // "是否开启主题组件",
  "showTheme": true,

  // "是否开启通知组件",
  "showNotice": true,

  // "是否开启全屏组件",
  "showFullScreen": true,

  // "纵向布局、常规布局、综合布局时是否默认收起左侧菜单（不支持分栏布局、横向布局）",
  "collapse": true,

  // "是否开启登录拦截",
  "loginInterception": true,

  // "使用业务中台认证登录",
  "loginYWZT": true,

  // "客户端标识",
  "appApiKey": "shuili-products",

  // "客户端密钥",
  "appSecretKey": "o63pnu09r5riogtt1wuo4atz0ptdqbrx",

  // "登陆后返回地址",
  "appRedirectUri": "http://localhost:10001/auth-redirect",

  // "指定获取access token的URI",
  "appAccessTokenUri": "http://10.110.60.138:8180/auth/oauth/token",

  // "用户跳转去获取access token的URI",
  "appUserAuthorizationUri": "http://10.110.60.138:8180/auth/oauth/authorize",

  // "注销url",
  "vueAppLogoutUri": "/auth/v1/token/globallogout",

  // "client的scope",
  "appScope": "trust",

  // "API网关地址",
  "baseURL": "/api"
}

```
