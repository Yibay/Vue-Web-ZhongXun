<template>
  <div id="app">
    <!-- 头部导航 -->
    <Navigation></Navigation>
    <!-- 路由分页，根据 route的path、route-view的name 决定渲染哪个组件 -->
    <router-view v-bind:name="route_selected" class="f-f1 f-ofya"></router-view>
  </div>
</template>

<script>
  // 入口根Navigation组件

  import Navigation from './components/customized/Navigation'

  export default {
    name: 'app',
    components: { Navigation },
    computed: {
      route_selected: function () {  // data内的数据，初始化后，不会自动变化；computed 内的属性会随着渲染 重新计算
        return this.$route.params.id || 'index'  // 切换页面时，重新计算 路由的id 参数 // 绑定route的组件内 及 子组件内，可通过 this.$route.params.id 获取path 参数:id
      }
    }
  }
</script>

<style>
  /* reset */
  html,body,#app{margin: 0;padding: 0;height: 100%;min-width: 1200px;}
  h1,h2,h3,h4,h5{margin: 0;}
  a{text-decoration: none;color: #000;}
  p{margin: 0;}

  /* common */
  .contain{margin: 0 auto;width: 1200px;}

  /* func */
  .f-cb::before,.f-cb::after{display: table;content: '';clear: both;}
  .f-fr{float: right;}
  .f-fl{float: left;}
  .f-f1{flex: 1;}
  .f-ofya{overflow-y: auto;}

  /* page */
  #app {display: flex;flex-flow: column;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
