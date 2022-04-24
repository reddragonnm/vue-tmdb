import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";
import MovieView from "../views/MovieView.vue";
import NotFoundView from "@/views/NotFoundView.vue";

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),

  routes: [
    {
      path: "/",
      name: "Home",
      component: HomeView,
    },

    {
      path: "/:movieId",
      name: "Movie",
      component: MovieView,
    },

    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFoundView,
    },
  ],
});

export default router;
