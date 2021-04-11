<template>
    <div class="navigation-breadcrumb">
        <ATabs v-model:activeKey="activeKey"
               hide-add
               type="editable-card"
               @tabClick="tabClick">
            <ATabPane v-for="value in routeMap" :key="value[0]" :tab="value[0]"
                      :closable="value[1].closable"></ATabPane>
        </ATabs>
    </div>
</template>

<script lang="ts">
    import {Breadcrumb, Tabs} from 'ant-design-vue'
    import {defineComponent, ref, watchEffect} from "vue";
    import {useRoute, useRouter} from 'vue-router';
    import {useStore} from 'vuex'
    import {vuexKey} from '../../store/store';


    const preventClosableRoute: string[] = [
        'home',
    ]

    export default defineComponent({
        components: {
            ABreadcrumb: Breadcrumb,
            ABreadcrumbItem: Breadcrumb.Item,
            ATabs: Tabs,
            ATabPane: Tabs.TabPane,
        },
        setup() {
            const activeKey = ref('');
            const route = useRoute();
            const router = useRouter();
            const {state: {routeMap}, commit} = useStore(vuexKey);

            watchEffect(function () {

                const routeName: string = route.name as string;
                activeKey.value = routeName;

                if (!routeMap.has(routeName)) {
                    commit('setRouterMap', {
                        routeName: 1,
                        route: {
                            name: routeName,
                            path: route.path,
                            closable: !preventClosableRoute.includes(routeName)
                        }

                    })
                }
            })

            function tabClick(activeKey$: string) {
                activeKey.value = activeKey$;
                router.push({
                    name: activeKey$,
                })
            }

            return {
                routeMap,
                activeKey,
                tabClick,
                defaultActiveKey: 'home',
            }
        }
    })
</script>

<style scoped>

</style>
