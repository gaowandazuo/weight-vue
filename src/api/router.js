import request from '@/utils/request'

export function getMockList(params) {
  return request({
    url: '/router/getList',
    method: 'get',
    params,
  })
}

export function getList(params) {
  return request({
    url: '/bsp/v2/menu/getMenuByMenuTypeId',
    method: 'get',
    params,
  })
}
