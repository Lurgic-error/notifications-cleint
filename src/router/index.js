import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ViewWrapper from "../views/ViewWrapper.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    component: ViewWrapper,
    children: [
      {
        path: "",
        name: "home",
        component: Home,
      },
      {
        path: "/subscribe",
        name: "subscribe",
        component: () => import("../components/SubscribeUser.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
