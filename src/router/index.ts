import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: App
  },
  {
    path: '/band',
    name: 'band',
    component: App
  },
  {
    path: '/music',
    name: 'music',
    component: App
  },
  {
    path: '/events',
    name: 'events',
    component: App
  },
  {
    path: '/shop',
    name: 'shop',
    component: App 
  },
  {
    path: '/contact',
    name: 'contact',
    component: App
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
