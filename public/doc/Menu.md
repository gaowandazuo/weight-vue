# 菜单配置说明

## 位置

- 路由配置位置`src/router/index.js`

## 说明

`src/router/index.js` 中：

- `asyncRoutes`为动态路由，可在 store 中修改相关方法来实现获取动态菜单
- `constantRoutes`为静态路由，是固定的

## 路由 meta 可选项

- `title:xxx` 菜单名称
- `icon:xxx` 菜单图标（可从[http://10.110.60.147:7777/wuu/vab/icon](http://10.110.60.147:7777/wuu/vab/icon)中选择所需图标）
- `hidden:true或false` 该路由是否在菜单中显示
- `breadcrumbHidden:true或false` 该路由是否显示面包屑
- `noClosable:true或false` 该路由在标签页中是否可关闭
- `dot:true或false` 菜单是否显示小红点
- `activeMenu:xxx` 当前高亮菜单
- `dynamicNewTab:true或false` 三级路由动态路径根据 id 传参不同可打开多个 tab
- `levelHidden:true或false` 是否在菜单中隐藏此级别路由
- `guard` 权限控制，详细配置请查看示例

  ```js
  // 等价guard: ['Admin', 'Editor'],
  guard: {
    role: ['Admin', 'Editor'],
    mode: 'oneOf',
  },
  // allOf(全部满足)、oneOf（满足其中之一）、except（不满足）
  ```

- `badge:false或1、2、3` 菜单角标，false 时不显示
- `noKeepAlive:true或false` 是否开启路由缓存
- `target:'_blank'` 外部链接，在`path`处配置

## 相关方法

通过全局状态 store 来全局调用

- `routes/setRoutes` 可通过修改该方法设置动态路由，并可实现调用刷新
- `routes/changeMenuMeta` 可通过该方法修改路由 meta 信息，比如修改角标显示的数字
- `routes/changeActiveName` 修改当前高亮的菜单

## BSP 菜单配置

系统菜单通过 5A 基础管理系统进行统一配置。

1. 将`customConfig.json`中`authentication`变量修改为`all`
2. [http://10.110.60.28:30123/portal/jsp/management/index_new.jsp?appCode=5A](http://10.110.60.28:30123/portal/jsp/management/index_new.jsp?appCode=5A)中管理菜单，点击`功能管理`，配置对应模块：

- 模块对应菜单节点，可树状创建；
- 若勾选末级模块，该模块下可创建功能，功能对应菜单叶子节点；
- 功能下级可创建操作，新建的操作需为路由格式，同时要配置 url，该操作即为隐藏路由，不在 wuu 菜单中展示，如`列表-列表新增`；
-

在`菜单分类管理`中引入相关模块后，配置菜单路径，其中：

- `请求对象`为路由的路径，为匹配组件，需将组件放置在`@/views/`文件夹下。该项填写为在`views`文件夹下的路径，如`/doc/Menu`。提示：组件有两种文件命名方式，如`/doc/Menu/index.vue`或`/doc/Menu.vue`，在 5A 管理中都为`/doc/Menu`的填写方式；
- `图标路径`为 wuu 系统中图标名，可自行查阅使用；

bsp_tips:

- `外链路由`：将`target`设置为`2`或`_blank`;
- `外部页面挂接路由`：将`target`设置为`1`;
- `升级为一级菜单`：将上级路由的`target`修改为`10`。需注意，所有带操作的一级菜单，须为二级即以下路由，一级路由永不为操作;
- 动态参数路由需设置隐藏路由，参考上述`功能管理`中的相关设置
