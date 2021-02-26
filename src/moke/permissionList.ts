
export interface Permission {
    name: string
    path: string
    component: string
}

export const permissionList: Permission[] = [
    {
        name: 'home',
        path: '/home',
        component: 'Home'
    },
]