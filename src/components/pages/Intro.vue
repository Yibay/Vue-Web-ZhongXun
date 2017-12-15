<template>
  <PageBox v-bind:title="title">
    <div class="intro-describe">
      <p>浙江中循再生资源处置利用有限公司是一家经过政府定点立项，环保审批的专业危险废物回收利用公司。由浙江省环境保护厅颁发予《危险废物经营许可证》【浙危废经第178号】。总投资2000万，拥有年收集、贮存、利用5000吨废旧电子类产品生产线1条，其他机械拆解设备若干，员工15名，环境工程专业人员3名。</p>
      <p>经营范围：废旧线路板及含线路板的废旧电子电器（HW49类）。公司对废弃的电子类产品采用在密闭的标准厂房内通过国际先进设备实现机械拆离工艺，最终通过物理破碎，分离出金属粉和树脂粉，有效地实现了电子类废弃物的环保化、无污染、零排放再生利用处置。公司对产废企业需回收的废弃电子产品配备一条龙服务。由专人上门回收、运输，以及申请审批环保方面所有手续。</p>
      <p>近年来，公司规模日益壮大，已与多家大型企业建立长期稳定的回收关系。公司秉承安全严谨原则，以环境保护为首位，以客户利益为前提，诚信为业。是一家成熟规范的环保企业。</p>
    </div>
    <swiper :options="swiperOption" ref="mySwiper" class="m-swiper" >
      <!-- slides -->
      <swiper-slide><img class="slide-img" src="../../assets/img/intro/slide-img1.jpg" /></swiper-slide>
      <swiper-slide><img class="slide-img" src="../../assets/img/intro/slide-img2.jpg" /></swiper-slide>
      <swiper-slide><img class="slide-img" src="../../assets/img/intro/slide-img3.jpg" /></swiper-slide>
      <swiper-slide><img class="slide-img" src="../../assets/img/intro/slide-img4.jpg" /></swiper-slide>
      <!-- Optional controls -->
      <!-- Add Arrows -->
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </PageBox>
</template>

<script>
  // 引入 轮播组件
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'

  import PageBox from '../common/PageBox'

  // 页面组件
  export default {
    name: 'intro',
    components: { swiper, swiperSlide, PageBox },
    data () {
      return {
        title: '公司介绍',
        swiperOption: {
          slidesPerView: 3,
          spaceBetween: 40,
          autoplay: {  // 可选选项，自动滑动
            delay: 2500,
            disableOnInteraction: false
          },
          loop: true,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    computed: {
      // 便于后续 使用 this.swiper 操作 swiper实例
      swiper () {
        return this.$refs.mySwiper.swiper
      }
    }
  }
</script>

<style lang="scss" scoped>
  /* 文案介绍 */
  .intro-describe{
    padding: 20px 50px 0;

    p{text-indent: 2em;}
  }

  /* 轮播图样式 */
  .m-swiper{
    margin-top: 70px;padding: 0 50px;box-sizing: border-box;

    .slide-img{display: block;width: 100%;}
    .swiper-button-prev{position: absolute;left: 0;top: 0;margin-top: 0;width: 50px;height: 100%;background: url(../../assets/img/intro/arrow-prev.png) center/26px 26px no-repeat #fff;}
    .swiper-button-next{position: absolute;right: 0;top: 0;margin-top: 0;width: 50px;height: 100%;background: url(../../assets/img/intro/arrow-next.png) center/28px 26px no-repeat #fff;}
  }
</style>
