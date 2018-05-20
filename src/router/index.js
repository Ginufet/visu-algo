import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Sort from '@/pages/sort/index.vue'
import Selection from '@/pages/sort/Selection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/sort',
      component: Sort,
      children: [
        {
          path: 'selection',
          component: Selection
        }
      ]
    }
  ]
})
