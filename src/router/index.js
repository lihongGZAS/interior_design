import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import customization from '@/components/customization'
import product from '@/components/product'
import brand from '@/components/brand'

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
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/customization',
      name: 'customization',
      component: customization
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/brand',
      name: 'brand',
      component: brand
    }
  ]
})
