<template>
  <div class="suspend-menu">
    <el-row class="tac">
      <el-col :span="12">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item v-for="(item, i) in resultData" :key="i" :index="i.toString()" @mouseover.native="showIcon(i)" @mouseout.native="changeBk(i)" @click="goTop(i)" style="padding-left:0px">
            <span slot="title" v-if="nowIndex === i">{{item.Name}}</span>
            <img :src="item.ImgUrl" class="suspend-menu-icon" v-else alt="">
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
        resultData: [],
        nowIndex: -1,
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
          this.resultData = response.body.Sub[466].File;
        })
        .catch(function(error) {
          console.log(error);
        });
      },
      showIcon: function(index) {
        this.nowIndex = index;
      },
      changeBk: function(index) {
        this.nowIndex = -1;
      },
      goTop: function(index) {
        if(this.resultData[index].Name === "顶部") {
          scroll(0,0);
        }
      }
    }
  }
</script>

<style scoped>
  @import '../../static/css/suspendMenu.css'
</style>


