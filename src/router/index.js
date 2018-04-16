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
import iot2 from '@/components/iot2'
import admin from '@/components/admin'
import startIoT from '@/components/startIoT'
import published from '@/components/published'
import chat from '@/components/chat'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
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
      path: '/iot2',
      name: 'iot2',
      component: iot2
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
      path: '/admin',
      name: 'admin',
      component: admin
    },
    {
      path: '/startIoT',
      name: 'startIoT',
      component: startIoT
    },
    {
      path: '/startIoT/:queryClientID',
      name: 'startIoT',
      component: startIoT
    },
    {
      path: '/published',
      name: 'published',
      component: published
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    }
  ]
})
