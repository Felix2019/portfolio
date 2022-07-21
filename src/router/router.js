import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../pages/home_page.vue"),
  },
  {
    path: "/privacy-policy",
    name: "Privacy Policy",
    component: () => import("../pages/privacy_policy_page.vue"),
  },
  {
    path: "/imprint",
    name: "Imprint",
    component: () => import("../pages/imprint_page.vue"),
  },
  {
    path: "/callback",
    name: "Callback",
    component: () => import("../pages/callback_page.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
