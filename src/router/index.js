import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import car from '@/components/car'
import car2 from '@/components/car2'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs'
import contactUs from '@/components/contactUs'
import study from '@/components/study'
import start from '@/components/start'
import feedback from '@/components/feedback'
import arm from '@/components/arm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/car',
      name: 'car',
      component: car
    },
    {
      path: '/car2',
      name: 'car2',
      component: car2
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/study',
      name: 'study',
      component: study
    },
    {
      path: '/start',
      name: 'start',
      component: start
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: feedback
    },
    {
      path: '/arm',
      name: 'arm',
      component: arm
    }
  ]
})
