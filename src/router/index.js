import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/pages/HelloWorld'
import Sort from '@/pages/sort/index.vue'

Vue.use(Router)

const views = ['Selection', 'Monkey', 'Bubble', 'Qsort']

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
      children: views.map(name => ({
        path: name.toLowerCase(),
        name,
        component: require(`@/pages/sort/${name}`).default
      }))
    }
  ]
})
