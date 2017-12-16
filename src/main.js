// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

// 引入第3方组件 vue-amap
import VueAMap from 'vue-amap'
// 引入第3方组件 vue-pure-lightbox
import Lightbox from 'vue-pure-lightbox'

// 项目根组件、路由配置
import App from './App'
import router from './router'

Vue.use(VueAMap) // 注册 VueAMap内组件 为 全局组件（即：node_modules/vue-amap/src/lib/components内，全部组件）
// 初始化vue-amap
VueAMap.initAMapApiLoader({
  // 高德的key
  key: '968690aa8d1338fdd224694532f9e7d7',
  // 插件集合
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
})

Vue.use(Lightbox) // 注册 Lightbox的组件 为全局组件 (即：<lightbox>)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
