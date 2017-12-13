<template>
  <div class="m-home contain">
    <div class="home-logo-box">
      <img src="../../assets/img/home/home-logo.jpg" />
      <h2 class="title">浙江中循再生资源处置利用有限公司</h2>
      <h3 class="subtitle">提供线路板以及含线路板等电子废物的处置回收服务</h3>
    </div>
    <ul class="section-box">
      <!-- 3列等宽 布局：循环 -->
      <li v-for="item in sections">
        <router-link :to="{name: 'rootPath', params: {id: item.to_link}}">
          <Sections v-bind:sections_data="item">
            <!-- 定制化 内嵌组件 -->
            <SectionAboutUs v-if="item.content === 'SectionAboutUs'" ></SectionAboutUs>
            <SectionProducts v-if="item.content === 'SectionProducts'" ></SectionProducts>
            <SectionContactUs v-if="item.content === 'SectionContactUs'" ></SectionContactUs>
          </Sections>
        </router-link>
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
          {title: 'ABOUT US', title_sub: '公司介绍', content: 'SectionAboutUs', to_link: 'intro'},
          {title: 'Recycled products', title_sub: '回收产品', content: 'SectionProducts', to_link: 'product'},
          {title: 'CONTACT US', title_sub: '联系我们', content: 'SectionContactUs', to_link: 'contact'}
        ]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /* banner图 */
  .m-home .home-logo-box{position: relative;width: 100%;}
  .m-home .home-logo-box img{width: 100%;}
  .m-home .home-logo-box .title{position: absolute;top: 15%;right: 1%;margin: 0;font-size: 61px;color: rgb(250, 250, 250);font-family: "GJJCQJW GB1 0", "微软雅黑 Regular", "Microsoft YaHei", Helvetica, sans-serif;}
  .m-home .home-logo-box .subtitle{position: absolute;top: 39%;right: 16%;margin: 0;font-size: 31px;color: rgb(218, 218, 218);;}
  /* 3个Section模块 */
  .m-home .section-box{display: flex;margin-top: 30px;padding: 0;list-style-type: none;}
  .m-home .section-box > li{flex: 1;display: inline-block;margin: 0 10px;}
  .m-home .section-box > li + li{margin-left: 100px;}
</style>
