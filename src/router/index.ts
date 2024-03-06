import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import MenuView from '../views/MenuView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/menu',
      name: 'MenuView',
      component: MenuView
    },
    {
      path: '/listaDados',
      name: 'DataList',
      component: DataList
    },
    {
      path: '/registroDisco',
      name: 'DiskRegistration',
      component: DiskRegistration
    },
    {
      path: '/registroUsuario',
      name: 'userRegistration',
      component: userRegistration
    }
  ]
})

export default router
