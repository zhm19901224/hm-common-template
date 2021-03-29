const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const env = process.env.NODE_ENV;

require.resolve('react/jsx-runtime');

module.exports = {
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.ts', '.tsx'],
        mainFiles: ['index'], // 导入文件夹，会先查找文件下面的index.js
        alias: {    // 别名
            pages: path.resolve(__dirname, '../src/pages'),
            api: path.resolve(__dirname, '../src/api'),
            images: path.resolve(__dirname, '../assets/images'),
            components: path.resolve(__dirname, '../src/components'),
        }
    },
    entry: {
        main: './src/index.js',
    },
    output: {
        publicPath: '/',
        filename: '[name].[contenthash].js',
        chunkFilename: '[name].[contenthash].chunk.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                include: path.resolve(__dirname, '../src'),
                exclude: /node_modules/,
                use: [
                    'thread-loader',
                    'babel-loader'
                ]
            },
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, '../src'),
                use: 'ts-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        name: '[name]_[hash].[ext]',    // placeholder占位符
                        outputPath: 'images/',
                        limit: 2048
                    }
                }
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {  // 对于sass文件内部引入的sass或者css也需要先走前面的postcss、sass-loader两个loader先处理
                            importLoaders: 2,
                            modules: true
                        }
                    },
                    'sass-loader',
                    'postcss-loader'
                ]
                    
            },
            {
                test: /\.(eot|ttf|svg)$/,
                use: {
                    loader: 'file-loader',
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: env === 'development' ? false : true
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].chunk.css'
        })
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {            //  
                defaultVendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10,
                    filename: 'vendors.js'
                }
            },
        },
        minimizer: [
            new CssMinimizerPlugin({
                test: /\.css$/,
            }),
        ],
    },
    // optimization: {
    //     splitChunks: {
    //       chunks: 'all',   // 不论同步引入模块，还是异步引入，都做代码分割  （异步加载路由页面）
    //       minSize: 20000,   //  只有引入大于20k的库才被代码分割
    //       minRemainingSize: 0,
    //       minChunks: 1,         // 只要有至少一个第三方模块引入，就可以做代码分割
    //       maxAsyncRequests: 5,     // 打包前五个第三方库，会做代码分割，都打包进vendor，后面的就不会了这么做了(因为并行加载有上线)
    //       maxInitialRequests: 3,   // 入口文件如果引入6个js，只对前三个做代码分割
    //       enforceSizeThreshold: 50000,
    //       cacheGroups: {            //  
    //         defaultVendors: {
    //           test: /[\\/]node_modules[\\/]/,
    //           priority: -10,            // 优先级，放在node_module第三方库的优先级很高，会被打包进vendor.js
    //           reuseExistingChunk: true,
    //           filename: 'vendor.js'
    //         },
    //         default: {
    //           minChunks: 2,         // 只有引入至少两个自己的业务模块，才会被打包进
    //           priority: -20,
    //           reuseExistingChunk: true,
    //           filename: 'common.js'     //
    //         }
    //       }
    //     }
    //   }
}

