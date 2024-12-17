import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DestinationView from '@/views/DestinationView.vue'
import ExperienceView from '@/views/ExperienceView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/destination/:id',
      name: 'destination',
      component: DestinationView,
      props:route=>({...route.params, id:parseInt(route.params.id)}),
      children:[{
        path:':experienceSlug',
        name:'experience',
        component:ExperienceView,
        props:route=>({...route.params, id:parseInt(route.params.id)}),
      }]
    },
  ],
})

export default router
