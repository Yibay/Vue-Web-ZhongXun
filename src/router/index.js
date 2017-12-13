import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Intro from '../components/pages/Intro'
import Product from '../components/pages/Product'
import Contact from '../components/pages/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'  // 首页 重定向，便于 :id 获取 $route.params.id
    },
    {
      path: '/:id',
      name: 'rootPath', // 路由的名称，如：<router-link :to="{name: 'rootPath', params: {id: item.z_active}}">
      components: { // 绑定route的组件内 及 子组件内，可通过 this.$route.params.id 获取path 参数:id
        index: Home,  // 匹配上，路径后，根据 name 决定 显示哪个组件，如：<router-view name="product">
        intro: Intro,
        product: Product,
        contact: Contact
      }
    }
  ]
})
