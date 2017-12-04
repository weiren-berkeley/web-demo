import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import three from '@/components/three'
import home from '@/components/home'
import aboutUs from '@/components/aboutUs'
import contactUs from '@/components/contactUs'
import study from '@/components/study'
import start from '@/components/start'

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
      path: '/three',
      name: 'three',
      component: three
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
    }
  ]
})
