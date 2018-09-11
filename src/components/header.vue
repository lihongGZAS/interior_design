<template>
  <div class="header-module">
    <div class="logoImg">
      <img :src="logoImg"  alt="LOGO--180*60">
    </div>
    <div class="menu-list">
      <el-menu :default-active="$route.path" router mode="horizontal" background-color="#FFCD00" text-color="#3f3115"
        active-text-color="#fff" height="120px">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
          {{ item.navItem }}
        </el-menu-item>
      </el-menu>
    </div>
    <div class="tel-phone">
      <span>热线：{{tel_phone}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerDiv",
  data() {
    return {
      logoImg: '',
      tel_phone: 88888888,
      navList: [
        { name: "/", navItem: "首页" },
        { name: "/customization", navItem: "全屋定制" },
        { name: "/product", navItem: "产品" },
        { name: "/brand", navItem: "品牌" }
      ]
    };
  },
  mounted: function() {
    this.headerInit();
  },
  methods: {
    headerInit: function() {
      
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        this.logoImg = response.body.Sub[457].File[0].ImgUrl;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
};
</script>

<style>
  @import '../../static/css/header.css'
</style>


