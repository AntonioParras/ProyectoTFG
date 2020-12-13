import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Match from "@/views/Match.vue";
import Adoption from "@/views/Adoption.vue";
import About from "@/views/About.vue";
import Login from "@/views/Login.vue";
import SignUp from "@/views/SignUp.vue";
import AddDog from "@/views/AddDog.vue";
import Settings from "@/views/Settings.vue";
import YourDogs from "@/views/YourDogs.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/",
    component: Home
  },
  {
    path: "/match",
    component: Match
  },
  {
    path: "/adoption",
    component: Adoption
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/sign_up",
    component: SignUp
  },
  {
    path: "/add_dog",
    component: AddDog
  },
  {
    path: "/settings",
    component: Settings
  },
  {
    path: "/your_dogs",
    component: YourDogs
  }
];

const router = new VueRouter({
  routes,
  mode: "history",
  linkActiveClass: "active"
});

export default router;
