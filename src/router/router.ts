
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
        name: 'xbc',
        path: '/xbc',
        component: () => import("../view/Xbc.vue"),
        children: [
            {
                name: 'home',
                path: '/xbc/home',
                component: () => import("../view/Home.vue"),
            }
        ]
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

    // 前往登录页 重置登录状态和菜单数据
    if(to.name === 'login') {
        store.commit('setUsername', '');
        store.commit('setPermissionList', []);
    }

    // 检查登录状态
    if(!username && to.name !== 'login') {
        console.log(`未登录用户强制跳转至---登录页`)
        next({
            name: 'login'
        })
    } else {
        next();
    }
})

let menuRouterNames: string[] = [];

export function addMenuRouter(list: Permission[]) {
    const childrenRoutes = list.reduce((a: Permission[], b: Permission) => {
        if(Array.isArray(b.children)) {
            a.push(...b.children);
        }
        return a;
    }, [])
    menuToRoutes(childrenRoutes).forEach(v => {
        router.addRoute('xbc', v);
    })
}

export function removeMenuRouter() {
    for (const menuRouterName of menuRouterNames) {
        // 二级路由在移除他的父级时会被移除 开发环境下会又警告
        router.removeRoute(menuRouterName);
    }
}

function menuToRoutes(list: Permission[]): RouteRecordRaw[] {
    return list.map<RouteRecordRaw>(v => {
        const route: RouteRecordRaw = {
            name: v.name,
            path: v.path,
            component: () => import(`../view/${v.component}.vue`),
            children: []
        };

        menuRouterNames.push(v.name);

        if(v.children) {
            route.children = menuToRoutes(v.children);
        }

        return route;
    })
}

export function initUserRouter() {
    const {username, permissionList} = store.state;
    console.log(`初始化用户路由信息---`, username || '未登录状态，不进行初始化');

    // 检查登录状态
    if(username && Array.isArray(permissionList)) {
        addMenuRouter(permissionList);
    }
}
