module.exports = {
  mockStatus: true, // 是否启用mock
  mockList: {
    '/api/getUserInfo': {
      code: 0,
      message: 'success',
      data: [{ uid: 0, name: 'Lilei' }],
    },
    '/api/getToDoList': {
      code: 0,
      message: 'success',
      data: [{ name: 'defItem', key: 123 }],
    },
  },
};
