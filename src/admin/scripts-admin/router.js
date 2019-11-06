import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../App.vue")
  },
  {
    path: "/login",
    component: () => import("../components/pages/login.vue")
  },
  {
    path: "/about",
    component: () => import("../components/pages/aboutMe.vue")
  },
  {
    path: "/works",
    component: () => import("../components/pages/works.vue")
  },
  {
    path: "/reviews",
    component: () => import("../components/pages/reviews.vue")
  }
];

export default new VueRouter({ routes });
