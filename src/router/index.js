import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Forum from '../views/Forum'
import Card from '../views/Card'
import bxh from '../views/bxh'
import dowgame from '../views/dowgame'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/forum',
    component:Forum
  },
  {
    path:'/nap-the',
    component:Card
  },
  {
    path:'/dowland',
    component:dowgame
  },
  {
    path:'/bxh',
    component:bxh
  }
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
