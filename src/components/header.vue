<template>
  <div class="header-module">
    <div class="logoImg">
      <img src="{{}}"  alt="LOGO">
    </div>
    <div class="menu-list">
      <!-- <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#0a60b9" text-color="#fff"
        active-text-color="#fff" height="120px">
        <el-menu-item index="1"><router-link to="/">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/customization">全屋定制</router-link></el-menu-item>
        <el-menu-item index="3">产品</el-menu-item>
        <el-menu-item index="4"><a href="#" target="_blank">品牌实力</a></el-menu-item>
      </el-menu> -->
      <el-menu :default-active="this.$router.path" router mode="horizontal" background-color="#0a60b9" text-color="#fff"
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
  name: 'headerDiv',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      tel_phone: 88888888,
      navList:[
          {name:'/',navItem:'首页'},
          {name:'/customization',navItem:'全屋定制'},
          {name:'/product',navItem:'产品'},
          {name:'/brand',navItem:'品牌'},
      ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style>
  .header-module {
    width: 100%;
    height: 80px;
    background: #0a60b9;
    position: relative;
  }
  .logoImg {
    width: 160px;
    height: 80px;
    border: 1px solid #fff;
    position: absolute;
    left: 80px;
  }
  .logoImg img {
    width: 100%;
    height: 100%;
  }
  .menu-list {
    width: 800px;
    height: 80px;
    position: absolute;
    left: 46%;
    transform: translateX(-50%);
  }
  .menu-list ul{
    height: 80px;
  }
  .el-menu--horizontal>.el-menu-item {
    height: 80px;
    line-height: 80px;
    margin-right: 40px;
  }
  .tel-phone {
    width: 300px;
    height: 80px;
    text-align: center;
    line-height: 80px;
    position: absolute;
    right: 120px;
    color: #fff;
    font-weight: bolder;
  }
  .el-menu--horizontal {
    border: none;
  }
</style>


