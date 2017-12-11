<template>
  <div class="m-section">
    <div class="header">
      <h5>{{sections_data.title}}<small>{{sections_data.title_sub}}</small></h5>
    </div>
    <slot></slot>
  </div>
</template>

<script>
  // 通用组件

  export default {
    name: 'sections',
    /*
    * 传入参数 示例
    * sections_data:{
    *   title: 'ABOUT US',
    *   title_sub: '公司介绍'
    * }
    * */
    props: ['sections_data']
  }
</script>

<style scoped>
  .m-section{}
</style>
