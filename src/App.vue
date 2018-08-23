<template>
  <div id="app">
    <div class="header">
      <!--  -->
      <div class="logoImg">
        <img src="./assets/logo.png">
      </div>
      <!--  -->
      <!--  -->
        
      <div class="menu-list">
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect" background-color="#0a60b9" text-color="#fff"
          active-text-color="#fff">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">全屋定制</el-menu-item>
          <el-menu-item index="3">产品</el-menu-item>
          <el-menu-item index="4"><a href="#" target="_blank">品牌实力</a></el-menu-item>
        </el-menu>
      </div>
      <!--  -->
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      activeIndex: '1',
      activeIndex2: '1'
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
body {
  padding: 0;
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 0;
}
.header {
  width: 100%;
  height: 80px;
  background: #0a60b9;
  position: relative;
}
.logoImg {
  width: 160px;
  height: 80px;
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
  left: 50%;
  transform: translateX(-50%);
}
</style>
