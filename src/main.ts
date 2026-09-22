import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import './style.css'

import Accueil from './views/Accueil.vue'
import Articles from './views/Articles.vue'
import ArticleDetail from './views/ArticleDetail.vue'
import Ajouter from './views/Ajouter.vue'
import PanierPage from './views/PanierPage.vue'
import Login from './views/Login.vue'
import Admin from './views/Admin.vue'

const routes = [
  {
    path: '/',
    component: Accueil,
  },
  {
    path: '/articles',
    component: Articles,
  },
  {
    path: '/article/:id',
    component: ArticleDetail,
  },
  {
    path: '/ajouter',
    component: Ajouter,
  },
  {
    path: '/panier',
    component: PanierPage,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/admin',
    component: Admin,
    meta: {
      requiresAuth: true,
    },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Protection simple de /admin
router.beforeEach((to) => {
  const connected = localStorage.getItem('connected')

  if (to.meta.requiresAuth && connected !== 'true') {
    return '/login'
  }
})

createApp(App).use(router).mount('#app')
