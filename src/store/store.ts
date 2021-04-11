import {InjectionKey} from 'vue'
import { createStore, Store } from 'vuex'
import {login} from "../moke/moke";
import {User, UserInfo} from "../types/User";
import createPersistedState from "vuex-persistedstate";
import {Permission} from "../types/Permission";

interface NavRouter {
    name: string
    path: string
    closable: boolean
}
type RouterMap =  Map<string, NavRouter>

export interface State {
    count: number
    permissionList: Permission[]
    username: string
    routeMap: RouterMap
}

export const vuexKey: InjectionKey<Store<State>> = Symbol()

const store = createStore<State>({
    state() {
        return {
            count: 0,
            permissionList: [],
            username: '',
            routeMap: new Map<string, NavRouter>(),
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
        setRouterMap(state, {routeName, route}: {routeName: string, route: NavRouter}) {
            state.routeMap.set(routeName, route);
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
