
import { createWebHistory, createRouter } from 'vue-router'
import Main from "../layouts/main.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component : () => import('../views/HomePage.vue'),
            meta: {
                layout: Main
            }
        }
    ]
})