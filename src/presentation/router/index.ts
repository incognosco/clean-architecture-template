import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


// use the pattern described in this repo
// https://github.com/Angellewis/OnionArchitechtureClient/blob/main/src/router/index.ts

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
