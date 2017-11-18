import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/Index'
import App from '@/pages/App/App'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        name: 'Index',
        component: Index
    }, {
        path: '/app',
        name: 'App',
        component: App
    }]
})