import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/index";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).use(DatePicker).mount("#app");
