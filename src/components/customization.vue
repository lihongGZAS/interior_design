<template>
  <div class="customization-div">
    <div class="advertise-img">
      <img :src="custommizationImg" alt="">
    </div>
    <div class="series-desc">
      <div class="series-lists">
        <div class="series-span-special"></div>
        <span v-for="(item, i) in seriesData" :key="i" @click="changeSeriesImg(i)">{{item.Name}}</span>
        <div class="series-span-special"></div>
      </div>
    </div>
    <div class="series-list-box" v-for="(item, i) in seriesData" :key="i">
      <div class="series-one-desc">
        <img :src="item.ImgUrl" alt="">
      </div>
      <div class="hallway-div">
        <div class="hallway-desc">
          <h2>{{hallway_name}}</h2>
          <span>{{hallway_desc}}</span>
          <p>{{hallway_introduce}}</p>
        </div>
        <div class="hallway-img">
          <img :src="hallway_img" alt="系列样式图片">
        </div>
        <div class="hallway-change-icon">
          <div>
            <i class="el-icon-arrow-left set-icon-pos" @click="preImg"></i>
            <i class="el-icon-arrow-right"  @click="nextImg"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Loading } from 'element-ui';
export default {
  name: 'customization',
  data() {
    return {
      custommizationImg: '',
      hallway_img: '',
      hallway_name: '',
      hallway_desc: '',
      hallway_introduce: '',

      seriesData: [],
      seriesOne: [],
      seriesInfo: [],
      seriesBG: '',
      imgIndex: 0,
    }
  },
  mounted: function() {
    this.getData();
    let loadingInstance = Loading.service({ fullscreen: true });
    setTimeout(() => {
      loadingInstance.close();
    }, 1200);
  },
  methods: {
    getData: function() {
      this.$http.get("https://www.ehometd.com/temporary/api/other/all.php?fc=bianlifile&FID=439&Class=3", {
        params: {
          ID: 12345
        }
      })
      .then(response => {
        console.log(response)
        this.seriesData = response.body.Sub[467].File;
        this.custommizationImg = response.body.Sub[476].File[0].ImgUrl;
        this.seriesOne = response.body.Sub[479].Sub[480].File;

        this.seriesInfo = response.body.Sub[467].File;
        this.seriesBG = this.seriesInfo[0].ImgUrl;
        this.hallway_img = this.seriesOne[0].ImgUrl;
        this.hallway_introduce = this.seriesOne[0].P2;
        this.hallway_name = this.seriesOne[0].Name;
      })
      .catch(function(error) {
        console.log(error);
      });
    },
    changeSeriesImg: function(index) {
      this.seriesBG = this.seriesInfo[index].ImgUrl;
    },
    preImg: function() {
      this.imgIndex--;
      if(this.imgIndex < 0) {
        this.imgIndex = this.seriesOne.length-1;
      }
      this.hallway_img = this.seriesOne[this.imgIndex].ImgUrl;
      this.hallway_introduce = this.seriesOne[this.imgIndex].P2;
      this.hallway_name = this.seriesOne[this.imgIndex].Name;
    },
    nextImg: function() {
      this.imgIndex++;
      if(this.imgIndex > (this.seriesOne.length-1)) {
        this.imgIndex = 0;
      }
      this.hallway_img = this.seriesOne[this.imgIndex].ImgUrl;
      this.hallway_introduce = this.seriesOne[this.imgIndex].P2;
      this.hallway_name = this.seriesOne[this.imgIndex].Name;
    },
  }
}
</script>

<style scoped>
  @import '../../static/css/customization.css'
</style>


