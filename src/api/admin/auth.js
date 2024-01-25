import request from '@/utils/request'
//获取业务中台个人信息接口
export function userInfo() {
  return request({
    url: '/auth/v1/user/me',
    method: 'get',
  })
}
export function loginOutYWZT() {
  return request({
    url: '/auth/v1/token/globallogout',
    method: 'get',
  })
}
