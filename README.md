## 解决问题
- 【手机端首屏渲染问题】
- 【SEO解决搜索引擎抓取问题】
- 【提高页面渲染性能】

## 项目结构

````bash
├── README.md
├── build
│   ├── setup-dev-server.js
│   ├── vue-loader.config.js
│   ├── webpack.base.config.js
│   ├── webpack.client.config.js
│   └── webpack.server.config.js
├── package.json
├── config
├── server.js
└── src
    ├── App.vue
    ├── app.js
    ├── assets
    │   ├── img
    │   └── less  
    ├── components
    ├── entry-client.js
    ├── entry-server.js
    ├── index.template.html
    ├── 404.template.html
    ├── 500.template.html
    ├── util
    ├── router
    ├── store
    │   ├── actions.js
    │   ├── getters.js
    │   ├── index.js
    │   ├── mutationtypes.js
    │   └── state.js
    └── views
        
````

#### 目录说明

- build 存放构建用的配置文件
- config 存放整个项目的配置文件
- api 存放接口管理文件
- assets 存放静态资源，包括图片、样式
- components 存放公共组件
- router 存放路由配置文件
- views 存放页面模块文件
- store 存放状态管理文件
- util 存放工具类文件
- app.js 是项目入口文件
- App.vue 是项目入口文件
- entry-client和entry-server分别是客户端入口文件和服务端的入口文件
- index.template.html 项目模版
- 404.template.html 页面404模版
- 500.template.html 页面500模版
- server.js 服务端启动服务的入口文件


## 运行 Demo 示例项目

进入项目 执行以下命令

```bash
// 安装 NPM 包
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
