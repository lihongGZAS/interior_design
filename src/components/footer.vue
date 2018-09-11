<template>
  <div class="footer-box">
    <div class="company-desc">
      <div class="company-desc-left">
        <div class="company-logo">
          <h1>{{companyName}}</h1>
        </div>
        <div class="company-introduce">
          <p class="company-desc-txt1">{{company_desc}}</p>
          <p class="company-desc-txt2">{{company_desc2}}</p>
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
        <div class="tel-phoneNumber">
          <p>联系热线</p>
          <p class="company-tel-phone">{{tel_phoneNumber}}</p>
        </div>
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
        companyName: '蜜蜂雅居',
        company_desc: '十年磨一剑，精雕细琢，专业源于专注，细节彰显实力。',
        company_desc2: '从心出发，铸就卓越，我们，只做好全屋定制。',
        company_address: '浙江省台州市XXX镇XXX街XX号',
        company_qrcode: '../../static/QR_code.jpg', // 模拟请求到的图片地址,动态配置的本地图片只能放在static文件夹下，
        tel_phoneNumber: 88888888
      }
    },
    mounted: function() {
      this.getData();
    },
    methods: {
      getData: function() {
        this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
          params: {
            ID: 12345
          }
        })
        .then(response => {
          this.company_qrcode = response.body.Sub[472].File[1].ImgUrl;
          this.tel_phoneNumber = response.body.Sub[472].File[1].P2;
          this.footerLogo = response.body.Sub[472].File[0].ImgUrl;
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    }
  }
</script>

<style scoped>
  @import '../../static/css/footer.css';
</style>


