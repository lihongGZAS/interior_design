<template>
  <div class="product-div">
    <div class="advertise-img">
      <img src="" alt="产品宣传图片1920*300">
    </div>
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
          <el-col :span='8' v-for="$index in 9" :key="$index">
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
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      containCL: '../../static/1.jpg',
    }
  },

}
</script>

<style scoped>
  @import '../../static/css/product.css'
</style>


