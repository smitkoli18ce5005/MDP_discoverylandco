import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home/Home.vue'
import AboutDLC from '../views/AboutDLC/AboutDLC.vue'
import OurWorlds from '../views/OurWorlds/OurWorlds.vue'
import Experiences from '../views/Experiences/Experiences.vue'
import Gallery from '../views/Gallery/Gallery.vue'
import Press from '../views/Press/Press.vue'

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
