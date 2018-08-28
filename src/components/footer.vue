<template>
  <div class="footer-box">
    <div class="company-desc">
      <div class="company-desc-left">
        <div class="company-logo">
          <img src="{{}}" alt="这里是底部logo">
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
        <span>首页</span>
        <span>全屋定制</span>
        <span>产品</span>
        <span>品牌实力</span>
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

<style scoped>
  @import '../../static/css/footer.css';
</style>


