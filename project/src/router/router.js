import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
// import LoginComponent from "./views/Login.vue"
// import AdminComponent from "./views/Admin.vue"
// import SecureComponent from "./views/Secure.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/student',
      name: 'student',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/student.vue')
    },
    // {
    //   path: '/Login',
    //   name: 'Login',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: LoginComponent
    // },

    // {
    //   path: '/admin',
    //   name: 'admin',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/Admin.vue')
    // }

  ]
})
