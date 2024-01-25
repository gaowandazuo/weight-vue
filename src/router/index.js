/**
 * @description router全局配置，如有必要可分文件抽离，其中asyncRoutes只有在intelligence模式下才会用到，pro版只支持remixIcon图标，具体配置请查看vip群文档
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/vab/layouts'
import { publicPath, routerMode } from '@/config'

Vue.use(VueRouter)
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/register',
    component: () => import('@/views/register'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/callback',
    component: () => import('@/views/callback'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/403'),
    meta: {
      hidden: true,
    },
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404'),
    meta: {
      hidden: true,
    },
  },
]

export const asyncRoutes = [
  {
    path: '/',
    name: 'Root',
    component: Layout,
    meta: {
      title: '门户',
      icon: 'home-2-line',
      breadcrumbHidden: true,
    },
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/index'),
        meta: {
          title: '首页',
          icon: 'home-smile-line',
          noClosable: true,
        },
      },
    ],
  },
  {
    path: '/engineering',
    name: 'engineering',
    component: Layout,
    meta: {
      title: '工程管理',
      icon: 'list-unordered',
    },
    children: [
      {
        path: 'investment',
        name: 'investment',
        component: () => import('@/views/engineering/investmentss'),
        meta: {
          title: '项目建设情况',
          icon: 'table-2',
        },
      },
      {
        path: 'Xiangmuyutouzi',
        name: 'Xiangmuyutouzi',
        component: () => import('@/views/engineering/Xiangmuyutouzi'),
        meta: {
          title: '项目与投资',
          icon: 'table-2',
        },
      },
      {
        path: 'Zijinguanli',
        name: 'Zijinguanli',
        component: () => import('@/views/engineering/Zijinguanli'),
        meta: {
          title: '资金管理',
          icon: 'table-2',
        },
      },
      {
        path: 'Gongchengjindu',
        name: 'Gongchengjindu',
        component: () => import('@/views/engineering/Gongchengjindu'),
        meta: {
          title: '工程进度',
          icon: 'table-2',
        },
      },
      {
        path: 'Zhiliangyuanquan',
        name: 'Zhiliangyuanquan',
        component: () => import('@/views/engineering/Zhiliangyuanquan'),
        meta: {
          title: '质量与安全',
          icon: 'table-2',
        },
      },
      {
        path: 'Gongchengyunxingguanli',
        name: 'Gongchengyunxingguanli',
        component: () => import('@/views/engineering/Gongchengyunxingguanli'),
        meta: {
          title: '工程运行管理',
          icon: 'table-2',
        },
      },
      {
        path: 'Xiangmuguanli',
        name: 'Xiangmuguanli',
        component: () => import('@/views/engineering/Xiangmuguanli'),
        meta: {
          title: '项目管理',
          icon: 'table-2',
        },
      },
      {
        path: 'Chaxunzhansgiweijian',
        name: 'Chaxunzhansgiweijian',
        component: () => import('@/views/engineering/Chaxunzhanshiweijian'),
        meta: {
          title: '查询展示微件',
          icon: 'table-2',
        },
      },
      {
        path: 'Tianbaoweijian',
        name: 'Tianbaoweijian',
        component: () => import('@/views/engineering/Tianbaoweijian'),
        meta: {
          title: '填报微件',
          icon: 'table-2',
        },
      },
      {
        path: 'Shebeiyunxing',
        name: 'Shebeiyunxing',
        component: () => import('@/views/engineering/Shebeiyunxing'),
        meta: {
          title: '设备运行',
          icon: 'table-2',
        },
      },
      {
        path: 'Xiangmujindu',
        name: 'Xiangmujindu',
        component: () => import('@/views/engineering/Xiangmujindu'),
        meta: {
          title: '项目进度',
          icon: 'table-2',
        },
      },
    ],
  },
  {
    path: '/hehuzhang',
    name: 'hehuzhang',
    component: Layout,
    meta: {
      title: '河湖长',
      icon: 'list-unordered',
    },
    children: [
      {
        path: 'Xunhedongtai',
        name: 'Xunhedongtai',
        component: () => import('@/views/hehuzhang/Xunhedongtai'),
        meta: {
          title: '巡河动态',
          icon: 'table-2',
        },
      },
      {
        path: 'Zuimeihehuzhang',
        name: 'Zuimeihehuzhang',
        component: () => import('@/views/hehuzhang/Zuimeihehuzhang'),
        meta: {
          title: '最美河湖长',
          icon: 'table-2',
        },
      },
      {
        path: 'Qinghexingdong',
        name: 'Qinghexingdong',
        component: () => import('@/views/hehuzhang/Qinghexingdong'),
        meta: {
          title: '清河行动',
          icon: 'table-2',
        },
      },
      {
        path: 'Shuizhigaikuang',
        name: 'Shuizhigaikuang',
        component: () => import('@/views/hehuzhang/Shuizhigaikuang'),
        meta: {
          title: '水质概况',
          icon: 'table-2',
        },
      },
      {
        path: 'Zhongdianshuiyuandishuizhi',
        name: 'Zhongdianshuiyuandishuizhi',
        component: () => import('@/views/hehuzhang/Zhongdianshuiyuandishuizhi'),
        meta: {
          title: '重点水源地水质',
          icon: 'table-2',
        },
      },
      {
        path: 'Gongzuodongtai',
        name: 'Gongzuodongtai',
        component: () => import('@/views/hehuzhang/Gongzuodongtai'),
        meta: {
          title: '工作动态',
          icon: 'table-2',
        },
      },
      {
        path: 'Hehuwendang',
        name: 'Hehuwendang',
        component: () => import('@/views/hehuzhang/Hehuwendang'),
        meta: {
          title: '河湖文档',
          icon: 'table-2',
        },
      },
      {
        path: 'Xiangmujiansheguanli',
        name: 'Xiangmujiansheguanli',
        component: () => import('@/views/hehuzhang/Xiangmujiansheguanli'),
        meta: {
          title: '项目建设管理',
          icon: 'table-2',
        },
      },
      {
        path: 'Hehuwendangkuweijian',
        name: 'Hehuwendangkuweijian',
        component: () => import('@/views/hehuzhang/Hehuwendangkuweijian'),
        meta: {
          title: '河湖文档库微件',
          icon: 'table-2',
        },
      },
    ],
  },
  {
    path: '/gongshui',
    name: 'gongshui',
    component: Layout,
    meta: {
      title: '供水',
      icon: 'list-unordered',
    },
    children: [
      {
        path: 'gongshui1',
        name: 'gongshui1',
        component: () => import('@/views/gongshui/gongshui1'),
        meta: {
          title: '供水',
          icon: 'book-2-line',
        },
      },
      {
        path: 'haoshui1',
        name: 'haoshui1',
        component: () => import('@/views/gongshui/haoshui1'),
        meta: {
          title: '耗水',
          icon: 'book-2-line',
        },
      },
      {
        path: 'haoshui2',
        name: 'haoshui2',
        component: () => import('@/views/gongshui/haoshui2'),
        meta: {
          title: '耗水',
          icon: 'book-2-line',
        },
      },
      {
        path: 'qushuixuke',
        name: 'qushuixuke',
        component: () => import('@/views/gongshui/qushuixuke'),
        meta: {
          title: '取水许可',
          icon: 'book-2-line',
        },
      },
      {
        path: 'shengtailiuliang',
        name: 'shengtailiuliang',
        component: () => import('@/views/gongshui/shengtailiuliang'),
        meta: {
          title: '生态流量',
          icon: 'book-2-line',
        },
      },
      {
        path: 'yongshui',
        name: 'yongshui',
        component: () => import('@/views/gongshui/yongshui'),
        meta: {
          title: '用水',
          icon: 'book-2-line',
        },
      },
      {
        path: 'yongshuixiaolvkongzhi',
        name: 'yongshuixiaolvkongzhi',
        component: () => import('@/views/gongshui/yongshuixiaolvkongzhi'),
        meta: {
          title: '用水效率控制',
          icon: 'book-2-line',
        },
      },
    ],
  },
  {
    path: '/shuiziyuan',
    name: 'shuiziyuan',
    component: Layout,
    meta: {
      title: '水资源',
      icon: 'list-unordered',
    },
    children: [
      {
        path: 'shuiliang',
        name: 'shuiliang',
        component: () => import('@/views/shuiziyuan/shuiliang'),
        meta: {
          title: '水量',
          icon: 'book-2-line',
        },
      },
      {
        path: 'Shuizhi',
        name: 'Shuizhi',
        component: () => import('@/views/shuiziyuan/shuizhi'),
        meta: {
          title: '水质',
          icon: 'table-2',
        },
      },
      {
        path: 'shuikugaojing',
        name: 'shuikugaojing',
        component: () => import('@/views/shuiziyuan/shuikugaojing'),
        meta: {
          title: '水库告警',
          icon: 'table-2',
        },
      },
      {
        path: 'jiancedianshuju',
        name: 'jiancedianshuju',
        component: () => import('@/views/shuiziyuan/jiancedianshuju'),
        meta: {
          title: '监测点数据',
          icon: 'book-2-line',
        },
      },
      {
        path: 'jiangyuliangtubiao',
        name: 'jiangyuliangtubiao',
        component: () => import('@/views/shuiziyuan/jiangyuliangtubiao'),
        meta: {
          title: '降雨量图表',
          icon: 'book-2-line',
        },
      },
    ],
  },
  {
    path: '/typical',
    name: 'Typical',
    component: Layout,
    meta: {
      title: '数据指标',
      icon: 'list-unordered',
    },
    children: [
      {
        path: 'lTreeRList',
        name: 'LTreeRList',
        component: () => import('@/views/typicalPage/LTreeRList/'),
        meta: {
          title: '指标目录',
          icon: 'table-2',
        },
      },
      {
        path: 'lTreeRDetail',
        name: 'LTreeRDetail',
        component: () => import('@/views/typicalPage/LTreeRDetail/'),
        meta: {
          title: '指标详情',
          icon: 'node-tree',
        },
      },
      {
        path: 'typicalForm',
        name: 'TypicalForm',
        component: () => import('@/views/typicalPage/TypicalForm/'),
        meta: {
          title: '指标任务新增',
          icon: 'play-list-2-line',
        },
      },
      {
        path: 'verticalList',
        name: 'VerticalList',
        component: () => import('@/views/typicalPage/VerticalList/'),
        meta: {
          title: '指标列表',
          icon: 'list-unordered',
        },
      },
      {
        path: 'cardList',
        name: 'CardList',
        component: () => import('@/views/typicalPage/CardList/'),
        meta: {
          title: '数据共享清单',
          icon: 'bank-card-line',
        },
      },
    ],
  },

  {
    path: '/user-manual',
    name: 'UserManual',
    component: Layout,
    meta: {
      title: '用户手册',
      icon: 'book-2-line',
      breadcrumbHidden: true,
    },
    children: [
      {
        path: 'home-note',
        name: 'HomeNote',
        coewesdazDmponent: () => import('@/views/doc/Instructions.vue'),
        meta: {
          title: '使用说明',
          icon: 'book-open-line',
        },
      },
      {
        path: 'menu-note',
        name: 'MenuNote',
        component: () => import('@/views/doc/Menu.vue'),
        meta: {
          title: '菜单配置说明',
          icon: 'book-open-line',
        },
      },
      {
        path: 'basic-note',
        name: 'BasicNote',
        component: () => import('@/views/doc/Basic.vue'),
        meta: {
          title: '基础配置说明',
          icon: 'book-open-line',
        },
      },
      {
        path: 'tool-note',
        name: 'ToolNote',
        component: () => import('@/views/doc/Tool.vue'),
        meta: {
          title: '通用工具说明',
          icon: 'book-open-line',
        },
      },
      {
        path: 'config-center',
        name: 'ConfigCenter',
        component: () => import('@/views/doc/ConfigCenter.vue'),
        meta: {
          title: '配置中心说明',
          icon: 'book-open-line',
        },
      },
    ],
  },

  {
    path: '*',
    redirect: '/404',
    meta: {
      hidden: true,
    },
  },
]

const router = createRouter()

function fatteningRoutes(routes) {
  return routes.flatMap((route) => {
    return route.children ? fatteningRoutes(route.children) : route
  })
}

export function resetRouter(routes = constantRoutes) {
  routes.map((route) => {
    if (route.children) {
      route.children = fatteningRoutes(route.children)
    }
  })
  router.matcher = createRouter(routes).matcher
}

function createRouter(routes = constantRoutes) {
  return new VueRouter({
    base: publicPath,
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: routes,
  })
}

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
