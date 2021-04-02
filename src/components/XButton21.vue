<template>
    <button @click="handlerClick">按钮</button>
</template>

<script lang="ts">
    import NavigationBar from "./navigation/NavigationBar.vue";
    import {defineComponent, reactive, toRefs} from "vue";
    import NavigationBreadcrumb from "./navigation/NavigationBreadcrumb.vue";

    export default defineComponent({
        components: {
            NavigationBreadcrumb,
            NavigationBar,
        },
        setup() {
            function handlerClick() {

            }

            return {
                handlerClick,
            }
        }
    })
</script>

<style scoped>

</style>
