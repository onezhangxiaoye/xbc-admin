<template>
    <teleport to="body">
        <div class="xbc-message">
            <div class="xbc-message-text">ask回到北京安徽师大</div>
        </div>
    </teleport>
</template>

<script>
    export default {
        name: "Message"
    }
</script>

<style scoped lang="scss">
.xbc-message {
    display: flex;
    justify-content: center;
    &-text {
        position: absolute;
        top: 0;
    }
}
</style>
