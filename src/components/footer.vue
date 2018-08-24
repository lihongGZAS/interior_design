<template>
  <div class="footer-box">
    <div class="company-desc">
      <div class="company-desc-left">
        <div class="company-logo">
          <img src="../assets/logo.png">
        </div>
        <div class="company-introduce">
          <p>{{company_desc}}</p>
        </div>
        <div class="company-address">
          <i class="el-icon-location-outline"></i>
          <span>{{company_address}}</span>
        </div>
      </div>
      <div class="company-desc-right">
        <div class="company-qrcode">
          <img :src="company_qrcode">
        </div>
        <div class="tel-phoneNumber">联系热线：{{tel_phoneNumber}}</div>
      </div>
    </div>
    <div class="menu-text">
      <div class="footer-menu">
        
      </div>
      <div class="copyright">版权说明:Copyright [dates] by [author/owner]</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerDiv',
  data() {
    return {
      company_desc: '简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍简要介绍',
      company_address: '浙江省台州市XXX镇XXX街XX号',
      company_qrcode: '../../static/QR_code.jpg', // 模拟请求到的图片地址,动态配置的本地图片只能放在static文件夹下，
      tel_phoneNumber: 88888888
    }
  }
}
</script>

<style>
  .footer-box {
    width: 100%;
    height: 300px;
  }
  .company-desc {
    background: #0a60b9;
    height: 100%;
    position: relative;
  }
  .company-desc-left {
    width: 30%;
    position: absolute;
    left: 150px;
    top: 60px;
  }
  .company-logo {
    width: 140px;
    height: 60px;
  }
  .company-logo img {
    width: 100%;
    height: 100%;
  }
  .company-introduce {
    text-align: left;
    color: #fff;
  }
  .company-address {
    color: #fff;
    text-align: left;
    font-size: 18px;
    font-weight: bolder;
  }
  .company-desc-right {
    width: 220px;
    height: 180px;
    position: absolute;
    top: 60px;
    right: 150px;
  }
  .company-qrcode {
    width: 150px;
    height: 150px;
  }
  .company-qrcode img {
    width: 100%;
    height: 100%;
  }
  .tel-phoneNumber {
    text-align: left;
    color: #fff;
    margin-top: 6px;
    font-size: 18px;
  }
  .menu-text {
    width: 100%;
    height: 70px;
    line-height: 70px;
    border: 1px solid red;
    position: relative;
  }
  .copyright {
    position: absolute;
    right: 150px;
  }
</style>


