const webpack = require('webpack')

const express = require('express')

const webpackDevMiddeware = require('webpack-dev-middleware');

const webpackConfig = require('./webpack.dev.js')

const compiler = webpack(webpackConfig);        // 根据配置文件生成的编译器

const app = express()

app.use(webpackDevMiddeware(compiler, {
    publicPath: webpackConfig.output.publicPath     //  只要文件发生改变，就重新编译，输出在配置文件的publicPath目录下
}))

app.listen(3000, () => {
    console.log('server is running')
})
