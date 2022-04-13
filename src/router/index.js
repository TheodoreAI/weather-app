import { createRouter, createWebHistory } from "vue-router";
import PastWeather from "../views/PastWeather.vue";

const routes = [
  {
    path: "/",
    name: "PastWeather",
    component: PastWeather,
  },
  {
    path: "/current-weather",
    name: "CurrentWeather",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CurrentWeather.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
