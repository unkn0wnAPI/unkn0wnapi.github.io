import { createRouter, createWebHistory } from "vue-router";
import Homepage from "../views/Start.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "start",
      component: Homepage,
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../views/Projects.vue"),
    },
    {
      path: "/links",
      name: "links",
      component: () => import("../views/Links.vue"),
    },
  ],
});

export default router;
