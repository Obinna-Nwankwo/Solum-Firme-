import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/onboarding/index.vue' 
import dashboard from '@/pages/dashboard.vue'  


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: index
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: dashboard
    }
  ]
})

export default router
