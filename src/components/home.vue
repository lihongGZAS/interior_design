<template>
  <div class="home-div">
      <!-- <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in lunboUrls" :key="item.id">
          
          <img :src="item.url" alt="">
        </el-carousel-item>
      </el-carousel> -->
     
      <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1">
              <img class="swiper-container-img" :src="lunboUrls[0].url" alt="">
            </div>
            <div class="swiper-slide slide2">
              <img class="swiper-container-img" :src="lunboUrls[1].url" alt="">
            </div>
            <div class="swiper-slide slide3">
              <img class="swiper-container-img" :src="lunboUrls[2].url" alt="">
            </div>
            <div class="swiper-slide slide4">
              <img class="swiper-container-img" :src="lunboUrls[3].url" alt="">
            </div>
            <div class="swiper-slide slide5">
              <img class="swiper-container-img" :src="lunboUrls[4].url" alt="">
            </div>
        </div>
        <div class="pagination"></div>
        <div class="cover"></div>
    
        <div class="home-events">
            <div class="home-events-box" style="min-height:30px;">
                <div class="home-events-box-wrapper" style="min-height:30px;">
                    <div class="home-events-box-item">
                        <a href="#" target="_blank">
                            <i>
                                <img src="../assets/images/events-icon6.png" alt="免费体验专区">
                                <img src="../assets/images/events-icon6-active.png" alt="免费体验专区">
                            </i>
                            <h2>预约尺寸</h2>
                            <p class="js-title" title="">预约尺寸111</p>
                        </a>
                    </div>
    
                    <div class="home-events-box-item">
                        <a href="#" target="_blank">
                            <i>
                                <img src="../assets/images/events-icon1.png" alt="特惠专区">
                                <img src="../assets/images/events-icon1-active.png" alt="特惠专区">
                            </i>
                            <h2>上门测量</h2>
                            <p class="js-title" title="">上门测量111</p>
                        </a>
                    </div>
    
                    <div class="home-events-box-item">
                        <a href="#" target="_blank">
                            <i>
                                <img src="../assets/images/events-icon2.png" alt="严选商城">
                                <img src="../assets/images/events-icon2-active.png" alt="严选商城">
                            </i>
                            <h2>专业设计</h2>
                            <p class="js-title" title="">专业设计111</p>
                        </a>
                    </div>
    
                    <div class="home-events-box-item">
                        <a href="#" target="_blank">
                            <i>
                                <img src="../assets/images/events-icon9.png" alt="5分钟快速入门">
                                <img src="../assets/images/events-icon9-active.png" alt="5分钟快速入门">
                            </i>
                            <h2>配送安装</h2>
                            <p class="js-title" title="">配送安装111</p>
                        </a>
                    </div>
                    <div class="home-events-box-item">
                        <a href="#" target="_blank">
                            <i>
                                <img src="../assets/images/events-icon9.png" alt="5分钟快速入门">
                                <img src="../assets/images/events-icon9-active.png" alt="5分钟快速入门">
                            </i>
                            <h2>售后无忧</h2>
                            <p class="js-title" title="">售后无忧111</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="home-container">
      <div class="home-container-list">
        <div class="container-title">
          <span>—— 企业介绍 ——</span><br>
          <span>英文</span>
        </div>
        <div class="container-content">

        </div>
      </div>
    </div>
  </div>
</template>


<script>
// import Swiper from "../assets/js/swiper.min.js";

export default {
  name: "home",
  data() {
    return {
      lunboUrls: [
        { url: "../../static/1.jpg", id: 1 },
        { url: "../../static/2.jpg", id: 2 },
        { url: "../../static/3.jpg", id: 3 },
        { url: "../../static/4.jpg", id: 4 },
        { url: "../../static/5.jpg", id: 5 }
      ],
      test1: '../../static/1.jpg'
    };
  },
  mounted: function() {
      var mySwiper = new Swiper(".swiper-container", {
      pagination: ".pagination",
      paginationClickable: true,
      // autoplay: 5000,
      speed: 1,
      loop: true,

      onInit: function(swiper) {
        swiperAnimateCache(swiper); //隐藏动画元素
        swiperAnimate(swiper); //初始化完成开始动画
      },
      onSlideChangeEnd: function(swiper) {
        swiperAnimate(swiper); //每个slide切换结束时也运行当前slide动画
      }
    });
  }
 };
</script>

<style>
/* @import '/static/css/swiper.css';
@import '/static/css/animate.min.css';
@import '/static/css/style.css'; */
.swiper-container {
  margin-top: -1px;
}
.swiper-slide {
  opacity: 1;
  overflow: hidden;
}
.swiper-container-img {
  width: 100%;
  height: 500px;
}
.swiper-box {
  width: 100%;
  height: 520px;
}
.el-carousel__item img {
  width: 100%;
  height: 100%;
  opacity: 0.75;
  margin: 0;
}
.home-events-box-item {
  width: 20%;
}
.container-title {
  height: 200px;
  line-height: 200px;
}
</style>

