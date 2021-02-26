import { createStore } from 'vuex'
import {login} from "../moke/moke";
import {User} from "../types/User";
import {Permission} from "../moke/permissionList";

export interface Count {
    count: number
    permissionList: Permission[]

}

const store = createStore<Count>({
    state() {
        return {
            count: 0,
            permissionList: [],
        }
    },
    mutations: {
        setCount(state, payload: number) {
            state.count += payload;
        },
        setPermissionList(state, payload) {
            state.permissionList = payload;
        },
    },
    actions: {
        login({commit}, payload: User) {
            login(payload).then(res => {
                commit('setPermissionList', res);
                return res;
            })
        }
    }
})

export default store;
