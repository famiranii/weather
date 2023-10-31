<template>
  <div class="dashboard-container">
    <a-typography-title :level="1">{{ currentTime }}</a-typography-title>
    <a-typography-title :level="2"
      >Good morning {{ setting.name }}</a-typography-title
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";
import settingType from "../../types/setting.type";

const currentTime = ref<string>(getCurrentTime());
const settingString = ref<string | null>(localStorage.getItem("setting"));
let setting = reactive<settingType>({
  name: "",
  theme: "",
  locale: "",
});
if (settingString.value) {
  setting = reactive(JSON.parse(settingString.value));
}

onMounted(() => {
  setInterval(() => {
    currentTime.value = getCurrentTime();
  }, 1000);
});

function getCurrentTime(): string {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
</script>

<style scoped>
.dashboard-container {
  text-align: center;
  margin-top: 10rem;
  background-color: beige;
}
</style>
