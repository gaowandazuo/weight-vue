const List = [
  {
    url: 'http://sw.inspur.com',
    value: '浪潮智慧水利产品集',
  },
]

module.exports = [
  {
    url: '/search/getList',
    type: 'get',
    response: () => {
      return {
        code: 200,
        msg: 'success',
        data: { list: List },
      }
    },
  },
]
