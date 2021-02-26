import { createStore } from 'vuex'

export interface Count {
    count: number
}

const store = createStore<Count>({
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        setCount(state, payload: number) {
            state.count += payload;
        }
    }
})

export default store;
