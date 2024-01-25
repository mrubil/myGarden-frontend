import Vue from "vue";
import VueRouter from "vue-router";
import home from "../views/home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: home,
  },
  {
    path: "/prijava",
    name: "prijava",

    component: () =>
      import(/* webpackChunkName: "about" */ "../views/prijava.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
