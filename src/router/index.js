import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import G6 from '../views/G6.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/g6',
    name: 'G6',
    component: G6
}]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router