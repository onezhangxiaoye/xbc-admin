
import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        name: 'login',
        path: '/',
        component: () => import("../view/Login.vue")
    },
    {
        name: 'testView',
        path: '/test',
        component: () => import("../view/TestView.vue")
    },
]

export const router = createRouter({
    history: createWebHashHistory(),
    routes,
})
