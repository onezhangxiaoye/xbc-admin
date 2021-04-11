<template>
    <AButton @click="loginOut">退出登录</AButton>
</template>

<script>
    import {Button} from "ant-design-vue";
    import {defineComponent} from "vue";
    import {useStore} from "vuex";
    import {vuexKey} from "../store/store";
    import {useRouter} from "vue-router";
    import {removeMenuRouter} from "../router/router";

    export default defineComponent({
        components: {
            AButton: Button,
        },
        setup() {

            const {commit} = useStore(vuexKey);
            const router =  useRouter();

            function loginOut() {
                commit('setUsername', '');
                removeMenuRouter();
                router.push({name: 'login'})
            }

            return {
                loginOut,
            }
        }
    })
</script>

<style scoped>

</style>
