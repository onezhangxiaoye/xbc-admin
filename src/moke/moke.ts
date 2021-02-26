import {User} from "../types/User";
import {permissionList, Permission} from "./permissionList";

const admin: User = {
    username: 'admin',
    password: 'admin',
}

interface ResponseData<T> {
    message: string
    code: number
    data: T
}

export function login(user: User) {

    return new Promise<ResponseData<Permission[] | string>>(resolve => {
        if(user.username === admin.username && user.password === admin.password) {
            resolve({
                message: 'success',
                code: 1,
                data: permissionList
            });
        } else {
            resolve({
                message: '用户名或者密码错误',
                code: 0,
                data: ""
            })
        }
    })
}