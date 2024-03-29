import { createRouter, createWebHistory } from 'vue-router'
import MemberJoin from '../views/MemberJoin.vue'

const routes = [
  {
    path: '/memberjoin',
    name: 'memberjoin',
    component: MemberJoin
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
