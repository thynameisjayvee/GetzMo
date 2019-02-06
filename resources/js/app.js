
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
import Bootstrap from 'bootstrap'

// Vue.use(Bootstrap)
Vue.use(VueRouter)
Vue.use(VueCookies)
Vue.use(BootstrapVue)
// Vue.use(Datepicker)

import App from './views/App'
import Top from './views/Top'
import Login from './views/Login'
import Register from './views/Register'
import Profile from './views/Profile'
import Post_Tab from './views/Post_Tab'
import Message_Tab from './views/Message_Tab'
import Deal_Tab from './views/Deal_Tab'
import Garage_Tab from './views/Garage_Tab'
import Update_Profile_Tab from './views/Update_Profile_Tab'



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
      redirect: '/profile/posts',
      component: Profile,
      children: [
        {
          path: '/profile/posts',
          name: 'profile_post',
          component: Post_Tab
        },
        {
          path: '/profile/messages',
          name: 'profile_message',
          component: Message_Tab
        },
        {
          path: '/profile/deals',
          name: 'profile_deal',
          component: Deal_Tab
        },
        {
          path: '/profile/garage',
          name: 'profile_garage',
          component: Garage_Tab
        },
        {
          path: '/profile/profile_update',
          name: 'profile_update',
          component: Update_Profile_Tab
        }
      ]
    },
  ]
});

const app = new Vue({
    el: '#app',
    components: { App },
    router
});