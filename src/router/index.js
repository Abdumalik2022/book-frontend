import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
   {
      path: '/login',
      component: () => import('../pages/login.vue')
   },
   {
      path: '/signup',
      component: () => import('../pages/Signup.vue')
   },
   {
      path: '/books',
      component: () => import('../pages/Books.vue')
   },
   {
      path: '/category/:id',
      component: () => import('../pages/Books')
   },
   {
      path: '/book-info/:bookId',
      component: () => import('../pages/Book-info')
   },
   {
      path: '/add-book',
      component: () => import('../pages/Add-book')
   },
   {
      path: '/add-category',
      component: () => import('../pages/Add-category')
   }
]

const router = new VueRouter({
   mode: 'history',
   routes,
})

export default router
