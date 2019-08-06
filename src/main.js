// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//入口文件
import Vue from 'vue';
//1.1导入路由的包
import App from './App';

//1.1导入路由的包
import VueRouter from 'vue-router';
//1.2安装路由
Vue.use(VueRouter)
//1.3导入路由模块
import router from './router';

import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import { Header , Swipe, SwipeItem } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
import './assets/mui/css/icons-extra.css'
//导入mui样式
import './assets/mui/css/mui.min.css';


Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);

Vue.use(MintUI);
Vue.component(Header.name, Header);

Vue.config.productionTip = false

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//2.1导入vue-resource
import VueResource  from 'vue-resource'
//2.2安装vue-resource
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//1.4挂载路由对象到vm实例上
  components: { App },
  template: '<App/>'
})
