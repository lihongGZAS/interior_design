<template>
  <div class="suspend-menu">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu default-active="2" class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <template slot="title">
              <span><a href="#app">顶部</a></span>
            </template>
          </el-menu-item>
          <el-menu-item index="2">
            <span slot="title">预约</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">热线</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">手机端</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>  
  </div>
</template>

<script>
  export default {
    name: 'suspendMenu',
    data() {
      return {

      }
    }
  }
</script>

<style scoped>
  @import '../../static/css/suspendMenu.css'
</style>


