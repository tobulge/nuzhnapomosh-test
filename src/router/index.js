import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: 'Главная',
      pageTitle: 'Перейдите к созданию заявки'
    },
    component: HomeView
  },
  {
    path: '/fundraiser',
    name: 'creatingFundraiser',
    meta: {
      title: 'Создаём сбор',
      pageTitle: 'Создание заявки'
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/FundraiserView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
