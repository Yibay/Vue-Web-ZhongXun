<template>
  <div class="m-home contain">
    <div class="home-logo-box">
      <img src="../../assets/home/home-logo.jpg" />
    </div>
    <ul class="section-box">
      <!-- 3列等宽 布局：循环 -->
      <li v-for="item in sections">
        <Sections v-bind:sections_data="item">
          <!-- 定制化 内嵌组件 -->
          <SectionAboutUs v-if="item.content === 'SectionAboutUs'" ></SectionAboutUs>
          <SectionProducts v-if="item.content === 'SectionProducts'" ></SectionProducts>
          <SectionContactUs v-if="item.content === 'SectionContactUs'" ></SectionContactUs>
        </Sections>
      </li>
    </ul>
  </div>
</template>

<script>
  // 页面组件（首页）

  import Sections from '../common/Sections'
  import SectionAboutUs from '../customized/SectionAboutUs'
  import SectionProducts from '../customized/SectionProducts'
  import SectionContactUs from '../customized/SectionContactUs'

  export default {
    name: 'home',
    components: { Sections, SectionAboutUs, SectionProducts, SectionContactUs },
    data () {
      return {
        sections: [
          {title: 'ABOUT US', title_sub: '公司介绍', content: 'SectionAboutUs'},
          {title: 'Recycled products', title_sub: '回收产品', content: 'SectionProducts'},
          {title: 'CONTACT US', title_sub: '联系我们', content: 'SectionContactUs'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* banner图 */
  .m-home .home-logo-box{width: 100%;}
  .m-home .home-logo-box img{width: 100%;}
  /* 3个Section模块 */
  .m-home .section-box{display: flex;padding: 0;list-style-type: none;}
  .m-home .section-box li{flex: 1;display: inline-block;margin: 0 10px;}
</style>
