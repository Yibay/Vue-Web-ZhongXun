<template>
  <div class="m-page-box">
    <div class="content-box f-ofy-auto">
      <div class="content">
        <h3>{{title}}</h3>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'page-box',
    props: ['title']
  }
</script>

<style scoped>
  .m-page-box{padding: 60px 0;box-sizing: border-box;background: #d9d9d9;text-align: left;}
  .m-page-box > .content-box{height: 100%;box-sizing: border-box;background: #fff;}
  .m-page-box > .content-box > .content{margin:0 auto;width: 900px;}
  .m-page-box > .content-box h3{padding: 50px 50px 0;border-bottom: 2px dotted #d9d9d9;font-size: 25px;font-weight: 500;line-height: 1.8em;}
</style>
