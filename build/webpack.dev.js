const path = require('path')
const webpack = require('webpack')
const baseConfig = require('./webpack.base.js');
const { merge } = require('webpack-merge');
const proxyConfig = require('../proxy.config.js')
const mockConfig = require('../mock.config.js')


const devConfig = {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
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
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    optimization: {
        usedExports: true
    }
}

module.exports = merge(baseConfig, devConfig);