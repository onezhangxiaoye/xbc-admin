import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css"
import "./main.scss"

import {initUserRouter, router} from "./router/router";
import store, {vuexKey} from "./store/store";

const app = createApp(App);

app.use(store, vuexKey);
// 用户路由初始化需要放到 router use 之前，处理刷新时的路由无法匹配
initUserRouter();
app.use(router);


app.mount('#app');

export default app;
