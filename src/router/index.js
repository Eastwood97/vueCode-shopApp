import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer.vue'
import MemberContainer from '../components/tabbar/MemberContainer.vue'
import ShopCarContainer from '../components/tabbar/ShopCarContainer.vue'
import SearchContainer from '../components/tabbar/SearchContainer.vue'


Vue.use(Router)

export default new Router({
  routes: [//配置路由规则
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: HomeContainer
    },
    {
      path: '/member',
      component: MemberContainer
    },
    {
      path: '/shopcar',
      component: ShopCarContainer
    },
    {
      path: '/search',
      component: SearchContainer
    }
  ],
  linkActiveClass:'mui-active'//覆盖默认的路由高亮的类
})
