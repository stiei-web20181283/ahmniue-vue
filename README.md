# ahmniue

> 前端商城页面

[![gitee](https://gitee.com/zhong96/shop/badge/star.svg?label=Gitee)](https://gitee.com/stiei-web20182183/ahmniue-vue.git)

## 前言

该项目为商城系统的前端部分

## 项目介绍

`ahmniue` 商城前端页面
### 项目演示

项目在线演示地址：[ahmniue](https://shop.lexcubia.com)  

### 技术选型

技术 | 说明 | 官网
----|----|----
Vue | 前端框架 | [https://vuejs.org/](https://vuejs.org/)
Vue-router | 路由框架 | [https://router.vuejs.org/](https://router.vuejs.org/)
Vuex | 全局状态管理框架 | [https://vuex.vuejs.org/](https://vuex.vuejs.org/)
Vant | 前端UI框架 | [https://vant-contrib.gitee.io/vant/](https://vant-contrib.gitee.io/vant/)
<!-- Element-UI | 前端UI框架 | [https://element.eleme.io/](https://element.eleme.io/) -->
<!-- Js-cookie | cookie管理工具 | [https://github.com/js-cookie/js-cookie](https://github.com/js-cookie/js-cookie) -->
vue-element-admin | 项目脚手架参考 | [https://github.com/PanJiaChen/vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

### 项目布局

``` lua
src -- 源码目录
├── api -- axios网络请求定义
├── assets -- 静态图片资源文件
├── components -- 通用组件封装
    ├── layout -- 通用页面加载框架
    └── search -- 搜索组件
├── router -- vue-router路由配置
├── store -- vuex的状态管理
├── styles -- 全局css样式
├── utils -- 工具类
└── views -- 前端页面
    ├── homePage -- 首页
    ├── login -- 登录页
    ├── productPage -- 分类页面
    ├── recommendPage -- 推荐页面
    ├── userPage -- 个人中心
    └── cartPage -- 购物车
```

## 搭建步骤
- 下载node并安装：[https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi](https://nodejs.org/dist/v12.14.0/node-v12.14.0-x64.msi)

``` bash
- git clone https://github.com/stiei-web20181283/web-shop.git
- cd web-shop
- npm install
- npm run dev
- npm run build
- npm run build --report

```