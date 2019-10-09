# vue-template-cli2.x

> A Vue.js project create by vue-cli 2.x

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

根据会议讨论出的结果，以自己的理解整理出的基础模版，大家看完后，如果有需要改进的地方麻烦提出，个人还没升级vue-cli 3.x，先整理出2.x的模版；升级后再添加多一个cli3.x的模版提供选择

### src文件下目录
```
├── src
│   ├── api // 接口模块化管理
|   |   ├── user // 用户
|   |   |   ├── detail.js // 用户详情页接口
|   |   |   └── index.js  // 统一导出detail、list页面的接口
|   |   |   └── list.js   // 列表页接口
|   |   |── base.js   // 接口基础路径
|   |   |── http.js   // axios拦截器
|   |   |── index.js  // 统一导出所有接口
|   |   └── login.js  // 登录页接口
|   ├── assets
|   |   ├── css
|   |   |── images
|   |   └── js
|   ├── components    // 存放组件
|   ├── router
|   |   └── index.js  // 路由，用路由全局前置守卫router.beforeEach做角色控制
|   ├── store                  // store模块化管理
|   |   ├── index.js           // 汇总各个模块store导出
|   |   |── login-store.js     // 登录模块store
|   |   └── userInfo-store.js  // 用户信息模块store
│   ├── views
|   |   ├── user            // 用户文件夹
|   |   |   ├── detail.vue  // 用户详情
|   |   |   └── list.vue    // 用户列表
|   |   |── error.vue
|   |   └── login.vue
│   └── App.vue
│   └── main.js
│── package.json

```
这个模版主要是做以下几点：
- 路由：提醒注意项目是否需要做角色控制
- axios拦截器
- api模块化管理
- store模块化管理
- views中的vue文件分模块
- eslint暂时使用默认规则

