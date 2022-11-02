import { createRouter, createWebHistory } from 'vue-router'
import VUsersPage from '@/pages/users/VUsersPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'users',
      component: VUsersPage
    },
  ]
})

export default router
