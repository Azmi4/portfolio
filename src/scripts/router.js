import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import App from "../admin/App.vue";
import aboutMe from "../admin/components/aboutMe.vue";

const routes = [
  {
    path: "/",
    component: App
  },
  {
    path: "/about",
    component: aboutMe
  }
];

export default new VueRouter({ routes, mode: "history" });
