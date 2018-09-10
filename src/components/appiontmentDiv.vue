<template>
  <div class="appionent-div">
    <div class="write-info" v-if="isShow">
      <div class="write-info-box">
        <img src="../assets/images/close.png" alt="" class="write-info-close" @click="closeModal">
        <div class="write-info-text">
          <div class="write-info-list">
            <img src="../assets/images/events-icon2.png" alt="">
          </div>
          <div class="write-info-list">
            <el-input v-model="inputName" placeholder="请输入姓名"></el-input>
          </div>
          <div class="write-info-list">
            <el-input v-model="inputPhone" placeholder="请输入手机号"></el-input>
          </div>
          <div class="write-info-list">
            <el-input v-model="inputAddress" placeholder="请输入楼盘位置"></el-input>
          </div>
          <div class="write-info-list">
            <el-button>确定预约</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="make-an-appiontment" v-else @click="appiontment">
      <div class="appiontment-lt">
        <span>立即预约</span>
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
        inputAddress: ''
      }
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
    }
  }
</script>

<style scoped>
  @import '../../static/css/appiontmentDiv.css'
</style>

