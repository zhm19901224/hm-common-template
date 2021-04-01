#### 简介

1. 内置 react、react-router、redux、react-redux
2. 样式文件可以使用 sass、less、stylus，默认开启 leCSS module
3. 在 src/utils/server.js 中通过 axios 封装通用请求方法，通过 devServer proxy 实现跨域代理
4. 在 mock.config.js 中定义 mock 请求数据信息，基于 devServer express before 拦截 api，无需 mockjs
5. devServer historyApiFallback 处理了 SPA browserRouter 的问题
6. 自带 eslint
7. 用 thread-loader 多进程打包，加快打包速度
8. 支持 dll 打包

#### 目录结构

build ————————————————— webpack 工程化文件

    webpack.base.js ——— 开发环境、生产环境公用配置文件

    webpack.dev.js ———— 开发环境独有配置

    webpack.prod.js ——— 生产环境配置

dist —————————————————— 打包文件生成的目录

dll ——————————————————— dllplugin 库文件缓存配置

src
components ———————— 多页面共有组件放其内部

    pages ————————————— 页面级别类组件

    redux ————————————— store原数据巴拉巴拉

    utils ————————————— 工具类文件

mock.config.js ———————— 根据调用的接口配置 mock 数据

proxy.config.js ——————— 配置接口代理到的域名，开发时通常都是多个系统接口调用，可以处理跨域

assets ———————————————— 雪碧图、字体图标等静态文件放里面

    images ———————————— 图片类文件统一放里面

#### 启动

要求 npm version > 12

> 命令：npm i 或 yarn
> npm run build:dll 第一次启动先执行此命令，打包出 dll 的库文件缓存，之后在 dev 环境下打包会非常快
> npm run dev 开发环境启动
> npm run build 生产环境打包

#### 不同环境配置 分区打包

> 内置 cross-env 如果还需通过不同环境，如 qa 环境，区分域名，先在 pachange.json script 里配置环境变量，再通过 webpack.dev.js 里用 process.env.NODE_ENV 进行区分配置

#### 用到的第三方库

react、react-dom、react-router、react-router-dom、
lodash、axios、mobx、mobx-react、typescript

#### toDo

1. 添加 react-dev-tools 官方的插件，增强对 yarn 配置优化

#### 本次修改

1. 添加装饰器配置
2. 添加 mobx 状态管理，为兼容装饰器，将 corejs 降级 npm i -S core-js@2.6.10
3. react、react-dom、react-router、react-router-dom 对应的 ts 类型定义文件
4. 添加 react-hot-loader，对 HMR 的优化
5. 应用 react17 新特性，采用 FC 写组件无需引入 React，在 webpack 中自动注入 Js-runtime
6. 修复 js 生产环境压缩问题
7. 采用 react-refresh react 的模块热更新
8. babel-loader 调优，仅用缓存压缩、开启目录扫描缓存
9. 加强对导出缺失的管控，直接报错，不会有 warning
10. 更新 babel 的预设为@babel/preset-typescript
