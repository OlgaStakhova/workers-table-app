import Vue from 'vue';
import VueRouter from 'vue-router';
import { routeAlias } from '../constants/routeAlias.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: routeAlias.TABLE_PAGE,
    component: () => import(/* webpackChunkName: "table_page" */ '../pages/TableWorkersPage.vue')
  },
  {
    path: `/${routeAlias.ADD_WORKER_PAGE}`,
    name: routeAlias.ADD_WORKER_PAGE,
    component: () => import(/* webpackChunkName: "add_page" */ '../pages/AddWorkerPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
