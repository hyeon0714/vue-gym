import { createRouter, createWebHistory } from 'vue-router'
import MemberJoin from '../views/MemberJoin.vue'
import TrainerLoginSuccess from '../views/TrainerLoginSuccess.vue'
import TrainerJoinForm from '../views/TrainerJoinForm.vue'
import TrainerLoginView from '../views/TrainerLoginView.vue'
import TrainerIntroductionView from '../views/TrainerIntroductionView.vue'
import LoginClear from '@/views/TrainerLoginClear.vue'
import Login from '../views/MemberLoginClear.vue'
import MemberList1 from '../views/MemberList1.vue'


const routes = [
  {
    path: '/memberjoin',
    name: 'memberjoin',
    component: MemberJoin
  },
  {
    path: '/gym/tls',
    name: '/gym/tls',
    component: TrainerLoginSuccess
  },
  {
    path: '/gym/trainerjoin',
    name: '/gym/trainerjoin',
    component: TrainerJoinForm
  },
  {
    path: '/gym/trainerlogin',
    name: '/gym/trainerlogin',
    component: TrainerLoginView
  },
  {
    path: '/gym/trainerintroduction',
    name: '/gym/trainerintroduction',
    component: TrainerIntroductionView
  },
  {
    path: '/LoginClear',
    name: 'LoginClear',
    component: LoginClear
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/memberlist1',
    name: 'memberlist1',
    component: MemberList1
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
