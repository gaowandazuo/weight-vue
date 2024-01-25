/**
 * 解析成树状
 * @param jsonData bsp菜单
 */
export function parseJsonToTree(jsonData) {
  // 创建一个空对象用于存储节点id与对应节点的映射关系
  const nodeMap = {}

  // 第一次遍历：将所有节点存储在映射表中
  for (const node of jsonData) {
    const { menuId } = node
    nodeMap[menuId] = { ...node, children: [] }
  }

  // 第二次遍历：将节点添加到相应的父节点的children数组中
  const rootNode = []
  for (const node of jsonData) {
    const { menuId, parentId } = node
    const currentNode = nodeMap[menuId]

    // 如果当前节点是根节点，则将其添加到根节点数组中
    if (parentId === '-1') {
      rootNode.push(currentNode)
    } else {
      // 如果当前节点有父节点，则将其添加到父节点的children数组中
      const parentNode = nodeMap[parentId]
      if (parentNode) {
        parentNode.children.push(currentNode)
      }
    }
  }
  return treeToRoute(rootNode)
}

/**
 * bsp路由解析为wuu路由
 * @param treeItem bsp路由项
 */
export function treeItemToRoute(treeItem) {
  // 删除组件路径首位"/"
  let rootComponent = treeItem.path
  if (rootComponent.charAt(0) === '/') {
    rootComponent = rootComponent.substring(1)
  }
  // 单个路由解析
  let route = {
    path: treeItem.path,
    name: treeItem.menuCode,
    component: treeItem.parentId == '-1' ? 'Layout' : rootComponent,
    meta: {
      title: treeItem.menuName,
      icon: treeItem.icon,
    },
  }
  // 适配外链跳转
  if (treeItem.target == '2' || treeItem.target == '_blank') {
    route.meta.target = '_blank'
  }
  // 适配外部页面挂接
  if (treeItem.target == '1') {
    route.meta.url = treeItem.path
    route.component = 'iframe/view'
    route.path = treeItem.menuCode
  }
  // 适配提升为一级菜单
  if (treeItem.target == '10') {
    route.meta.levelHidden = true
  }

  if (treeItem.actionList && treeItem.actionList.length > 0) {
    route.children = []

    treeItem.actionList.forEach((actionItem) => {
      // 删除组件路径首位"/"
      let component = actionItem.resourceList[0].path
      if (component.charAt(0) === '/') {
        component = component.substring(1)
      }
      // 单个隐藏路由解析
      let action = {
        path: actionItem.resourceList[0].path,
        name: actionItem.actionCode,
        component,
        meta: {
          title: actionItem.actionName,
          hidden: true,
        },
      }
      route.children.push(action)
    })
  }

  return route
}

/**
 * bsp树状路由递归解析为wuu树状路由
 * @param tree bsp路由树
 */

export function treeToRoute(tree) {
  return tree.map((treeItem) => {
    let newRoute = treeItemToRoute(treeItem)
    // bsp菜单不存在既有下级children又有下级arction的情况
    if (treeItem.children && treeItem.children.length > 0) {
      return { ...newRoute, children: treeToRoute(treeItem.children) }
    } else {
      return newRoute
    }
  })
}
