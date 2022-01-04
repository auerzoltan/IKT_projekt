import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Fooldal from '../views/Fooldal.vue'
import Festekek from '../views/Festekek.vue'
import Faanyagok from '../views/Faanyagok.vue'
import Szerszamkatalogus from '../views/Szerszamkatalogus.vue'
import Rolunk from '../views/Rolunk.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'fooldal',
    component: Fooldal
  },
  {
    path: '/festekek',
    name: 'Festekek',
    component: Festekek
  },
  {
    path: '/faanyagok',
    name: 'faanyagok',
    component: Faanyagok
  },
  {
    path: '/szerszamkatalogus',
    name: 'szerszamkatalogus',
    component: Szerszamkatalogus
  },
  {
    path: '/rolunk',
    name: 'rolunk',
    component: Rolunk
  },
  {
    path: '/blog',
    name: 'blog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
