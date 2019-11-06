import Vue from "vue";
import App from "./App.vue";
import router from "./scripts-admin/router";

new Vue({
  el: "#app-root",
  router,
  render: h => h(App)
});
