# eleme 仿写饿了么项目

## 使用技术

* 脚手架：webpack
* 前端语言：Es6
* 前端框架：Vue2.0
* UI框架：elememt
* 后端语言：NodeJs
* 后端框架：Express
* 数据库：MongoDB

## 命名规范

* 变量命名：小驼峰 userName
* 方法命名：小驼峰 getUserName
* 类命名：大驼峰 UserInfo
* 常量命名：大写+下划线 DEV_CONFIG
* 页面pages：大驼峰 Index.vue
* 组件components：小驼峰 header.vue

## 结构

### 开发环境

* 项目入口入口文件：build/dev-server.js
---
* 前端目录：src
* assets：图片文件
* components：公用组件
* pages：页面组件
* providers：公用服务
* router：路由
* 前端入口文件：src/main.js
---
* 静态资源：static
* css：公用样式
---
* 后端目录：serve
* 后端入口文件：index.js
* api.js：接口层

