<template>
  <div class="brand-div">
    <div class="advertise-img">
      <img :src="brandImg" alt="品牌实力宣传图片1920*300">
    </div>
    <div class="brand-info-box" v-for="(item, i) in resultData" :key="i">
      <div class="container-content" v-if="(i%2)===0">
        <div class="container-content-lt">
          <img :src="item.ImgUrl" alt="企业图片960*700">
        </div>
        <div class="container-content-rt">
          <span class="company-introduce-text">{{item.P1}}</span>
          <h2>{{item.P2}}</h2>
          <span class="company-slogan">{{item.P3}}</span>
          <div class="cat-line"></div>
          <span class="keyword">{{item.P4}}</span>
          <span class="keyword">{{item.P5}}</span>
          <p class="company-introduce-detail">{{item.P6}}</p>
        </div>
      </div>
      <div class="reverse-img-position" v-else>
        <div class="reserse-img-lt">
          <span class="company-introduce-text">{{item.P1}}</span>
          <h2>{{item.P2}}</h2>
          <span class="company-slogan">{{item.P3}}</span>
          <div class="cat-line"></div>
          <span class="keyword">{{item.P4}}</span>
          <span class="keyword">{{item.P5}}</span>
          <p class="company-introduce-detail">{{item.P6}}</p>
        </div>
        <div class="reserse-img-rt">
          <img :src="item.ImgUrl" alt="设计图片960*700">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: "brand",
  data() {
    return {
      resultData: [],
      brandImg: "",
    };
  },
  mounted: function() {
    this.getData();
    let loadingInstance = Loading.service({ fullscreen: true });
    setTimeout(() => {
      loadingInstance.close();
    }, 1200);
  },
  methods: {
    getData: function() {
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        this.resultData = response.body.Sub[473].File;
        this.brandImg = response.body.Sub[475].File[0].ImgUrl;
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


