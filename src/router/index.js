import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import G6 from '../views/G6.vue'
import g6Temp from '../views/g6Temp.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/g6',
    name: 'G6',
    component: G6
}, {
    path: '/g6Temp',
    name: 'g6Temp',
    component: g6Temp
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router