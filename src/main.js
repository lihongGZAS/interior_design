// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import vueResource from 'vue-resource';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios; // 通过原型链的方式可以在任何组件下调用axios
Vue.use(vueResource);
router.afterEach((to,from,next) => {
  window.scrollTo(0,0);
})

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
