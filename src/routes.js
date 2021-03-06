import Vue from 'vue'
import Router from 'vue-router'
import Main from './components/Main'
import Quran from './components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/quran',
      name: 'Quran',
      component: Quran
    }
  ]
})