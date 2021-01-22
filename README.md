1. 内置react、react-router、redux、react-redux
2. 样式文件可以使用sass、less、stylus
3. 在src/utils/server.js中通过axios封装通用请求方法，通过devServer proxy实现跨域代理
4. 在mock.config.js中定义mock请求数据信息，基于devServer express before拦截api，无需mockjs
5. devServer historyApiFallback处理了SPA browserRouter的问题
6. 自带eslint
7. 用thread-loader多进程打包，加快打包速度