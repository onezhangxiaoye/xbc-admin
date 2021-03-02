import {RouteMeta} from 'vue-router'

export interface Permission {
    name: string
    path: string
    component: string
    meta: RouteMeta
    children?: Permission[]
}
