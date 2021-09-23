import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import AboutDLC from '../views/AboutDLC.vue'
import OurWorlds from '../views/OurWorlds.vue'
import Experiences from '../views/Experiences.vue'
import Gallery from '../views/Gallery.vue'
import Press from '../views/Press.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-dlc',
    name: 'About',
    component: AboutDLC
  },
  {
    path: '/our-worlds',
    name: 'OurWorlds',
    component: OurWorlds
  },
  {
    path: '/experiences',
    name: 'Experiences',
    component: Experiences
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/press',
    name: 'Press',
    component: Press
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
