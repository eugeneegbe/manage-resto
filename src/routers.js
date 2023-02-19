import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LogIn from './components/LogIn.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestuarant.vue'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'HomePage',
        component: HomePage,
        path: '/'
    },
    {
        name: 'AddRestaurant',
        component: AddRestaurant,
        path: '/add'
    },
    {
        name: 'UpdateRestaurant',
        component: UpdateRestaurant,
        path: '/update'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LogIn',
        component: LogIn,
        path: '/login'
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router