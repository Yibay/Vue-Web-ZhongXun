<template>
  <div class="m-section">
    <div class="header">
      <h5>{{sections_data.title}}<small>{{sections_data.title_sub}}</small></h5>
    </div>
    <!-- 卡槽 -->
    <slot></slot>
    <div class="footer">
      <img src="../../assets/img/home/learn-more.png" />
    </div>
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

<style lang="scss" scoped>
  .m-section{
    text-align: left;

    .header{
      border-bottom: 4px solid #ababab;

      h5{margin: 0;line-height: 2em;font-size: 15px;color: #59b435;font-family: "MicrosoftYaHei", Helvetica, sans-serif;}
      small{margin-left: 5px;font-size: 12px;font-weight: 700;color: #4c4c4c;}
    }
    img{margin-left: 8px;width: 22%;}
  }
</style>
