import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import works from '@/pages/works'
import news from '@/pages/news'
import laws from '@/pages/laws'
import courses from '@/pages/courses'
import helps from '@/pages/helps'
import aboutus from '@/pages/aboutus'
import personal from '@/pages/personal'

import HelloWorld from '@/components/HelloWorld'
import newsDetails from '@/commons/newsDetails'

import basicinfo from '@/components/basicinfo'
import pxcourses from '@/components/pxcourses'
import courselist from '@/components/courselist'
import jointest from '@/components/jointest'
import testrecord from '@/components/testrecord'
import filerecord from '@/components/filerecord'
import allorders from '@/components/allorders'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/personal',
      component: personal,
      children:[
        {path:'pxcourses',name:'pxcourses',component:pxcourses},
        {path:'basicinfo',name:'basicinfo',component:basicinfo},
        {path:'courselist',name:'courselist',component:courselist},
        {path:'jointest',name:'jointest',component:jointest},
        {path:'testrecord',name:'testrecord',component:testrecord},
        {path:'filerecord',name:'filerecord',component:filerecord},
        {path:'allorders',name:'allorders',component:allorders},
      ]
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/news',
      name: 'news',
      component: news
    },
    {
      path: '/laws',
      name: 'laws',
      component: laws
    },
    {
      path: '/courses',
      name: 'courses',
      component: courses
    },
    {
      path: '/helps',
      name: 'helps',
      component: helps
    },
    {
      path: '/aboutus',
      name: 'aboutus',
      component: aboutus
    },
    {
      path: '/newsDetails/:newsId',
      name: 'newsDetails',
      component: newsDetails
    },
    
  ]
})
