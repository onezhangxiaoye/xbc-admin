<template>
    <div class="xbc-home-content">
        <NavigationBar/>
        <div class="xbc-home-content-box">
            <NavigationBreadcrumb />
            <RouterView/>
        </div>
    </div>
</template>

<script lang="ts">
    import NavigationBar from "./navigation/NavigationBar.vue";
    import {defineComponent, reactive, toRefs} from "vue";
    import NavigationBreadcrumb from "./navigation/NavigationBreadcrumb.vue";

    export default defineComponent({
        components: {
            NavigationBreadcrumb,
            NavigationBar,
        }
    })
</script>

<style scoped lang="scss">
    .xbc-home-content {
        flex: 1;
        display: flex;
        flex-direction: column;
        &-box {
            flex: 1;
            background-color: #f0f2f5;
            padding: 24px;
        }
    }
</style>
