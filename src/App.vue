<template>
  <div id="app">
    <!-- 头部 -->
    <div class="g-header contain f-cb">
      <img class="logo" src="./assets/zx-logo.png" />
      <Tabs v-bind:tabs_data="tabs_data" v-bind:tabs_selected="tabs_selected" class="f-fr"></Tabs>
    </div>
    <!-- 路由分页 -->
    <router-view></router-view>
  </div>
</template>

<script>
import Tabs from './components/common/Tabs'

export default {
  name: 'app',
  components: { Tabs },
  data () {  // data内的数据，初始化后，不会自动变化
    return {
      tabs_data: [
        {title: '首页', z_active: 'index'},
        {title: '公司介绍', z_active: 'intro'},
        {title: '回收产品', z_active: 'product'},
        {title: '联系我们', z_active: 'contact'}
      ]
    }
  },
  computed: {
    tabs_selected: function () {  // data内的数据，初始化后，不会自动变化；computed 内的属性会随着渲染 重新计算
      return this.$route.params.id  // 切换页面时，重新计算 路由的id 参数
    }
  }
}
</script>

<style>
/* reset */
html,body{margin: 0;padding: 0;}
a{text-decoration: none;color: #000;}

/* common */
.contain{margin: 0 auto;width: 1200px;}

/* 功能 */
.f-cb::before,.f-cb::after{display: table;content: '';clear: both;}
.f-fr{float: right;}
.f-fl{float: left;}

/* page */
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.g-header{position: relative;}
.g-header .logo{position: absolute;left: 110px;top: 0;width: 124px;}
</style>
