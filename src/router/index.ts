import { createRouter, createWebHashHistory } from "vue-router"
const routes = [
  {
    path: "/",
    component: () => import("@/views/myHome.vue"),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
