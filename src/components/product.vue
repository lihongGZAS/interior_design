<template>
  <div class="product-div">
    <div class="advertise-img">
      <img src="" alt="产品宣传图片1920*300">
    </div>
    <div class="goods-show-list">
      <div class="goods-names-picture" v-for="$index in 5" :key="$index">
        <div class="goods-picture">
          <!-- <img :src="containCL" alt="找不到图片"> -->
        </div>
        <span>说明{{$index}}</span>
      </div>
    </div>
    <div class="style-list">
      <div class="style-list-intro">
        <el-row class="series-style-list">
          <el-col :span='7' v-for="$index in 9" :key="$index">
            <el-card :body-style="{ padding: '20px' }">
              <img :src="containCL" class="image">
              <div style="padding: 14px;">
                <span class="series-lists-name">橱柜名</span><br>
                <span class="series-lists-style">橱柜风格</span>
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


