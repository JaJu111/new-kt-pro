import Vue from 'vue';
import VueRouter from 'vue-router';

import HomeComponent from '@/views/HomeView.vue';
import HomePage from '@/components/pages/HomePage.vue';
import ProductsPage from '@/components/pages/ProductsPage.vue';
import CategoriesPage from '@/components/pages/CategoriesPage.vue';
import SalesPage from '@/components/pages/SalesPage.vue';

import LoginPage from '@/components/pages/LoginPage.vue';
import RegisterPage from '@/components/pages/RegisterPage.vue';

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: HomeComponent,
        children: [
            {
                path: '/home',
                name: 'home',
                component: HomePage
            },
            {
                path: '/products',
                name: 'products',
                component: ProductsPage 
            },
            {
                path: '/categories',
                name: 'categories',
                component: CategoriesPage 
            },
            {
                path: '/sales',
                name: 'sales',
                component: SalesPage 
            }
        ]
    },
    {
        path: '/',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
