import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home.vue"),
  },
  {
    path: "/project/:id",
    name: "Project",
    component: () => import("../pages/project.vue"),
  },
  //   {
  //     path: "/zoom/:url",
  //     name: "Zoom",
  //     component: () => import("../pages/zoom.vue"),
  //   },
  //   {
  //     path: "/datenschutz",
  //     name: "Datenschutz",
  //     component: () => import("../pages/datenschutz.vue"),
  //   },
  //   {
  //     path: "/imprint",
  //     name: "Imprint",
  //     component: () => import("../pages/imprint.vue"),
  //   },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
