<template>
  <div class="home-div">
    <div class="swiper-box">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in lunboUrls" :key="item.id">
          <img :src="item.url" alt="">
          <!-- <h3>{{item.id}}</h3> -->
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      lunboUrls:[
        {url: '../../static/1.jpg', id: 1},
        {url: '../../static/2.jpg', id: 2},
        {url: '../../static/3.jpg', id: 3},
        {url: '../../static/4.jpg', id: 4},
        {url: '../../static/5.jpg', id: 5}
      ]
    }
  }
}
</script>

<style>
  .swiper-box {
    width: 100%;
    height: 500px;
  }
  .el-carousel__container {
    height: 500px;
  }
  .el-carousel__item img {
    width: 100%;
    height: 100%;
    opacity: 0.75;
    margin: 0;
  }
</style>

