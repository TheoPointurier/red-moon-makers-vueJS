import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import NotFoundPage from '../views/NotFoundPage.vue'

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
  },
  {
    path: '/*',
    name: 'not-found',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // verify if name road correspond
    if (to.name) {
      const el = document.getElementById(to.name.toString())
      if (el) {
        return {
          el,           // L'élément DOM
          behavior: 'smooth' 
        }
      }
    }
    return { top: 0 }
  }
})

export default router
