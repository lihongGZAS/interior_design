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
        <span class="company-introduce-text">企业英文介绍</span>
        <h2>企业名</h2>
        <span class="company-slogan">企业标语</span>
        <div class="cat-line"></div>
        <span class="keyword">关键字</span>
        <span class="keyword">关键字</span>
        <p class="company-introduce-detail">企业介绍详情：{{company_detail}}</p>
      </div>
      <div class="reserse-img-rt">
        <img :src="designImg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brand',
  data(){
    return {
      brandImg: '',
      companyImg: '',
      designImg: '',
      company_detail: '公司详情介绍'
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/brand.css'
</style>


