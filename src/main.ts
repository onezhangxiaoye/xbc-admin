import { createApp } from 'vue'
import App from './App.vue'
import "ant-design-vue/dist/antd.css"
import "./main.scss"

import {router} from "./router/router";
import store from "./store/store";

const app = createApp(App);

app.use(router);
app.use(store);

app.mount('#app');

export default app;
