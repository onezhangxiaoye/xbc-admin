import {Permission} from "../types/Permission";


export const permissionList: Permission[] = [
    {
        name: 'menu1',
        path: '/menu1',
        component: 'Menu1',
        meta: {
            desc: '菜单1'
        },
        children: [
            {
                name: 'page1',
                path: '/page1',
                component: 'Page1',
                meta: {
                    desc: '分页1'
                },
            },
            {
                name: 'page2',
                path: '/page2',
                component: 'Page2',
                meta: {
                    desc: '分页2'
                },
            },
            {
                name: 'page3',
                path: '/page3',
                component: 'Page3',
                meta: {
                    desc: '分页3'
                },
            },
        ]
    },
    {
        name: 'menu2',
        path: '/menu2',
        component: 'Menu2',
        meta: {
            desc: '菜单2'
        },
        children: [
            {
                name: 'page4',
                path: '/page4',
                component: 'Page4',
                meta: {
                    desc: '分页4'
                },
            },
            {
                name: 'page5',
                path: '/page5',
                component: 'Page5',
                meta: {
                    desc: '分页5'
                },
            },
            {
                name: 'page6',
                path: '/page6',
                component: 'Page6',
                meta: {
                    desc: '分页6'
                },
            },
        ]
    },
]
