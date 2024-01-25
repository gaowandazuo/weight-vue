import request from '@/utils/requestMock'
import { encryptedData } from '@/utils/encrypt'
import { loginRSA, mockBaseURL } from '@/config'

export async function login(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: mockBaseURL + '/login',
    method: 'post',
    data,
  })
}

export async function socialLogin(data) {
  if (loginRSA) {
    data = await encryptedData(data)
  }
  return request({
    url: mockBaseURL + '/socialLogin',
    method: 'post',
    data,
  })
}

export function getUserInfo() {
  return request({
    url: mockBaseURL + '/userInfo',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: mockBaseURL + '/logout',
    method: 'get',
  })
}

export function register(data) {
  return request({
    url: mockBaseURL + '/register',
    method: 'post',
    data,
  })
}
