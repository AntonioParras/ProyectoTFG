import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Match from "@/views/Match.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    component: Home
  },
  {
    path: "/Match",
    component: Match
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active"
});

export default router;
