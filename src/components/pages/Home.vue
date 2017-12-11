<template>
  <div class="m-home contain">
    <div class="home-logo-box">
      <img src="../../assets/home/home-logo.jpg" />
    </div>
    <ul>
      <li v-for="item in sections"><Sections v-bind:sections_data="item"></Sections></li>
    </ul>
  </div>
</template>

<script>
import Sections from '../common/Sections'

export default {
  name: 'home',
  components: { Sections },
  data () {
    return {
      sections: [
        {title: 'ABOUT US', title_sub: '公司介绍'},
        {title: 'Recycled products', title_sub: '回收产品'},
        {title: 'CONTACT US', title_sub: '联系我们'}
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home-logo-box{width: 100%;}
.home-logo-box img{width: 100%;}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
