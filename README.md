# vue-ssr node服务端渲染工作流

## 解决问题
- 【手机端首屏渲染问题】
- 【SEO解决搜索引擎抓取问题】
- 【提高页面渲染性能】

### 统一的文件系统结构

- 项目整体目录结构

````bash
├── LICENSE
├── README.md
├── build
│   ├── setup-dev-server.js
│   ├── vue-loader.config.js
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
├── log
│   ├── err.log
│   └── out.log
├── package.json
├── pmlog.json
├── server.js
└── src
    ├── App.vue
    ├── app.js
    ├── assets
    │   ├── images
    │   ├── style
    │   │   └── css.less
    │   └── views
    │       └── index.css
    ├── components
    │   ├── Banner.vue
    │   ├── BottomNav.vue
    │   ├── FloorOne.vue
    │   └── Header.vue
    ├── entry-client.js
    ├── entry-server.js
    ├── index.template.html
    ├── public
    │   ├── conf.js
    │   └── utils
    │       ├── api.js
    │       └── confUtils.js
    ├── router
    │   └── index.js
    ├── static
    │   ├── img
    │   │   └── favicon.ico
    │   └── js
    │       └── flexible.js
    ├── store
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   ├── modules
    │   │   └── Home.js
    │   ├── mutationtypes.js
    │   └── state.js
    └── views
        └── index
            ├── conf.js
            ├── index.vue
            ├── mock.js
            └── service.js  
        
````

### 统一的职责划分

- views文件夹下分模块文件，模块文件下下又分模块本身的.vue文件（模版文件），index.js文件（后台数据交互文件），mock.js（本模块的mock假数据），conf.js（配置本模块一些参数，请求路径，模块名称等信息）
- components 公共组件文件夹
- router 主要存放前端路由配置文件，写法规范按照vue-router官方例子即可。
- store 主要是存放共享状态文件，里面包含action.js,getter.js,mutationtype.js等，后期会根据模块再细分这些。
- public 主要存放公共组件代码和项目使用的公共文件代码，例如后期我们将axios封装成公共的api库文件等等
- static文件夹代表静态文件，不会被webpack打包的
- pmlog.json 集成了pm2监控命令
- app.js 是项目入口文件
- App.vue 是项目入口文件
- entry-client和entry-server分别是客户端入口文件和服务端的入口文件
- index.template.html是整个项目的模版文件
- server.js 服务端启动服务的入口文件


## 运行 Demo 示例项目

### 安装 NPM 包

- 进入项目 目录执行以下命令

```bash
npm install
```

```bash
// dev模式下启动服务
npm run dev
```

```bash
// 打包命令
npm run build
```
```bash
// production模式下启动服务
npm run start
```

npm run dev 启动服务路径http://localhost:8080
