<template>
  <div class="product-div">
    <div class="advertise-img">
      <img :src="productTopImg" alt="">
    </div>
    <div class="goods-show-list">
      <div class="goods-names-picture" v-for="(item, i) in productIcons11" :key="i">
        <div class="goods-picture" @mouseenter="enterChangeImg(i, $event)" @mouseleave="leaveChangeImg(i, $event)" @click="changeSeries(i)">
          <div class="goods-picture-box">
            <img :src="item.ImgUrl" alt="橱柜图片">
          </div>
          <span>{{item.Name}}</span>
        </div>
      </div>
    </div>
    <div class="style-list">
      <div class="style-list-intro">
        <el-row class="series-style-list">
          <el-col :span='8' v-for="(item, i) in replaceProductImgs" :key="i">
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
      productIcons11: [],
      lastIndex: 0,
      productFlag: true,
      productImgs: [],
      productAllImgs: [],
      replaceProductImgs: [],
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
        // this.productIcons[0] = this.productIcons2[0];
        this.productTopImg = response.body.Sub[474].File[0].ImgUrl;

        this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons)); // 深拷贝获取初始productIcons的数据
        this.productIcons11[0] = this.productIcons2[0]; // 设置第一个系列图标高亮显示
        
      })
      .catch(function(error) {
        console.log(error);
      });

      // 产品图标和图片
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=459&Class=2", {
      })
      .then(function(response) {
        // console.log(response);
        this.productAllImgs = response.body.Sub; // 存储所有图片的对象
        this.replaceProductImgs = response.body.Sub[460].File; // 初始化获取第一个key的图片信息
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    enterChangeImg: function(index, event) {
      event.cancelBubble = true;
      this.productIcons11 = [];
      this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons));
      this.productIcons11[index] = this.productIcons2[index];
    },
    leaveChangeImg: function(index, event) {
      event.cancelBubble = true;
      if(index !== this.lastIndex && this.productFlag){ // 如果当前鼠标移动不是上次点击的图标，则鼠标离开后还原之前的图标
        this.productIcons11 = [];
        this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons));
        this.productIcons11[this.lastIndex] = this.productIcons2[this.lastIndex];
      } else if(index !== this.lastIndex && !this.productFlag) {
        this.productIcons11 = [];
        this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons));
        this.productIcons11[this.lastIndex] = this.productIcons2[this.lastIndex];
        console.log('leave....clicked');
      }
    },
    // 点击不同系列图标切换不同系列的图片
    changeSeries: function(index) {
      this.productFlag = false;
      if(index !== this.lastIndex) {
        this.productIcons11 = [];
        this.productIcons11 = JSON.parse(JSON.stringify(this.productIcons));
        this.productIcons11[index] = this.productIcons2[index];

        // this.productImgs = [];
        this.replaceProductImgs = [];
        for (let i in this.productAllImgs) {
          if (this.productIcons[index].Name === this.productAllImgs[i].Name) {
            this.replaceProductImgs = this.productAllImgs[i].File;;
          }
        }
        this.lastIndex = index; // 改变上次高亮显示图标下标值
      }
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/product.css'
</style>


