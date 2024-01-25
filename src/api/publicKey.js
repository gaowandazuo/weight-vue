import request from '@/utils/requestMock'

export function getPublicKey() {
  return request({
    url: '/publicKey',
    method: 'get',
  })
}
