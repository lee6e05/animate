import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import menu from '@/components/menu'    
import test from '@/components/test'  
import gobang from '@/components/gobang'  

Vue.use(Router)


export default new Router({ 
  scrollBehavior: () => ({
    y: 0
  }),
  routes: [{
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/menu',
      name: 'menu',
      component: menu
    } ,
    {
      path: '/test',
      name: 'test',
      component: test
    } ,
    {
      path:"/gobang",
      name:'gobang',
      component:gobang
    }
  ]
})

 
 
