<template>
  <PageBox v-bind:title="title">
    <div class="m-lightbox f-cb">
      <lightbox :thumbnail="img.product1" :images="[img.product1, img.product2, img.product3, img.product4, img.product5, img.product6]" class="thumbnail"></lightbox>
      <lightbox :thumbnail="img.product2" :images="[img.product2, img.product3, img.product4, img.product5, img.product6, img.product1]" class="thumbnail"></lightbox>
      <lightbox :thumbnail="img.product3" :images="[img.product3, img.product4, img.product5, img.product6, img.product1, img.product2]" class="thumbnail"></lightbox>
      <lightbox :thumbnail="img.product4" :images="[img.product4, img.product5, img.product6, img.product1, img.product2, img.product3]" class="thumbnail"></lightbox>
      <lightbox :thumbnail="img.product5" :images="[img.product5, img.product6, img.product1, img.product2, img.product3, img.product4]" class="thumbnail"></lightbox>
      <lightbox :thumbnail="img.product6" :images="[img.product6, img.product1, img.product2, img.product3, img.product4, img.product5]" class="thumbnail"></lightbox>
    </div>
  </PageBox>
</template>

<script>
  // 页面组件
  import PageBox from '../common/PageBox'

  // 引入图片
  import product1 from '../../assets/img/product/product-1.png'
  import product2 from '../../assets/img/product/product-2.png'
  import product3 from '../../assets/img/product/product-3.png'
  import product4 from '../../assets/img/product/product-4.png'
  import product5 from '../../assets/img/product/product-5.png'
  import product6 from '../../assets/img/product/product-6.png'

  export default {
    name: 'product',
    data () {
      return {
        title: '回收产品',
        img: { product1, product2, product3, product4, product5, product6 }
      }
    },
    components: { PageBox }
  }
</script>

<style lang="scss">
  .m-lightbox{
    margin-left: -40px;padding: 30px 50px 0;

    .thumbnail{float: left;padding-left: 40px;padding-bottom: 50px;width: (100% / 3);box-sizing: border-box;}
    .lightbox{
      padding: 100px;box-sizing: border-box;

      .lightbox__element{
        max-width: 100%;max-height: 100%;width: 45vw;box-sizing: border-box;

        .lightbox__image img{display: block;margin: 0 auto;max-width: 100%;max-height: 100%;width: 45vw;height: auto;user-select:none;}
      }
    }
  }
</style>
