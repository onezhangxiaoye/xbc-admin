## Vue 3 + Typescript + Vite + ant-design-vue@2.0.0

## 遇到的坑

1. `ant-design-vue` 安装时注意指定版本为 `@2.0.0` 否则会安装为 `@1.7.6`
2. 当前 `vite` 视乎还无法使用 `babel-plugin-import`
3. `useRouter` 在 `setup` 的第一层级，`const router = userRouter()`

## 解决的办法

1. 刷新时 `addRouter` 添加的路由信息会被清除，在 `router/use` 之前重新注册
