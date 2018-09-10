<template>
  <div class="home-div" id="home-div">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide slide1" v-for="(item,i) in lunboUrls" :key="i">
          <img class="swiper-container-img" :src="item.ImgUrl" alt="">
        </div>
      </div>
      <div class="pagination"></div>
      <div class="cover"></div>
      <div class="home-events">
        <div class="home-events-box" style="min-height:30px;">
          <div class="home-events-box-wrapper" style="min-height:30px;">
            <div class="home-events-box-item" v-for="(item, i) in processImgs" :key="i">
              <a href="#" target="_blank">
                <i>
                  <img :src="item.ImgUrl" alt="">
                  <img :src="item.ImgUrl" alt="">
                </i>
                <h2>{{item.Name}}</h2>
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
            <div class="goods-names-picture" v-for="(item, i) in productIcons" :key="i">
              <div class="goods-picture">
                <div class="goods-picture-box" @mouseover="overChangeImg(i)" @mouseout="leaveChangeImg(i)">
                  <img :src="item.ImgUrl" alt="橱柜图片">
                </div>
              </div>
              <span>{{item.Name}}</span>
            </div>
          </div>
          <div class="style-list">
            <div class="style-list-intro">
              <el-row class="series-style-list">
                <el-col :span='8' v-for="(item, i) in productImgs" :key="i">
                  <el-card :body-style="{ padding: '34px' }">
                    <img :src="item.ImgUrl" class="image">
                    <div style="padding: 14px;">
                      <span class="series-list-name series-common-style">{{item.Name}}</span>
                      <span class="series-list-desc series-common-style">{{item.Desc}}</span>
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
              <img :src="item.ImgUrl" alt="">
              <h2>{{item.Name}}</h2>
              <span>用品质保驾护航</span>
              <span>用态度践行服务</span>
              <span>用真心赢得赞赏</span>
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
            <div class="compay-new-list">
              <div class="news-list-lt" @mouseover="zoomOut" @mouseout="resetIcon">
                <img :src="newsInfo.newsImg" alt="新闻图片">
                <div class="news-informartion">
                  <div class="news-info-position">
                    <div class="news-lt-catline"></div>
                    <div class="news-info-title">
                      <h2>新闻资讯</h2>
                      <span>News Information</span>
                    </div>
                    <div class="news-show-icon">
                      <img :src="moreNewsIcon" alt="">
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-list-ct">
                <div class="show-newsrt-box">
                  <div class="news-ct-box1 hover-show-shadow">
                    <div class="news-ct-title">新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行</div>
                    <div class="news-ct-content">
                      新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行,新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行,新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行
                    </div>
                    <div class="news-ct-ctLine"></div>
                    <div class="news-date-box">
                      <div class="news-date">
                        <div class="news-date-day">04</div>
                        <div class="news-date-yearmonth">2018.09</div>
                      </div>
                      <div class="news-date-icon">
                        <img src="../assets/images/rightArrow.png" alt="">
                      </div>
                    </div>
                  </div>
                  <div class="news-ct-box2 hover-show-shadow">
                    <div class="news-ct-title">新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行</div>
                    <div class="news-ct-content">
                      新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行,新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行,新闻title微信支付HTTP协议的安全性能讨论会在北京科技馆举行
                    </div>
                    <div class="news-ct-ctLine"></div>
                    <div class="news-date-box">
                      <div class="news-date">
                        <div class="news-date-day">04</div>
                        <div class="news-date-yearmonth">2018.09</div>
                      </div>
                      <div class="news-date-icon">
                        <img src="../assets/images/rightArrow.png" alt="">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="news-list-rt">
                <div class="news-rt-info news-rt-up hover-show-shadow">
                  <div class="news-rt-date">
                    <div class="news-rt-databox">
                      <div class="news-date-day">04</div>
                      <div class="news-rt-catline"></div>
                      <div class="news-date-yearmonth">2018.09</div>
                    </div>
                  </div>
                  <div class="news-rt-txt">
                    <div>相信你也知道，小程序最近又火起来了，这是测试信息。</div>
                    <div class="news-date-icon news-rt-icon">
                      <img src="../assets/images/rightArrow.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="news-rt-info news-rt-middle hover-show-shadow">
                  <div class="news-rt-date">
                    <div class="news-rt-databox">
                      <div class="news-date-day">04</div>
                      <div class="news-rt-catline"></div>
                      <div class="news-date-yearmonth">2018.09</div>
                    </div>
                  </div>
                  <div class="news-rt-txt">
                    <div>相信你也知道，小程序最近又火起来了，这是测试信息。</div>
                    <div class="news-date-icon news-rt-icon">
                      <img src="../assets/images/rightArrow.png" alt="">
                    </div>
                  </div>
                </div>
                <div class="news-rt-info news-rt-down hover-show-shadow">
                  <div class="news-rt-date">
                    <div class="news-rt-databox">
                      <div class="news-date-day">04</div>
                      <div class="news-rt-catline"></div>
                      <div class="news-date-yearmonth">2018.09</div>
                    </div>
                  </div>
                  <div class="news-rt-txt">
                    <div>相信你也知道，小程序最近又火起来了，这是测试信息。</div>
                    <div class="news-date-icon news-rt-icon">
                      <img src="../assets/images/rightArrow.png" alt="">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="btn-more news-more-btn">
            <el-button>更多</el-button>
          </div>
        </div>
      </div>  
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  props: ['index'],
  data() {
    return {
      // 轮播图片数据
      lunboUrls: [
        // { ImgUrl: "../../static/images/1.jpg" },
        // { ImgUrl: "../../static/images/2.jpg" },
        // { ImgUrl: "../../static/images/3.jpg" },
        // { ImgUrl: "../../static/images/4.jpg" },
        // { ImgUrl: "../../static/images/5.jpg" }
      ],
      processImgs: [],
      templateSting: '',
      productIcons: [],
      productIcons2: [],
      productImgs: [],
      // 个系列对应的数据
      seriesInfo: [
        {seriesName: '系列一',url: '../../static/images/1.jpg', seriesIntroduce: '系列一介绍说明'},
        {seriesName: '系列二',url: '../../static/images/2.jpg', seriesIntroduce: '系列二介绍说明'},
        {seriesName: '系列三',url: '../../static/images/3.jpg', seriesIntroduce: '系列三介绍说明'},
        {seriesName: '系列四',url: '../../static/images/4.jpg', seriesIntroduce: '系列四介绍说明'},
        {seriesName: '更多',url: '../../static/images/5.jpg', seriesIntroduce: '系列五介绍说明'},
      ],

      // 品牌数据
      trademarkInfo: [
        // {title: '设计力', desc: 'disign'},
        // {title: '生产力', desc: 'product'},
        // {title: '服务', desc: 'service'},
        // {title: '保障', desc: 'hello world4'}
      ],
      // 新闻信息数据
      newsInfo: {
        newsImg: '../../static/images/1.jpg',
        newsText1: [
          {title: '新闻信息左上',content: '这是新闻消息左上的内容部分，今天下午发生一场杀人事件',newsDate: '2018-09-04'},
          {title: '新闻信息左下',content: '这是新闻消息左下的内容部分，今天下午发生一场杀人事件',newsDate: '2018-09-04'}
        ],
        newsText2: [
          {title: '新闻信息右上',content: '这是新闻消息右上的内容部分，今天下午发生一场杀人事件',newsDate: '2018-09-04'},
          {title: '新闻信息右中',content: '这是新闻消息右中的内容部分，今天下午发生一场杀人事件',newsDate: '2018-09-04'},
          {title: '新闻信息右下',content: '这是新闻消息右下的内容部分，今天下午发生一场杀人事件',newsDate: '2018-09-04'}
        ]
      },
      containCL: '../../static/images/1.jpg',
      seriesBG: '../../static/images/1.jpg',
      defaultAct: '0',
      seriesName: '系列一',
      seriesIntroduce: '系列介绍',
      company_detail: 'hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666,hello world, 666',
      isShow: true,
      inputName: '',
      inputPhone: '',
      inputAddress: '',
      moreNewsIcon: '../../static/images/openIcon.png'
    };
  },
  mounted: function() {
    // home组件初始化请求
    this.homeInit();
  },
  methods: {
    // 根据鼠标移动到不同的系列上，显示不同的内容信息
    showDiff: function(index) {
      this.defaultAct = index.toString();
      this.seriesBG = this.seriesInfo[index].url;
      this.seriesName = this.seriesInfo[index].seriesName;
      this.seriesIntroduce = this.seriesInfo[index].seriesIntroduce;
    },
    zoomOut: function() {
      this.moreNewsIcon = '../../static/images/openIcon1.png';
    },
    resetIcon: function() {
      this.moreNewsIcon = '../../static/images/openIcon.png';
    },
    homeInit: function() {
      
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        // console.log(response);
        this.lunboUrls = response.body.Sub[441].File;
        this.processImgs = response.body.Sub[443].File;
        // 
        this.productIcons = response.body.Sub[444].Sub[445].File;
        this.productIcons2 = response.body.Sub[444].Sub[446].File;
        this.trademarkInfo = response.body.Sub[456].File;
      })
      .catch(function(error) {
        console.log(error);
      });

      // 产品图标和图片
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=459&Class=2", {
      })
      .then(function(response) {
        // console.log(response);
        this.productImgs = response.body.Sub[460].File;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    overChangeImg: function(index) {
      this.templateSting = this.productIcons[index].ImgUrl;
      // this.productIcons2.forEach((key, value) => {
        
      // });
      for(const item of this.productIcons2) {
        if(item.Name === this.productIcons[index].Name) {
          this.productIcons[index].ImgUrl = item.ImgUrl;
        }
      }
      // this.productIcons[index].ImgUrl = this.productIcons2[index].ImgUrl;
    },
    leaveChangeImg: function(index) {
      this.productIcons[index].ImgUrl = this.templateSting;
    }
  },
  watch: {
    lunboUrls () {
      // 轮播插件会对轮播区域进行重载，所以每当轮播数据发生变化时，需调用一次轮播插件函数
      setTimeout(()=>{
        var mySwiper = new Swiper(".swiper-container", {
        pagination: ".pagination",
        paginationClickable: true,
        autoplay: 5000,
        speed: 1,
        loop: true,

        onInit: function(swiper) {
          swiperAnimateCache(swiper); // 隐藏动画元素
          swiperAnimate(swiper); // 初始化完成开始动画
        },
        onSlideChangeEnd: function(swiper) {
          swiperAnimate(swiper); // 每个slide切换结束时也运行当前slide动画
          }
        });
      }, 100)
    }
  },
};
</script>

<style scoped>
  @import '../../static/css/home.css'
</style>

