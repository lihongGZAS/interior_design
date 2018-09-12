<template>
  <div class="product-div">
    <div class="advertise-img">
      <img :src="productTopImg" alt="产品宣传图片1920*300">
    </div>
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
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: 'product',
  data() {
    return {
      productTopImg: '',
      productIcons: [],
      productIcons2: [],
      productImgs: []
    }
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
        this.productIcons = response.body.Sub[444].Sub[445].File;
        this.productIcons2 = response.body.Sub[444].Sub[446].File;
        this.productTopImg = response.body.Sub[474].File[0].ImgUrl;
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
  }
}
</script>

<style scoped>
  @import '../../static/css/product.css'
</style>


