import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home/IndexHome.vue')
const Feedbacks = () => import('@/views/Feedbacks/IndexFeedbacks.vue')
const Credencials = () => import('@/views/Credencials/IndexCredencials.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/feedbacks',
    name: 'Feedbacks',
    component: Feedbacks,
    meta: {
      hasAuth: false
    }
  },
  {
    path: '/credencials',
    name: 'Credencials',
    component: Credencials,
    meta: {
      hasAuth: false
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' }
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes
})

export default router
