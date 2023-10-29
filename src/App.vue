<script lang="ts" setup>
import { ref } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import HeyD from "./components/HeyD.vue";
const namee = ref<string>("f");
</script>

<template>

  <h1>{{ namee }}</h1>
  <HeyD msg="farga" />
  <HelloWorld msg="Vite + Vue" title="fafe" />
</template>

<style scoped></style>
