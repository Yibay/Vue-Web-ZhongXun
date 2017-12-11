<template>
  <div class="m-section">
    <div class="header">
      <h5>{{sections_data.title}}<small>{{sections_data.title_sub}}</small></h5>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sections',
    props: ['sections_data']
  }
</script>

<style scoped>
  .m-section{}
</style>
