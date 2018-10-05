import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import axios from "axios";
import { routes } from "./routes";
import store from "./store/store.js";
Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.filter("currency", value => {
  return "$" + value.toLocaleString();
});

axios.defaults.baseURL = "https://www.alphavantage.co/";

const router = new VueRouter({
  mode: "history",
  routes
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
