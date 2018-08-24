<template>
  <div id="app">
    <header-div></header-div>
    <router-view/>
    <footer-div></footer-div>
  </div>
</template>

<script>
import headerDiv from '@/components/header'
import footerDiv from '@/components/footer'
export default {
  name: 'App',
  components:{
    headerDiv,
    footerDiv
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

</style>
