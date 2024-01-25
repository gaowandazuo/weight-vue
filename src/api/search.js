import request from '@/utils/requestMock'

export function getList() {
  return request({
    url: '/search/getList',
    method: 'get',
  })
}
