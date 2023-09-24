import Vue from "vue";
import { registerSW } from "virtual:pwa-register";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css";
import "material-icons/iconfont/material-icons.css";
import router from "./router";
import { createPinia, PiniaVuePlugin } from "pinia";
import App from "./App.vue";
const updateSW = registerSW({
  onNeedRefresh() {},
  onOfflineReady() {},
});
Vue.use(PiniaVuePlugin);
const pinia = createPinia();
Vue.use(Vuesax);
new Vue({
  pinia,
  router,
  render: (h) => h(App),
}).$mount("#app");
