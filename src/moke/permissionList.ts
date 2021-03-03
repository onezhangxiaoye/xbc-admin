import {Permission} from "../types/Permission";


export const permissionList: Permission[] = [
    {
        name: 'menu1',
        path: '/xbc/menu1',
        component: 'Xbc',
        meta: {
            desc: '菜单1'
        },
        children: [
            {
                name: 'page1',
                path: '/xbc/menu1/page1',
                component: 'Page1',
                meta: {
                    desc: '分页1'
                },
            },
            {
                name: 'page2',
                path: '/xbc/menu1/page2',
                component: 'Page2',
                meta: {
                    desc: '分页2'
                },
            },
            {
                name: 'page3',
                path: '/xbc/menu1/page3',
                component: 'Page3',
                meta: {
                    desc: '分页3'
                },
            },
        ]
    },
    {
        name: 'menu2',
        path: '/xbc/menu2',
        component: 'Xbc',
        meta: {
            desc: '菜单2'
        },
        children: [
            {
                name: 'page4',
                path: '/xbc/menu2/page4',
                component: 'Page4',
                meta: {
                    desc: '分页4'
                },
            },
            {
                name: 'page5',
                path: '/xbc/menu2/page5',
                component: 'Page5',
                meta: {
                    desc: '分页5'
                },
            },
            {
                name: 'page6',
                path: '/xbc/menu2/page6',
                component: 'Page6',
                meta: {
                    desc: '分页6'
                },
            },
        ]
    },
]
