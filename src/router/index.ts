/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        { path: '', component: Index },
        { path: 'portfolio', component: () => import('@/pages/portfolio.vue') },
        { path: 'portfolio/:slug', component: () => import('@/pages/category.vue') },
        { path: 'sobre', component: () => import('@/pages/sobre.vue') },
        { path: 'contato', component: () => import('@/pages/contato.vue') },
      ],
    },
  ],
})

export default router
