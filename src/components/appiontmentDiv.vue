<template>
  <div class="appionent-div">
    <div class="write-info" v-if="isShow">
      <div class="write-info-box">
        <img src="../assets/images/close1.png" alt="" class="write-info-close" @click="closeModal">
        <div class="write-info-text">
          <div class="write-info-list">
            <div class="write-info-first">
              <img :src="appiontmentBg" alt="">
            </div>
          </div>
          <div class="write-info-list">
            <el-input v-model="inputName" placeholder="您的姓名"></el-input>
          </div>
          <div class="write-info-list">
            <el-input v-model="inputPhone" placeholder="您的手机号"></el-input>
          </div>
          <div class="write-info-list">
            <el-input v-model="inputAddress" placeholder="楼盘名称"></el-input>
          </div>
          <div class="write-info-list">
            <div class="sure-apoiontment-btn">确定预约</div>
          </div>
        </div>
      </div>
    </div>
    <div class="make-an-appiontment" v-else @click="appiontment">
      <div class="appiontment-lt">
        <div class="appiontment-lt-txt">立即预约</div>
      </div>
      <div class="appiontment-rt">
        <img src="../assets/images/open.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'appiontmentDiv',
    data() {
      return {
        isShow: true,
        inputName: '',
        inputPhone: '',
        inputAddress: '',
        appiontmentBg: ''
      }
    },
    mounted: function() {
      this.getData();
    },
    methods: {
      closeModal: function() {
        this.isShow = !this.isShow;
      },
      // 确定预约
      appiontment: function() {
        if(!this.isShow) {
          this.isShow = !this.isShow;
        }
      },
      getData: function() {
        this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
          params: {
            ID: 12345
          }
        })
        .then(response => {
          this.appiontmentBg = response.body.Sub[472].File[2].ImgUrl;
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  @import '../../static/css/appiontmentDiv.css'
</style>

