import { createRouter, createWebHistory } from 'vue-router/auto'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    return [...setupLayouts([...routes, {
      path: '/333/sdfsdfsdf/222',
      component: () => import('@/pages/test2.vue')
    }]), {
      path: '/123123123/sdfsdfsdf/111',
      component: () => import('@/pages/test.vue')
    }]
  },
})

export default router
