import { createWebHistory,createRouter } from "vue-router";
import Home from "../pages/home/index.vue";
import Error from "../pages/error/index.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/:pathMatch(.*)*", component: Error },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
