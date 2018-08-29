<template>
  <div class="customization-div">
    <div class="advertise-img">
      <img src="" alt="全屋定制宣传图片1920*300">
    </div>
    <div class="series-desc">
      <div class="series-lists">
        <div class="series-span-special"></div>
        <span>系列一</span>
        <span>系列二</span>
        <span>系列三</span>
        <span>系列四</span>
        <div class="series-span-special"></div>
      </div>
    </div>
    <div class="series-one-desc">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1" v-for="item in seriesOne" :key="item.id">
            <img class="swiper-container-img" :src="item.url" alt="">
          </div>
        </div>
        <div class="pagination custom-pagination"></div>
      </div>
    </div>
    <div class="hallway-div">
      <div class="hallway-desc">
        <h2>玄关</h2>
        <span>hallway</span>
        <p>{{hallway_introduce}}</p>
      </div>
      <div class="hallway-img">
        <img :src="hallway_img" alt="系列样式图片">
      </div>
      <div class="hallway-change-icon">
        <div>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
        <span>同系列多个定制柜左右切换</span>
      </div>
      <div class="detail-explain">
        <div class="detail-explain-img">
          <img :src="series_two_detail" alt="系列细节图片">
        </div>
          <span>细节说明</span>
      </div>
    </div>
    <div class="series-two-desc">
      <div class="swiper-container2">
        <div class="swiper-wrapper">
          <div class="swiper-slide slide1" v-for="item in seriesTwo" :key="item.id">
            <img class="swiper-container-img" :src="item.url" alt="">
          </div>
        </div>
        <div class="pagination2 custom-pagination"></div>
      </div>
    </div>
    <div class="hallway-div">
      <div class="hallway-desc">
        <h2>玄关</h2>
        <span>hallway</span>
        <p>{{hallway_introduce}}</p>
      </div>
      <div class="hallway-img">
        <img :src="hallway_img" alt="系列样式图片">
      </div>
      <div class="hallway-change-icon">
        <div>
          <i class="el-icon-arrow-left"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
        <span>同系列多个定制柜左右切换</span>
      </div>
      <div class="detail-explain">
        <div class="detail-explain-img">
          <img :src="series_two_detail" alt="系列细节图片">
        </div>
        <span>细节说明</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'customization',
  data() {
    return {
      hallway_img: '../../static/1.jpg',
      series_two_detail: '../../static/1.jpg',
      hallway_introduce: '玄关介绍,玄关介绍。玄关介绍,玄关介绍。玄关介绍,玄关介绍。玄关介绍,玄关介绍。',
      seriesOne: [
        { url: "../../static/1.jpg", id: 1 },
        { url: "../../static/2.jpg", id: 2 },
        { url: "../../static/3.jpg", id: 3 },
        { url: "../../static/4.jpg", id: 4 },
        { url: "../../static/5.jpg", id: 5 }
      ],
      seriesTwo: [
        { url: "../../static/1.jpg", id: 1 },
        { url: "../../static/2.jpg", id: 2 },
        { url: "../../static/3.jpg", id: 3 },
        { url: "../../static/4.jpg", id: 4 },
        { url: "../../static/5.jpg", id: 5 }
      ],
    }
  },
  mounted: function() {
      // 轮播插件初始化
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

    // 全屋定制第二个轮播图初始化
    var mySwiper2 = new Swiper(".swiper-container2", {
      pagination: ".pagination2",
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
}
</script>

<style scoped>
  @import '../../static/css/customization.css'
</style>


