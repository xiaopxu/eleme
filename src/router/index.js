import Vue from 'vue'
import Router from 'vue-router'
import Index from './../pages/Index'
import Order from './../pages/Order'
import Nearby from "./../pages/Nearby"
import Pending from "./../pages/Pending"
import Chargeback from "./../pages/Chargeback"
import Favor from "./../pages/Favor"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: '/order/personalCenter',
          name: 'nearby',
          component: Nearby
        },
        {
          path: '/order/nearby',
          name: 'nearby',
          component: Nearby
        },
        {
          path: '/order/pending',
          name: 'pending',
          component: Pending
        },
        {
          path: '/order/chargeback',
          name: 'chargeback',
          component: Chargeback
        },
        {
          path: '/order/favor',
          name: 'favor',
          component: Favor
        }
      ]
    }
  ]
})
