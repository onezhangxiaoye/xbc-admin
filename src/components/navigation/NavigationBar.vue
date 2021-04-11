<template>
    <div class="navigation-bar">
        <LoginOutButton />
    </div>
</template>

<script lang="ts">
    import {defineComponent, reactive, toRefs} from "vue";
    import LoginOutButton from "../LoginOutButton.vue";

    export default defineComponent({
        components: {
            LoginOutButton,
        }
    })
</script>

<style scoped lang="scss">
.navigation-bar {
    height: 72px;
}
</style>
