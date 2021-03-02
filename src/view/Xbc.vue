<template>
    <div class="home">
        <div class="home-menu">
            <AMenu
                style="width: 256px"
                mode="inline"
                :openKeys="openKeys"
                v-model:selectedKeys="selectedKeys"
                @openChange="onOpenChange"
            >
                <ASubMenu key="sub1">
                    <template #title>
                          <span>
                            <span>Navigation One</span>
                          </span>
                    </template>
                    <a-menu-item key="1">Option 1</a-menu-item>
                    <a-menu-item key="2">Option 2</a-menu-item>
                    <a-menu-item key="3">Option 3</a-menu-item>
                </ASubMenu>
                <ASubMenu key="sub2">
                    <template #title>
                          <span>
                            <span>Navigation Two</span>
                          </span>
                    </template>
                    <a-menu-item key="4">Option 1</a-menu-item>
                    <a-menu-item key="5">Option 2</a-menu-item>
                    <a-menu-item key="6">Option 3</a-menu-item>
                </ASubMenu>
            </AMenu>
        </div>
        <div class="home-content">
            <RouterView />
        </div>
    </div>
</template>

<script lang="ts">
    import {computed, defineComponent, reactive, toRefs, unref} from "vue";
    import {Menu} from "ant-design-vue";

    export default defineComponent({
        components: {
            AMenu: Menu,
            ASubMenu: Menu.SubMenu,
            AMenuItem: Menu.Item,
        },
        setup() {
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

            return {
                ...toRefs(state),
                onOpenChange,
            }
        },
    })

</script>

<style scoped lang="scss">
.home {
    display: flex;
    &-content {
        flex: 1;
    }
}
</style>
