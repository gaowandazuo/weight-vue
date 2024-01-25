import request from '@/utils/requestMock'

export function getIconList(params) {
  return request({
    url: '/remixIcon/getList',
    method: 'get',
    params,
  })
}
