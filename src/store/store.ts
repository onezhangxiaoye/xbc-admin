import { createStore } from 'vuex'
import {login} from "../moke/moke";
import {User, UserInfo} from "../types/User";
import createPersistedState from "vuex-persistedstate";
import {Permission} from "../types/Permission";

export interface Count {
    count: number
    permissionList: Permission[]
    username: string
}

const store = createStore<Count>({
    state() {
        return {
            count: 0,
            permissionList: [],
            username: '',
        }
    },
    mutations: {
        setCount(state, payload: number) {
            state.count += payload;
        },
        setPermissionList(state, payload) {
            state.permissionList = payload;
        },
        setUsername(state, payload) {
            state.username = payload;
        },
    },
    actions: {
        login({commit}, payload: User) {
            login(payload).then(res => {
                console.log(res)
                if(res.code === 1) {
                    const {permissionList, username} = (res.data as UserInfo);
                    commit('setPermissionList', permissionList);
                    commit('setUsername', username);
                }
                return res;
            })
        }
    },
    plugins: [createPersistedState()],
})

export default store;
