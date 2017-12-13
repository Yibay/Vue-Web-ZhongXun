<template>
  <ul class="m-tabs">
    <li v-for="item in tabs_data" class="f-fl" :class="[item.z_active === tabs_selected ? 'z-active' : '']">
      <router-link :to="{name: 'rootPath', params: {id: item.z_active}}">{{item.title}}</router-link>
    </li>
  </ul>
</template>

<script>
  // 通用组件

  export default {
    name: 'tabs',
    /*
    * props demo 示例
    * tabs_data: [
    *   {title: '首页', z_active: 'index'},
    *   {title: '公司介绍', z_active: 'intro'},
    *   {title: '回收产品', z_active: 'product'},
    *   {title: '联系我们', z_active: 'contact'}
    * ]
    * tabs_selected: 'index'
    * */
    props: ['tabs_data', 'tabs_selected']
  }
</script>

<style scoped>
  .m-tabs{margin: 3px 100px 0;padding: 0;list-style: none;}
  .m-tabs li{display: inline-block;position: relative;margin: 0 30px;width: 90px;overflow: hidden;font-size: 22px;line-height: 3em;}
  .m-tabs li.z-active::before{display: table;content: '';position: absolute;top: 0;left: 0;width: 100%;border-top: 5px solid #008922;}
  .m-tabs li.z-active::after{display: table;content: '';position: absolute;bottom: 0;left: 50%;transform: translate(-50%, 50%) rotate(45deg);width: 20px;height: 20px;background: #d9d9d9;}
</style>
