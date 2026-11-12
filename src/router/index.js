import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'home', component: () => import('../views/HomeView.vue') },
  { path: '/portfolio', name: 'portfolio', component: () => import('../views/PortfolioView.vue') },
  { path: '/work', redirect: '/portfolio' },
  { path: '/commission', name: 'commission', component: () => import('../views/CommissionView.vue') },
  { path: '/services', redirect: '/commission' },
  { path: '/contact', name: 'contact', component: () => import('../views/ContactView.vue') },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})

export default router
