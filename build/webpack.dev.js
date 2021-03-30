const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const proxyConfig = require('../proxy.config.js')
const mockConfig = require('../mock.config.js')
const AddAssetHtmlWebpackPlugin = require('add-asset-html-webpack-plugin')


const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');


const plugins = [
    new ReactRefreshWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
];

const fs = require('fs')
const dllfiles = fs.readdirSync(path.resolve(__dirname, '../dll/'))    // dll文件夹下所有文件名的数组
dllfiles.forEach(filename => {
    // dll映射文件和dll库文件成对出现
    if (/.*\.dll.js/.test(filename)) {
        plugins.push(new AddAssetHtmlWebpackPlugin({
            filepath: path.resolve(__dirname, '../dll', filename)
        }))
    }

    if (/.*\.manifest.json/.test(filename)) {
        plugins.push(new webpack.DllReferencePlugin({
            manifest: path.resolve(__dirname, '../dll', filename)
        }))        
    }
})

const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),      // 服务器根路径
        compress: true,     // gzip压缩
        port: 9000,
        open: true,
        hot: true,
        proxy: proxyConfig,
        historyApiFallback: true,
        before: function(app, server, compiler) {
            if (mockConfig.mockStatus) {
                for (let [url, data] of Object.entries(mockConfig.mockList)) {
                    app.all(url, (req, res) => res.json(data))
                }
            }
        }
    },
    plugins,
    optimization: {
        usedExports: true,
        minimize: false
    }
}

module.exports = merge(baseConfig, devConfig);