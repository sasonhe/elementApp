import Vue from 'vue'
import Router from 'vue-router'
import Goods from '@/pages/goods'
import Ratings from '@/pages/ratings'
import Seller from '@/pages/seller'
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/Ratings',
      name: 'Ratings',
      component: Ratings
    },
    {
      path: '/Seller',
      name: 'Seller',
      component: Seller
    }
  ]
})