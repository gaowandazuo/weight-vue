# 基础配置说明

## 初始化此框架

可删除以下文件

```text
├── src
    ├── views
       ├── callback
       ├── doc                                 # 说明文档，可删除
       ├── index                               # 首页，可在此修改初始页
       ├── login
       ├── register
       ├── setting                             # 设置页，可删除
       ├── typicalPage                         # 典型页面，可删除
       └── vab                                 # 组件页，可删除
```

删除后，请同步删除对应路由代码。

## Oauth 相关

`customConfig.json`中`loginInterception:true`即开启路由拦截，使用业务中台认证登录也需将`loginInterception`配置为`true`。

## 请求相关

`src/api`中有部分请求示例，业务开发请使用：

```js
import request from '@/utils/request'
```

requestMock 为框架 mock 请求，该框架会启动一个 node 服务，模拟数据并通过 mock 接口返回。相关配置在`/mock`文件夹中，有兴趣可自行查阅。

## 纯净模式

url 中带有`pure=1`时，系统开启纯净模式，隐藏 layout、banner、footer，仅显示内容区域。可用于第三方系统 iframe 嵌入（需同源）。

如：

```js
// http://10.110.60.147:7777/wuu/index?pure=1
```

## 部署立即刷新

该框架通过 webpack 配置引用文件时间戳，实现部署 dist，客户端不用清除缓存即可更新页面的功能。

## 格式化

- `/.vscode/settings.json`为 vscode 的配置文件，建议开发成员使用统一配置，代码保持统一格式化，以避免格式不同而产生的无效 git 变更记录；
- 在`/.vscode/settings.json`文件中，若显示“未知的配置设置”，请按提示安装相关插件；
- 若正确配置完成，保存代码可自动根据 eslint 进行格式修复。
