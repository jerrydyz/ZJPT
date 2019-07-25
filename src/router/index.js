import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index'
import HelloWorld from '@/components/HelloWorld'
import newsDetails from '@/commons/newsDetails'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/newsDetails/:newsId',
      name: 'newsDetails',
      component: newsDetails
    },
    
  ]
})
