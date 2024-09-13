import { createWebHashHistory, createRouter } from "vue-router";
import DefaultLayout from "@/template/DefaultTemplate.vue";
import Home from "@/views/Home.vue";
import Login from "@/components/Login.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },
      { path: "/login", name: "login", component: Login },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
