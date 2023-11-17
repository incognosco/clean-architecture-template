import { createRouter, createWebHistory } from 'vue-router'
import ProductsView from '@/presentation/views/ProductsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ProductsView
    }
  ]
})

export default router
