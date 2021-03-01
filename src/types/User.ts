import {Permission} from "./Permission";

export interface User {
    username: string
    password: string
}

export interface UserInfo {
    username: string
    permissionList: Permission[]
}
