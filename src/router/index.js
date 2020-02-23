import Vue from 'vue'
import VueRouter from 'vue-router'
const fuck = () => import('@/views/fuck.vue')
const Home = () => import('@/views/home/home.vue')
const Shop = () => import('@/views/shop/shop.vue')
const My = () => import('@/views/my/my.vue')
const Sort = () => import('@/views/sort/sort.vue')

Vue.use(VueRouter)
const routes = [
  { 
    path: '/',
    redirect: '/fuck'
  },
  { 
    path: '/fuck',
    component: fuck,
    redirect: 'home',
    children: [
      {
        path: 'home',
        component: Home
       },
       {
        path: 'shop',
        component: Shop
       },
       {
        path: 'my',
        component: My
       },
       {
        path: 'sort',
        component: Sort
       }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router