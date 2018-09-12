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
            <img :src="companyBgImg" alt="">
          </div>
          <div class="container-content-rt">
            <span class="company-introduce-text">{{companyEI}}</span>
            <h2>{{companyName}}</h2>
            <span class="company-slogan">{{companySlogan}}</span>
            <div class="cat-line"></div>
            <span class="keyword">{{companyKeyword1}}</span>
            <span class="keyword">{{companyKeyword2}}</span>
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
                    <span slot="title">{{item.Name}}</span>
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
            <span>{{seriesIntroduce2}}</span>
            <div class="cat-line container-content-rtline"></div>
            <p>{{seriesIntroduce3}}</p>
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
              <span>{{item.Json.split(";")[0].split("=")[1]}}</span>
              <span>{{item.Json.split(";")[1].split("=")[1]}}</span>
              <span>{{item.Json.split(";")[2].split("=")[1]}}</span>
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
                <img :src="newsInfo.Image" alt="新闻图片">
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
                    <div class="news-ct-title">{{newsInfo.Title}}</div>
                    <div class="news-ct-content">{{newsInfo.CInfo}}</div>
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
                    <div class="news-ct-title">{{newsInfo.Title}}</div>
                    <div class="news-ct-content">{{newsInfo.CInfo}}</div>
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
                    <div class="news-rt-desc">{{newsInfo.CInfo}}</div>
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
                    <div class="news-rt-desc">{{newsInfo.CInfo}}</div>
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
                    <div class="news-rt-desc">{{newsInfo.CInfo}}</div>
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
import { Loading } from 'element-ui';
export default {
  name: "home",
  props: ['index'],
  data() {
    return {
      // 轮播图片数据
      lunboUrls: [],
      processImgs: [],
      templateSting: '',
      productIcons: [],
      productIcons2: [],
      productImgs: [],
      // 个系列对应的数据
      seriesInfo: [],

      // 品牌数据
      trademarkInfo: [],
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
      companyData: [],
      companyBgImg: '',
      companyEI: '',
      companyName: '',
      companySlogan: '',
      companyKeyword1: '',
      companyKeyword2: '',
      company_detail: '',
      seriesBG: '',
      defaultAct: '0',
      seriesName: '',
      seriesIntroduce: '',
      seriesIntroduce2: '',
      seriesIntroduce3: '',
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
    let loadingInstance = Loading.service({ fullscreen: true });
    setTimeout(() => {
      loadingInstance.close();
    }, 1200);
  },
  methods: {
    // 根据鼠标移动到不同的系列上，显示不同的内容信息
    showDiff: function(index) {
      this.defaultAct = index.toString();
      this.seriesBG = this.seriesInfo[index].ImgUrl;
      this.seriesName = this.seriesInfo[index].Name;
      this.seriesIntroduce2 = this.seriesInfo[index].P2;
      this.seriesIntroduce3 = this.seriesInfo[index].P3;
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
        
        this.seriesInfo = response.body.Sub[467].File;
        this.seriesName = this.seriesInfo[0].Name;
        this.seriesBG = this.seriesInfo[0].ImgUrl;
        this.seriesIntroduce2 = this.seriesInfo[0].P2;
        this.seriesIntroduce3 = this.seriesInfo[0].P3;

        this.companyData = response.body.Sub[468].File[0];
        this.companyBgImg = this.companyData.ImgUrl;
        this.companyEI = this.companyData.P1;
        this.companyName = this.companyData.P2;
        this.companySlogan = this.companyData.P3;
        this.companyKeyword1 = this.companyData.P4;
        this.companyKeyword2 = this.companyData.P5;
        this.company_detail = this.companyData.P6;
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

      // 企业新闻信息
      this.$http.get("https://www.ehometd.com/temporary/api/org/all.php?fc=articlelist&OrgID=1000128&Release=1", {
      })
      .then(function(response) {
        this.newsInfo = response.body[0];
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

