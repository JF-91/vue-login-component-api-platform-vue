import {  createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("../App.vue"),
        },
        {
            path: '/login',
            name:'login',
            component: () => import('../shared/pages/Login.vue'),
        },
        {
            path: '/register',
            name:'register',
            component: () => import('../shared/pages/Register.vue'),
        }

    ],
});

export default router;