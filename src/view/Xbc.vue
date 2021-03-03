<template>
    <div class="home">
        <div class="home-menu">
            <AMenu
                mode="inline"
                :openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                @openChange="onOpenChange"
                @click="menuItemClick"
            >
                <ASubMenu v-for="menu in menus" :key="menu.name">
                    <template #title>
                          <span>{{ menu.meta.desc }}</span>
                    </template>
                    <a-menu-item v-for="menuItem in menu.children" :key="menuItem.name">
                        {{ menuItem.meta.desc }}
                    </a-menu-item>
                </ASubMenu>
            </AMenu>
        </div>
        <div class="home-content">
            <div class="home-content-nav">
                <LoginOutButton />
            </div>
            <div class="home-content-box">
                <RouterView />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent, reactive, toRefs} from "vue";
    import {Menu} from "ant-design-vue";
    import {useStore} from "vuex";
    import {vuexKey} from "../store/store";
    import LoginOutButton from "../components/LoginOutButton.vue";
    import {useRouter} from "vue-router";

    export default defineComponent({
        components: {
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

<style scoped lang="scss">
.home {
    display: flex;
    height: 100%;
    overflow: hidden;
    &-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        &-nav {
            background-color: #f0f0f0;
            height: 80px;
        }
        &-box {
            flex: 1;
        }
    }
    &-menu{
        width: 256px;
        background-color: #f0f0f0;
    }
}
</style>
