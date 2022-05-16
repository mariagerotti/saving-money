import { createRouter, createWebHistory } from "vue-router";
import BlocoAcesso from "../views/BlocoAcesso.vue";
import BlocoCofre from "../views/BlocoCofre.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: BlocoAcesso,
    },
    {
      path: "/cofre",
      name: "cofre",
      component: BlocoCofre,
    },
  ],
});

export default router;
