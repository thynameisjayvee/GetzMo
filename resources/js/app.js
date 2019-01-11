
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'
import VueCookies from 'vue-cookies'
import BootstrapVue from 'bootstrap-vue'

Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(BootstrapVue)
// Vue.use(Datepicker)

import App from './views/App'
import Top from './views/Top'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: Top
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    }
  ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});
