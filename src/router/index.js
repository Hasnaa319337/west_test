import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'track',

      component: () => import('@/views/TrackView.vue')
    },
    {
      path: '/progress',
      name: 'progress',

      component: () => import('@/views/ProgressView.vue')
    }
  ]
})

export default router
