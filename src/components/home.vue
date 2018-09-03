<template>
  <div class="home-div">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1" v-for="(item,i) in lunboUrls" :key="i">
          <img class="swiper-container-img" :src="item.url" alt="">
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
                  <img src="../assets/images/iconTest.png" alt="">
                  <img src="../assets/images/events-icon6-active.png" alt="">
                </i>
                <h2>预约尺寸</h2>
                <p class="js-title" title="">预约尺寸111</p>
              </a>
            </div>
            <div class="home-events-box-item">
              <a href="#" target="_blank">
                <i>
                  <img src="../assets/images/events-icon1.png" alt="">
                  <img src="../assets/images/events-icon1-active.png" alt="">
                </i>
                <h2>上门测量</h2>
                <p class="js-title" title="">上门测量111</p>
              </a>
            </div>
            <div class="home-events-box-item">
              <a href="#" target="_blank">
                <i>
                  <img src="../assets/images/events-icon2.png" alt="">
                  <img src="../assets/images/events-icon2-active.png" alt="">
                </i>
                <h2>专业设计</h2>
                <p class="js-title" title="">专业设计111</p>
              </a>
            </div>
            <div class="home-events-box-item">
              <a href="#" target="_blank">
                <i>
                  <img src="../assets/images/events-icon9.png" alt="">
                  <img src="../assets/images/events-icon9-active.png" alt="">
                </i>
                <h2>配送安装</h2>
                <p class="js-title" title="">配送安装111</p>
              </a>
            </div>
            <div class="home-events-box-item">
              <a href="#" target="_blank">
                <i>
                  <img src="../assets/images/events-icon9.png" alt="">
                  <img src="../assets/images/events-icon9-active.png" alt="">
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
          <h3>——  企业介绍  ——</h3>
          <span>英文</span>
        </div>
        <div class="container-content">
          <div class="container-content-lt">
            <img :src="containCL" alt="">
          </div>
          <div class="container-content-rt">
            <span class="company-introduce-text">企业英文介绍</span>
            <h2>企业名</h2>
            <span class="company-slogan">企业标语</span>
            <div class="cat-line"></div>
            <span class="keyword">关键字</span>
            <span class="keyword">关键字</span>
            <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
          </div>
        </div>
      </div>
      <div class="home-container-list">
        <div class="container-title">
          <h3>——  全屋定制  ——</h3>
          <span>英文</span>
        </div>
        <div class="container-content">
          <div class="container-content-lt1">
            <el-row class="tac">
              <el-col :span="12">
                <el-menu class="el-menu-vertical-demo" :default-active="defaultAct" :active="defaultAct">
                  <el-menu-item v-for="(item, i) in seriesInfo" :key="i" :index="i.toString()" @mouseover.native="showDiff(i)">
                    <span slot="title">{{item.seriesName}}</span>
                  </el-menu-item>
                </el-menu>
              </el-col>
            </el-row>  
          </div>
          <div class="container-content-ct1">
            <img :src="seriesBG" alt="">
          </div>
          <div class="container-content-rt1">
            <h2>{{seriesName}}</h2>
            <div class="cat-line container-content-rtline"></div>
            <p>{{seriesIntroduce}}</p>
          </div>
        </div>
      </div>
      <div class="home-container-list">
        <div class="container-title">
          <h3>——  产品  ——</h3>
          <span>英文</span>
        </div>
        <div class="container-content">
          <div class="goods-show-list">
            <div class="goods-names-picture" v-for="$index in 5" :key="$index">
              <div class="goods-picture">
                <div class="goods-picture-box">
                  <img src="../assets/images/test.png" alt="橱柜图片">
                </div>
              </div>
              <span>说明{{$index}}</span>
            </div>
          </div>
          <div class="style-list">
            <div class="style-list-intro">
              <el-row class="series-style-list">
                <el-col :span='8' v-for="$index in 6" :key="$index">
                  <el-card :body-style="{ padding: '10px' }">
                    <img :src="containCL" class="image">
                    <div style="padding: 14px;">
                      <span style="font-size: 20px;color:#333;">橱柜名</span><br>
                      <span class="series-list-name">橱柜风格</span>
                    </div>
                  </el-card>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="btn-more">
            <el-button>更多</el-button>
          </div>
        </div>
      </div>
      <div class="home-container-list">
        <div class="container-title">
          <h3>——  品牌实力  ——</h3>
          <span>英文</span>
        </div>
        <div class="container-content trademark">
          <div class="trademark-info">
            <div class="trademark-info-list" v-for="(item,$index) in trademarkInfo" :key="$index">
              <img src="../assets/images/test.png" alt="">
              <h2>{{item.title}}</h2>
              <span>{{item.desc}}</span>
            </div>
          </div>
        </div>
      </div>  
      <div class="home-container-list news-list-div">
        <div class="container-title">
          <h3>——  新闻资讯  ——</h3>
          <span>news</span>
        </div>
        <div class="container-content">
          <div class="company-news">
            <div class="make-an-appiontment">
              <div class="appiontment-lt">
                <span>立即预约</span>
              </div>
              <div class="appiontment-rt">
                <img src="../assets/images/open.png" alt="">
              </div>
            </div>
            <div class="compay-new-list">
              <div class="news-list-lt">
                <img :src="newsInfo.newsImg" alt="新闻图片">
                <div class="news-informartion">
                  <div style="height: 120px;border-left:1px solid #ccc;"></div>
                  <div>
                    <h1>新闻资讯</h1>
                    <span>News Information</span>
                  </div>
                </div>
              </div>
              <div class="news-list-ct">
                <div v-for="(item, i) in newsInfo.newsText1" :key="i" class="news-ct-box">
                  <h3>{{item.title}}</h3>
                  <p>{{item.content}}</p>
                </div>
              </div>
              <div class="news-list-rt"></div>
            </div>
            <div class="news-menu">
              <el-row class="tac">
                <el-col :span="12">
                  <el-menu default-active="2" class="el-menu-vertical-demo">
                    <el-menu-item index="1">
                      <template slot="title">
                        <span>顶部</span>
                      </template>
                    </el-menu-item>
                    <el-menu-item index="2">
                      <span slot="title">预约</span>
                    </el-menu-item>
                    <el-menu-item index="3">
                      <span slot="title">热线</span>
                    </el-menu-item>
                    <el-menu-item index="4">
                      <span slot="title">手机端</span>
                    </el-menu-item>
                  </el-menu>
                </el-col>
              </el-row>  
            </div>
          </div>
          <div class="btn-more news-more-btn">
            <el-button>更多</el-button>
          </div>
          <div class="write-info" v-if="isShow">
            <div class="write-info-box">
              <img src="../assets/images/close.png" alt="" class="write-info-close" @click="closeModal">
              <div class="write-info-text">
                <div class="write-info-list">
                  <img src="../assets/images/events-icon2.png" alt="">
                </div>
                <div class="write-info-list">
                  <el-input v-model="inputName" placeholder="请输入姓名"></el-input>
                </div>
                <div class="write-info-list">
                  <el-input v-model="inputPhone" placeholder="请输入手机号"></el-input>
                </div>
                <div class="write-info-list">
                  <el-input v-model="inputAddress" placeholder="请输入楼盘位置"></el-input>
                </div>
                <div class="write-info-list">
                  <el-button type="primary">确定预约</el-button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      lunboUrls: [
        { url: "../../static/1.jpg" },
        { url: "../../static/2.jpg" },
        { url: "../../static/3.jpg" },
        { url: "../../static/4.jpg" },
        { url: "../../static/5.jpg" }
      ],
      seriesInfo: [
        {seriesName: '系列一',url: '../../static/1.jpg', seriesIntroduce: '系列一介绍说明'},
        {seriesName: '系列二',url: '../../static/2.jpg', seriesIntroduce: '系列二介绍说明'},
        {seriesName: '系列三',url: '../../static/3.jpg', seriesIntroduce: '系列三介绍说明'},
        {seriesName: '系列四',url: '../../static/4.jpg', seriesIntroduce: '系列四介绍说明'},
        {seriesName: '更多',url: '../../static/5.jpg', seriesIntroduce: '系列五介绍说明'},
      ],
      trademarkInfo: [
        {title: '设计力', desc: 'disign'},
        {title: '生产力', desc: 'product'},
        {title: '服务', desc: 'service'},
        {title: '保障', desc: 'hello world4'}
      ],
      newsInfo: {
        newsImg: '../../static/1.jpg',
        newsText1: [
          {title: '新闻信息左上',content: '这是新闻消息左上的内容部分，今天下午发生一场杀人事件'},
          {title: '新闻信息左下',content: '这是新闻消息左下的内容部分，今天下午发生一场杀人事件'}
        ],
        newsText2: [
          {title: '新闻信息右上',content: '这是新闻消息右上的内容部分，今天下午发生一场杀人事件'},
          {title: '新闻信息右中',content: '这是新闻消息右中的内容部分，今天下午发生一场杀人事件'},
          {title: '新闻信息右下',content: '这是新闻消息右下的内容部分，今天下午发生一场杀人事件'}
        ]
      },
      containCL: '../../static/1.jpg',
      seriesBG: '../../static/1.jpg',
      defaultAct: '0',
      seriesName: '系列一',
      seriesIntroduce: '系列介绍',
      company_detail: 'hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666',
      isShow: true,
      inputName: '',
      inputPhone: '',
      inputAddress: ''
    };
  },
  props: ['index'],
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
  },
  methods: {
    closeModal: function() {
      this.isShow = !this.isShow;
    },
    showDiff: function(index) {
      // console.log(index);
      this.defaultAct = index.toString();
      this.seriesBG = this.seriesInfo[index].url;
      this.seriesName = this.seriesInfo[index].seriesName;
      this.seriesIntroduce = this.seriesInfo[index].seriesIntroduce;
    },
  }
};
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

