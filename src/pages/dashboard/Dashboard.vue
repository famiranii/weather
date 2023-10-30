<template>
  <div class="dashboard-container">
    <a-typography-title :level="1">{{ currentTime }}</a-typography-title>
    <a-typography-title :level="2"
      >Good morning {{ username }}</a-typography-title
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const currentTime = ref<string>(getCurrentTime());
const username = ref<string | null>(localStorage.getItem("user-nadinsoft"));

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
