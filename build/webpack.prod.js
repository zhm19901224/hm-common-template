const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const prodConfig = {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    optimization: {
        minimize: true,
        minimizer: [ 
            new UglifyJsPlugin()        // 不能依赖mode，mode对于特定版本会失效
        ]
    }
}
module.exports = merge(baseConfig, prodConfig);