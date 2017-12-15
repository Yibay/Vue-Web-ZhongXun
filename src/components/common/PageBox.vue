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

<style lang="scss" scoped>
  .m-page-box{
    padding: 60px 0;box-sizing: border-box;background: #d9d9d9;text-align: left;

    & > .content-box{
      height: 100%;box-sizing: border-box;background: #fff;

      & > .content{margin:0 auto;width: 900px;}
      h3{padding: 50px 50px 0;border-bottom: 2px dotted #d9d9d9;font-size: 25px;font-weight: 500;line-height: 1.8em;}
    }
  }
</style>
