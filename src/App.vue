<template>
  <div id="app">
    <!-- 头部导航 -->
    <Nav></Nav>
    <!-- 路由分页 -->
    <router-view></router-view>
  </div>
</template>

<script>
  // 入口根组件

  import Nav from './components/customized/Nav'

  export default {
    name: 'app',
    components: { Nav }
  }
</script>

<style>
  /* reset */
  html,body{margin: 0;padding: 0;}
  a{text-decoration: none;color: #000;}

  /* common */
  .contain{margin: 0 auto;width: 1200px;}

  /* func */
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
</style>
