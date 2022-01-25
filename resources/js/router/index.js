import axios from 'axios'
import Vue from 'vue'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const LandingPage = require('../pages/LandingPage.vue').default
const Portofolio = require('../pages/Portofolio.vue').default

import NotFound from '../pages/NotFound.vue'


const routes = [
    {
        name: 'LandingPage',
        path: '/welcome',
        component: LandingPage
    },
    {
        name: 'Portofolio',
        path: '/portofolio',
        component: Portofolio,
        props: true
    },
    {
        path: '*',
        component: NotFound
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    mode: 'history',
    routes
})

// router.beforeEach((to, from, next) => {
//     if (to.meta.requiresAuth) {
//         const authUser = JSON.parse(window.localStorage.getItem('authUser'))
//         if (authUser && authUser.access_token) {
//             next()
//         } else {
//             next({ name: 'welcome' })
//         }
//     }
//     next()
// })

export default router