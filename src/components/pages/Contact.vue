<template>
  <PageBox v-bind:title="title">
    <div class="m-contact f-cb">
      <div class="m-contact-msg f-fl">
        <p><span class="title f-fl">童经理:</span><span class="content f-oh">155-5802-0222</span></p>
        <p><span class="title f-fl">蒋先生:</span><span class="content f-oh">180-0661-0103</span></p>
        <p><span class="title f-fl">邮编:</span><span class="content f-oh">314200</span></p>
        <p><span class="title f-fl">地址:</span><span class="content f-oh">浙江省平湖市经济开发区兴工路2611号</span></p>
      </div>
      <Location></Location>
    </div>
  </PageBox>
</template>

<script>
  // 页面组件
  import PageBox from '../common/PageBox'
  import Location from '../customized/Location'

  export default {
    name: 'contact',
    components: { PageBox, Location },
    data () {
      return {
        title: '联系我们'
      }
    }
  }
</script>

<style scoped>
  .m-contact{padding: 50px 50px 0;}
  .m-contact .m-contact-msg{margin-right: 20px;max-width: 190px;}
  .m-contact .m-contact-msg p{font-size: 16px;font-weight: 500;line-height: 2em;}
  .m-contact .m-contact-msg .title{width: 4em;}
  .m-contact .m-contact-msg .content{display: block;overflow: hidden;}
</style>
