import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import EntryView from '../views/EntryView.vue'
import HomePage from '../pages/HomePage.vue'
import UserStats from '../pages/UserStats.vue'
import UserSelections from '../pages/UserSelections.vue'
import RecList from '../pages/RecList.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'entry',
    component: EntryView
  },
  {
    path: '/me/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/me/stats',
    name: 'stats',
    component: UserStats
  },
  {
    path: '/me/selections',
    name: 'selections',
    component: UserSelections
  },
  {
    path: '/me/recs',
    name: 'reccomendations',
    component: RecList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
