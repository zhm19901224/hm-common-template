#### 简介
1. 内置react、react-router、redux、react-redux
2. 样式文件可以使用sass、less、stylus，默认开启leCSS module
3. 在src/utils/server.js中通过axios封装通用请求方法，通过devServer proxy实现跨域代理
4. 在mock.config.js中定义mock请求数据信息，基于devServer express before拦截api，无需mockjs
5. devServer historyApiFallback处理了SPA browserRouter的问题
6. 自带eslint
7. 用thread-loader多进程打包，加快打包速度

#### 目录结构

build ————————————————— webpack工程化文件  

    webpack.base.js ——— 开发环境、生产环境公用配置文件
    
    webpack.dev.js ———— 开发环境独有配置  
    
    webpack.prod.js ——— 生产环境配置
    
dist —————————————————— 打包文件生成的目录  

dll ——————————————————— dllplugin库文件缓存配置  

src
    components ———————— 多页面共有组件放其内部  
    
    pages ————————————— 页面级别类组件  
    
    redux ————————————— store原数据巴拉巴拉  
    
    utils ————————————— 工具类文件  
    
mock.config.js ———————— 根据调用的接口配置mock数据  

proxy.config.js ——————— 配置接口代理到的域名，开发时通常都是多个系统接口调用，可以处理跨域  

assets ———————————————— 雪碧图、字体图标等静态文件放里面  

    images ———————————— 图片类文件统一放里面

#### 启动
要求npm version > 12
> 命令：npm i 或 yarn
> npm run dev 开发环境启动
> npm run build 生产环境打包


#### 不同环境配置
> 内置cross-env 如果还需通过不同环境，如qa环境，区分域名，先在pachange.json script里配置环境变量，再通过webpack.dev.js 里用process.env.NODE_ENV进行区分配置


#### TODO
> vue3.0支持，precommit、preview等功能，和cli脚手架工具进行关联。。。。
