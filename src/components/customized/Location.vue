<template>
  <!-- el-amap 在main.js 中，已注册为全局组件 -->
  <el-amap ref="map" vid="amapDemo" :center="center" :zoom="zoom" :plugin="plugin" class="el-amap">
    <el-amap-marker :position="marker.position" :animation="marker.animation"></el-amap-marker>
    <el-amap-marker :position="markContent.position" :animation="markContent.animation" :content="markContent.content" :offset="markContent.offset"></el-amap-marker>
  </el-amap>
</template>

<script>

  // 定制化组件

  export default {
    name: 'location',
    data () {
      return {
        center: [120.995144, 30.755106],     // 地图中心
        zoom: 15,                            // 放大倍数
        plugin: ['ToolBar', 'Scale'],
        // 初始化标注点
        marker: {
          position: [120.995144, 30.755106],   // 标注点坐标
          animation: 'AMAP_ANIMATION_DROP'     // 标注点下落动画
        },
        // 初始化标注点 文字说明
        markContent: {
          position: [120.995144, 30.755106],    // 标注点坐标
          content: '浙江中循再生资源处置有限公司', // content取代icon
          offset: [-100, 2],      // 相对中心点偏移量
          animation: 'AMAP_ANIMATION_DROP'     // 标注点下落动画
        }
      }
    }
  }
</script>

<style scoped>
  .el-amap{height: 386px;}
</style>
