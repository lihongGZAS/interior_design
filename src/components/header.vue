<template>
  <div class="header-module">
    <div class="logoImg">
      <img :src="logoImg"  alt="LOGO--160*80">
    </div>
    <div class="menu-list">
      <el-menu :default-active="this.$router.path" router mode="horizontal" background-color="#0a60b9" text-color="#fff"
        active-text-color="#fff" height="120px" @select="test">
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
  methods: {
    test: function() {
      console.log(this.$router.path);
    }
  }
};
</script>

<style>
  @import '../../static/css/header.css'
</style>


