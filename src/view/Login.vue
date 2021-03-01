<template>
    <div class="login">
        <h1>
            Login -- {{ count }}
        </h1>
        <AForm :model="formData" ref="formRef" :rules="rules" layout="vertical">
            <AFormItem name="username" >
                <AInput v-model:value="formData.username" placeholder="用户名-admin" size="large">
                    <template #prefix>
                        <UserOutlined/>
                    </template>
                </AInput>
            </AFormItem>

            <AFormItem name="password" >
                <AInput type="password"
                        v-model:value="formData.password"
                        placeholder="密码-admin"
                        size="large">
                    <template #prefix>
                        <LockOutlined/>
                    </template>
                </AInput>
            </AFormItem>
            <AButton type="primary" block @click="onSubmit">登录</AButton>
        </AForm>
    </div>
</template>

<script lang="ts">
    import {computed, defineComponent, reactive, ref, unref} from "vue";
    import {Button, Form, Input, message} from "ant-design-vue";
    import {LockOutlined, UserOutlined} from '@ant-design/icons-vue';
    import {useStore} from 'vuex'
    import {Count} from "../store/store";
    import {User} from "../types/User";
    import {addMenuRouter} from "../router/router";
    import {useRouter} from "vue-router";
    import XButton from "../components/XButton.vue";

    export default defineComponent({
        components: {
            XButton,
            AInput: Input,
            UserOutlined,
            LockOutlined,
            AButton: Button,
            AForm: Form,
            AFormItem: Form.Item,
        },
        setup() {
            const store = useStore<Count>();

            const count = computed(() => store.state.count);

            const router = useRouter();

            const formData = reactive<User>({
                username: '',
                password: '',
            })

            const formRef = ref();

            const rules = {
                username: [
                    {
                        required: true,
                        message: '用户名不能为空',
                        trigger: 'blur'
                    },
                    {
                        min: 2,
                        max: 12,
                        message: "长度2-12",
                        trigger: 'blur'
                    }
                ],
                password: [
                    {
                        required: true,
                        message: '密码不能为空',
                        trigger: 'blur'
                    }
                ]
            };

            const onSubmit = () => {

                store.commit("setCount", 1);

                formRef.value.validate().then(() => {
                    const user = unref(formData);
                    login(user).then(res => {
                        if(res.code) {
                            addMenuRouter((res.data as UserInfo).permissionList);
                            router.push({name: 'home'})
                        } else {
                            message.error(res.message);
                        }
                    })
                }).catch(err => {
                    console.log('error', err);
                });
            };


            return {
                formRef,
                formData,
                rules,
                onSubmit,
                count,
            }
        }
    })
</script>

<style scoped lang="scss">
    .login {
        width: 38%;
        margin: 0 auto;

        .login-password {
            margin: 16px 0;
        }
    }
</style>
