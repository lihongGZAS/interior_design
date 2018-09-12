<template>
  <div class="customization-div">
    <div class="advertise-img">
      <img :src="custommizationImg" alt="全屋定制宣传图片1920*300">
    </div>
    <div class="series-desc">
      <div class="series-lists">
        <div class="series-span-special"></div>
        <span v-for="(item, i) in seriesName" :key="i">{{item.Name}}</span>
        <div class="series-span-special"></div>
      </div>
    </div>
    <div class="series-one-desc">
      <img :src="seriesBG" alt="各系列图片">
    </div>
    <div class="hallway-div">
      <div class="hallway-desc">
        <h2>{{hallway_name}}</h2>
        <span>{{hallway_name2}}</span>
        <p>{{hallway_introduce}}</p>
      </div>
      <div class="hallway-img">
        <img :src="hallway_img" alt="系列样式图片">
      </div>
      <div class="hallway-change-icon">
        <div>
          <i class="el-icon-arrow-left set-icon-pos"></i>
          <i class="el-icon-arrow-right"></i>
        </div>
      </div>
    </div>
    <div class="series-two-desc">
      <img :src="seriesBG2" alt="各系列图片">
    </div>
    <div class="hallway-div">
      <div class="hallway-desc">
        <h2>玄关</h2>
        <span>{{hallway_name3}}</span>
        <p>{{hallway_introduce}}</p>
      </div>
      <div class="hallway-img">
        <img :src="hallway_img2" alt="系列样式图片">
      </div>
      <div class="hallway-change-icon">
        <div>
          <i class="el-icon-arrow-left set-icon-pos"></i>
          <i class="el-icon-arrow-right"></i>
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
      hallway_img2: '',
      hallway_name: '',
      hallway_name2: 'hello world',
      hallway_name3: 'hello world000',
      hallway_introduce: '',
      series_two_detail: '',
      seriesName: [],
      seriesOne: [],
      seriesTwo: [],
      seriesInfo: [],
      seriesBG: '',
      seriesBG2: ''
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
        this.seriesName = response.body.Sub[467].File;
        this.custommizationImg = response.body.Sub[476].File[0].ImgUrl;
        this.seriesOne = response.body.Sub[479].Sub[480].File;
        this.seriesTwo = response.body.Sub[479].Sub[481].File;

        this.seriesInfo = response.body.Sub[467].File;
        this.seriesBG = this.seriesInfo[0].ImgUrl;
        this.hallway_img = this.seriesOne[0].ImgUrl;
        this.hallway_introduce = this.seriesOne[0].P2;
        this.hallway_name = this.seriesOne[0].Name;

        this.hallway_img2 = this.seriesOne[1].ImgUrl;
        this.seriesBG2 = this.seriesInfo[1].ImgUrl;
      })
      .catch(function(error) {
        console.log(error);
      });
    }
  }
}
</script>

<style scoped>
  @import '../../static/css/customization.css'
</style>


