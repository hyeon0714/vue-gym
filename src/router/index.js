import { createRouter, createWebHistory } from 'vue-router'
import MemberJoin from '../views/MemberJoin.vue'
import TrainerLoginSuccess from '../views/TrainerLoginSuccess.vue'
import TrainerJoinForm from '../views/TrainerJoinForm.vue'
import TrainerLoginView from '../views/TrainerLoginView.vue'
import TrainerIntroductionView from '../views/TrainerIntroductionView.vue'
import MyMemberListView from '../views/MyMemberListView.vue'
import LoginClear from '@/views/TrainerLoginClear.vue'
import Login from '../views/MemberLoginClear.vue'
import Manager1 from '../views/Manager1.vue'
import Manager2 from '../views/Manager2.vue'
import Manager3 from '../views/Manager3.vue'
import Manager4 from '../views/Manager4.vue'

const routes = [
  {
    path: '/memberjoin',
    name: 'memberjoin',
    component: MemberJoin
  },
  {
    path: '/trainer/list',
    name: 'mylist',
    component: MyMemberListView
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
    path: '/manager1',
    name: 'manager1',
    component: Manager1
  },
  {
    path: '/manager2',
    name: 'manager2',
    component: Manager2
  },
  {
    path: '/manager3',
    name: 'manager3',
    component: Manager3
  },
  {
    path: '/manager4',
    name: 'manager4',
    component: Manager4
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
