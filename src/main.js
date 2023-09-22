import Vue from "vue";
import { registerSW } from "virtual:pwa-register";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import router from "./router";
import App from "./App.vue";
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
Vue.use(Vuesax);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
