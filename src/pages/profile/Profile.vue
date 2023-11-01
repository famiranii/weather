<template>
  <div class="profile-container">
    <div>
      <a-input
        v-model:value="setting.name"
        size="large"
        :placeholder="$t('Name')"
      />
      <a-select
        class="selector"
        v-model:value="setting.theme"
        :options="themeOptions"
        size="large"
      ></a-select>
      <a-select
        class="selector"
        v-model:value="setting.locale"
        :options="localeOptions"
        size="large"
      ></a-select>
      <div class="setting-btn">
        <a-button type="primary" @click="saveSetting">{{
          $t("Save")
        }}</a-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
import settingType from "../../types/setting.type";

let setting = reactive<settingType>({
  name: "",
  theme: "theme",
  locale: "locale",
});
const settingString = ref(localStorage.getItem("setting"));
if (settingString.value) {
  setting = reactive(JSON.parse(settingString.value));
}

const themes: string[] = ["dark", "light"];
const themeOptions = themes.map((theme) => ({
  value: theme,
}));
const locales: string[] = ["en", "fa"];
const localeOptions = locales.map((locale) => ({
  value: locale,
}));

const saveSetting = () => {
  localStorage.setItem("setting", JSON.stringify(setting));
};
</script>

<style scoped>
.profile-container {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 8rem;
  width: 300px;
  padding: 2rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.2);
}
.selector {
  width: 100%;
  margin-top: 2rem;
}
.setting-btn {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}
</style>
