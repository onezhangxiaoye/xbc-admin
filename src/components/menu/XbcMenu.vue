<template>
    <AMenu
        mode="inline"
        :openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        @openChange="onOpenChange"
        @click="menuItemClick"
    >
        <ASubMenu v-for="menu in menus" :key="menu.name">
            <template #title>
                {{ menu.meta.desc }}
            </template>
            <a-menu-item v-for="menuItem in menu.children" :key="menuItem.name">
                {{ menuItem.meta.desc }}
            </a-menu-item>
        </ASubMenu>
    </AMenu>
</template>

<script lang="ts">
    import {defineComponent, reactive, toRefs} from "vue";
    import LoginOutButton from "../LoginOutButton.vue";
    import {useStore} from "vuex";
    import {vuexKey} from "../../store/store";
    import {useRouter} from "vue-router";
    import XbcHomeContent from "../XbcHomeContent.vue";
    import XbcLogo from "../XbcLogo.vue";
    import NavigationBar from "../navigation/NavigationBar.vue";
    import {Menu} from "ant-design-vue";

    export default defineComponent({
        components: {
            XbcHomeContent,
            XbcLogo,
            NavigationBar,
            LoginOutButton,
            AMenu: Menu,
            ASubMenu: Menu.SubMenu,
            AMenuItem: Menu.Item,
        },
        setup() {

            const {state: {permissionList: menus}} = useStore(vuexKey);
            const router = useRouter();

            const state = reactive({
                rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
                openKeys: ['sub1'],
                selectedKeys: [],
            });

            function onOpenChange(openKeys: string[]) {
                const latestOpenKey = openKeys.find(key => state.openKeys.indexOf(key) === -1);
                if (state.rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
                    state.openKeys = openKeys;
                } else {
                    state.openKeys = latestOpenKey ? [latestOpenKey] : [];
                }
            }

            function menuItemClick({ key }: {key: string}) {
                router.push({name: key})
            }

            return {
                ...toRefs(state),
                onOpenChange,
                menus,
                menuItemClick,
            }
        },
    })
</script>

<style scoped>

</style>
