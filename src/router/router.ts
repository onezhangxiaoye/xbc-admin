
import {RouteRecordRaw, createRouter, createWebHashHistory} from "vue-router";
import {Permission} from "../types/Permission";
import store from "../store/store";

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

router.onError(error => {
    console.error('路由异常----',error)
})

router.beforeEach((to, from, next) => {
    const {username} = store.state;

    // 检查登录状态
    if(!username && to.name !== 'login') {
        console.log(`未登录用户强制跳转至---登录页`)
        next({
            name: 'login'
        })
    }

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

export function initUserRouter() {
    const {username, permissionList} = store.state;
    console.log(`初始化用户路由信息---`, username);

    // 检查登录状态
    if(username && Array.isArray(permissionList)) {
        addMenuRouter(permissionList);
    }
}
