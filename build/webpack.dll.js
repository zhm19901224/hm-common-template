const path = require('path')
const webpack = require('webpack')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        react: ['react', 'react-dom', 'react-router', 'react-router-dom', 'redux', 'react-redux'],
        axios: ['axios'],
        lodash: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, '../dll'),
        filename: '[name].dll.js',
        library: '[name]'   // 打包的是一个库， 通过变量方式把内容导出
    },
    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DllPlugin({
            name: '[name]',
            path: path.resolve(__dirname, '../dll/[name].manifest.json'),       // 打包出的库文件变量，和真正需要从node_modules中分析打包的库的映射文件
        })
    ]
}