import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./router/index";
import { DatePicker } from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import i18next from "i18next";
import I18NextVue from "i18next-vue";
import EN from "./locale/en.json";
import FA from "./locale/fa.json";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

const userSettings = JSON.parse(localStorage.getItem("setting") || "{}");
const defaultLanguage = userSettings.locale || "en";

i18next.init({
  lng: defaultLanguage,
  resources: {
    en: {
      translation: EN,
    },
    fa: {
      translation: FA,
    },
  },
});

createApp(App)
  .use(router)
  .use(I18NextVue, { i18next })
  .use(DatePicker)
  .mount("#app");
