<template>
  <div class="brand-div">
    <div class="advertise-img">
      <img :src="brandImg" alt="品牌实力宣传图片1920*300">
    </div>
    <div class="container-content">
      <div class="container-content-lt">
        <img :src="companyImg" alt="企业图片960*700">
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
    <div class="reverse-img-position">
      <div class="reserse-img-lt">
        <span class="company-introduce-text">企业介绍</span>
        <h2>设计力</h2>
        <span class="company-slogan">企业标语</span>
        <div class="cat-line"></div>
        <span class="keyword">关键字</span>
        <span class="keyword">关键字</span>
        <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
      </div>
      <div class="reserse-img-rt">
        <img :src="designImg" alt="设计图片960*700">
      </div>
    </div>
    <div class="container-content">
      <div class="container-content-lt">
        <img :src="productImg" alt="生产图片960*700">
      </div>
      <div class="container-content-rt">
        <span class="company-introduce-text">企业介绍</span>
        <h2>生产力</h2>
        <span class="company-slogan">企业标语</span>
        <div class="cat-line"></div>
        <span class="keyword">关键字</span>
        <span class="keyword">关键字</span>
        <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
      </div>
    </div>
    <div class="reverse-img-position">
      <div class="reserse-img-lt">
        <span class="company-introduce-text">企业介绍</span>
        <h2>服务</h2>
        <span class="company-slogan">企业标语</span>
        <div class="cat-line"></div>
        <span class="keyword">关键字</span>
        <span class="keyword">关键字</span>
        <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
      </div>
      <div class="reserse-img-rt">
        <img :src="serviceImg" alt="服务图片960*700">
      </div>
    </div>
    <div class="container-content">
      <div class="container-content-lt">
        <img :src="guaranteeImg" alt="保障图片960*700">
      </div>
      <div class="container-content-rt">
        <span class="company-introduce-text">企业介绍</span>
        <h2>保障</h2>
        <span class="company-slogan">企业标语</span>
        <div class="cat-line"></div>
        <span class="keyword">关键字</span>
        <span class="keyword">关键字</span>
        <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "brand",
  data() {
    return {
      brandImg: "",
      companyImg: "",
      designImg: "",
      productImg: "",
      serviceImg: "",
      guaranteeImg: "",
      company_detail: "公司详情介绍"
    };
  },
  methods: {
    init: function() {
      // get 请求
      $http.get("/user", {
        params: {
          ID: 12345
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

      // post请求
      $http.post("/user", {
        firstName: "Fred",
        lastName: "Flintstone"
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
@import "../../static/css/brand.css";
</style>


