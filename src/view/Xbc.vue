<template>
    <div class="home">
        <div class="home-menu">
            <XbcLogo />
            <XbcMenu />
        </div>
        <XbcHomeContent />
    </div>
</template>

<script lang="ts">
    import {defineComponent} from "vue";
    import XbcLogo from "../components/XbcLogo.vue";
    import XbcHomeContent from "../components/XbcHomeContent.vue";
    import XbcMenu from "../components/menu/XbcMenu.vue";

    export default defineComponent({
        components: {
            XbcMenu,
            XbcHomeContent,
            XbcLogo,
        },
    })

</script>

<style scoped lang="scss">
.home {
    display: flex;
    height: 100%;
    overflow: hidden;
    &-menu{
        width: 256px;
    }
}
</style>
