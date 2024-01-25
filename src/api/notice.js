import request from '@/utils/requestMock'

export function getList() {
  return request({
    url: '/notice/getList',
    method: 'get',
  })
}
