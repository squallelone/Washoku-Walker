import { createRouter, createWebHistory } from 'vue-router'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SearchView from '@/views/SearchView.vue'
import NearbyView from '@/views/NearbyView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView,
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: NearbyView,
    },
  ],
})

export default router
