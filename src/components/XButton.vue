<template>
    <button>
        <slot>按钮</slot>
        <slot name="aaa" >

        </slot>
    </button>
</template>

<script>
    export default {
        name: "XButton",
        data() {
            return {
                name: "name"
            }
        },
    }
</script>

<style scoped>

</style>