import {InjectionKey} from 'vue'
import { createStore, Store } from 'vuex'
import {login} from "../moke/moke";
import {User, UserInfo} from "../types/User";
import createPersistedState from "vuex-persistedstate";
import {Permission} from "../types/Permission";

export interface State {
    count: number
    permissionList: Permission[]
    username: string
}

export const vuexKey: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
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
            return login(payload).then(res => {
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
