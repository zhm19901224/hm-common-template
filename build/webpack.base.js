const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const env = process.env.NODE_ENV;
const isDev = () => env === 'development';
const theme = require('../them.config.js');
console.log(theme);

require.resolve('react/jsx-runtime'); // 利用react17新特性，functional component无需引入react

const babelLoaderOptions = isDev()
  ? {
      plugins: ['react-refresh/babel'],
      compact: true,
      cacheDirectory: true,
      cacheCompression: false,
    }
  : {
      compact: false,
      cacheDirectory: true,
      cacheCompression: false,
    };

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    mainFiles: ['index'], // 导入文件夹，会先查找文件下面的index.ts
    alias: {
      // 别名
      assets: path.resolve(__dirname, '../src/assets'),
      pages: path.resolve(__dirname, '../src/pages'),
      api: path.resolve(__dirname, '../src/api'),
      images: path.resolve(__dirname, '../assets/images'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
  entry: {
    main: './src/index.tsx',
  },
  output: {
    publicPath: '/',
    filename: '[name].[contenthash].js',
    chunkFilename: '[name].[contenthash].chunk.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    strictExportPresence: true, // export导出缺失，会报error，而不是warning
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: require.resolve('babel-loader'),
            options: babelLoaderOptions,
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name]_[hash].[ext]', // placeholder占位符
            outputPath: 'images/',
            limit: 2048,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:5]',
              },
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.(scss|sass)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              // 对于sass文件内部引入的sass或者css也需要先走前面的postcss、sass-loader两个loader先处理
              importLoaders: 2,
              modules: {
                localIdentName: '[name]-[local]-[hash:base64:5]',
              },
            },
          },
          'sass-loader',
          'postcss-loader',
        ],
      },

      {
        test: /\.less$/,
        include: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                modifyVars: theme,
                javascriptEnabled: true,
              },
            },
          },
        ],
      },

      {
        test: /\.(eot|ttf|svg)$/,
        use: {
          loader: 'file-loader',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      minify: !isDev(),
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].chunk.css',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          filename: 'vendors.js',
        },
      },
    },
    minimizer: [
      new CssMinimizerPlugin({
        test: /\.css$/,
      }),
    ],
  },
};
