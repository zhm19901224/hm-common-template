### shein 中台基础库

> 主要技术栈，React 17、mobx、antd

#### 安装

> 要求 npm version > 12

```
npm install
或
yarn
```

> 打开浏览器 localhost:9000

#### 启动

```
// 第一次启动先执行此命令，打包出 dll 的库文件缓存，之后在 dev 环境下打包会非常快
npm run build:dll

// 开发环境启动
npm run dev

// 生产环境打包
npm run build

```

#### 目录结构

build ————————————————— webpack 工程化文件

    webpack.base.js ——— 开发环境、生产环境公用配置文件

    webpack.dev.js ———— 开发环境独有配置

    webpack.prod.js ——— 生产环境配置

dist —————————————————— 打包文件生成的目录

dll ——————————————————— dllplugin 库文件缓存配置

src
components ———————— 多页面共有组件、页面骨架组件

    pages ————————————— 页面级别类组件

    utils ————————————— 工具类文件

    withHoc ——————————— 高阶组件

    store ————————————— mobx store

    assets ———————————— 雪碧图、字体图标等静态文件放里面

        images ———————— 图片类文件统一放里面

mock.config.js ———————— 根据调用的接口配置 mock 数据

proxy.config.js ——————— 配置接口代理到的域名，开发时通常都是多个系统接口调用，可以处理跨域

theme.config.js ——————— 用于定制 antd 的主题颜色

.babelrc —————————————— 用于配置 babel 不区分环境的预设、插件

#### 不同环境配置 分区打包

> 内置 cross-env 如果还需通过不同环境，如 qa 环境，区分域名，先在 pachange.json script 里配置环境变量，再通过 webpack.dev.js 里用 process.env.NODE_ENV 进行区分配置

#### 用到的第三方库

react、react-dom、react-router、react-router-dom、
lodash、axios、mobx、mobx-react、typescript

#### 页面骨架组件说明

1. src/components/Container 内部对 mobx、reactRouter 进行了封装。其使用类似 slot 插槽
2. src/components/TopBar 页面顶部区域
3. src/components/Main 页面主题区域，内部包装了 router 的 Switch。路由变换的页面为此组件内部的内容
4. src/components/SideBar 侧边栏导航菜单

#### 本次修改 version 1.2.0

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
11. 引入 antd4.15.0，配置 babel-plugin-import，实现 antd css 按需加载

#### 规则约定

1. 只有页面组件可以使用 class component，子组件尽量使用 FC，配合 hooks
2. FC 使用 mobx 时，action、observer 要写成 hoc 的形式
3. 一定要对各个子组件做 shouldComponent、useMemo 属性更新判断！
4. mobx 使用姿势
   > 在每个页面组件文件夹下，新建 store，在其内部新建 action.tsx、state.tsx。
   > 在 constant/mobxConstant.tsx 下声明页面 state、action 的命名空间常量
   > 在 src/store/index.ts 中引入上面内容并注册进 store
   > 使用时，引入 src/withHoc/withStore.tsx, 将其以装饰器形式注入组件(放最上面)。
   > 通过 this.props.dispatch 调用 action、this.props.getState 获取某命名空间下的 state

#### toDo

1. 添加 react-dev-tools 官方的插件，增强对 yarn 配置优化
