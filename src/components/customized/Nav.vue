<template>
  <div class="g-header contain f-cb">
    <img class="logo" src="../../assets/zx-logo.png" />
    <Tabs v-bind:tabs_data="tabs_data" v-bind:tabs_selected="tabs_selected" class="f-fr"></Tabs>
  </div>
</template>

<script>
  // 定制化组件

  import Tabs from '../common/Tabs'

  export default {
    name: 'nav',
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
        return this.$route.params.id  // 切换页面时，重新计算 路由的id 参数 // 绑定route的组件内 及 子组件内，可通过 this.$route.params.id 获取path 参数:id
      }
    }
  }
</script>

<style scoped>
  .g-header{position: relative;}
  .g-header .logo{position: absolute;left: 114px;top: 0;width: 124px;}
</style>
