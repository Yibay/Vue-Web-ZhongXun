import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'  // 首页 重定向，便于 :id 获取 $route.params.id
    },
    {
      path: '/:id',
      name: 'Home',
      component: Home  // 绑定route的组件内 及 子组件内，可通过 this.$route.params.id 获取path 参数:id
    }
  ]
})
