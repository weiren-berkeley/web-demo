import Vue from 'vue'
import Router from 'vue-router'
import car from '@/components/car'
import car0 from '@/components/car0'
import car2 from '@/components/car2'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs'
import contactUs from '@/components/contactUs'
import study from '@/components/study'
import start from '@/components/start'
import feedback from '@/components/feedback'
import arm from '@/components/arm'
import animation from '@/components/animation'
import iintern from '@/components/iintern'
import iot from '@/components/iot'

import internHome from '@/pages/internHome'
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
      path: '/iintern',
      name: 'iintern',
      component: iintern
    },
    {
      path: '/iot',
      name: 'iot',
      component: iot
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
      path: '/car0',
      name: 'car0',
      component: car0
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
    },
    {
      path: '/animation',
      name: 'animation',
      component: animation
    },
    {
      path: '/internhome',
      name: 'hah',
      component: internHome
    }
  ]
})
