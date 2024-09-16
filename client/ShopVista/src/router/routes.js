import { createWebHashHistory, createRouter } from "vue-router";
import DefaultLayout from "@/template/DefaultTemplate.vue";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "DefaultLayout",
    component: DefaultLayout,
    children: [
      { path: "/", name: "Home", component: Home },
      {path:'/products',name:'Products',component:()=>import('@/views/Products.vue')},
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
