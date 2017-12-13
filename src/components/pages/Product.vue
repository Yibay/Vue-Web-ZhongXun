<template>
  <PageBox v-bind:title="title">
  </PageBox>
</template>

<script>
  // 页面组件
  import PageBox from '../common/PageBox'

  export default {
    name: 'product',
    data () {
      return {
        title: '回收产品'
      }
    },
    components: { PageBox }
  }
</script>

<style scoped>

</style>
