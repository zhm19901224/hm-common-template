const proxyConfig = {
  '/api': {
    target: 'https://ucenter.lenovo.com',
    secure: true,
    changeOrigin: true,
  },
};

module.exports = proxyConfig;
