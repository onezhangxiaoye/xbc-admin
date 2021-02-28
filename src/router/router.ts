
import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";
import {Permission} from "../moke/permissionList";

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

router.beforeEach((to, from, next) => {
    console.log(to.name);

    next();
})

export function addMenuRouter(list: Permission[]) {
    menuToRoutes(list).forEach(v => {
        router.addRoute(v);
    })
}

function menuToRoutes(list: Permission[]): RouteRecordRaw[] {
    return list.map<RouteRecordRaw>(v => {
        return {
            name: v.name,
            path: v.path,
            component: () => import(`../view/${v.component}.vue`)
        }
    })
}