import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/HomePage.vue";
Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/about",
    name: "",
    component: () => import("../views/AboutPage.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
