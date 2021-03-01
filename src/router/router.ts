
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

router.beforeEach((to, from, next) => {
    console.log(to.name);

    const {username, permissionList} = store.state;
    console.log(username);

    // 检查登录状态
    if(username && to.name !== 'login') {
        addMenuRouter(permissionList);
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
