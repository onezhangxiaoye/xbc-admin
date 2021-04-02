<template>
    <div>
        <h1 @click="handlerClick">Page1</h1>
        <Message />
        <button @click="click">调整</button>
    </div>
</template>

<script>
    import Message from "../components/Message.vue";
    import {ref, defineComponent, watchEffect, watch} from 'vue'
    import {useRouter} from "vue-router";

    export default defineComponent({
        components: {Message},
        setup() {
            const count = ref(0);
            const router = useRouter();

            watch(count, function (newVal) {
                console.log('watch', newVal)
            }, {
                immediate: true
            })

            watchEffect(function () {
                console.log('watchEffect', count.value)
            })

            function handlerClick() {
                count.value += 1;
                count.value += 1;
            }

            function click() {
                router.push({name: 'page5'})
            }

            return {
                count,
                handlerClick,
                click,
            }
        }
    })
</script>

<style scoped>

</style>
