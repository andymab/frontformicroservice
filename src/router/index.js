import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '../views/LoginPage.vue'
import HomePage from '../views/HomePage.vue'

const routes = [
  { path: '/', component: HomePage, meta: { requiresAuth: true } },
  { path: '/login', component: LoginPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Guard
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.meta.requiresAuth && !token) {
    next('/login')
  } else {
    next()
  }
})

export default router
