<script lang="ts" setup>
import AppHeader from "./components/header/AppHeader.vue";
import Sidebar from "./components/sidebar/Sidebar.vue";
</script>

<template>
  <AppHeader />
  <div class="container">
    <Sidebar>
        <!-- sending router in side bar to show router behinde sidebar -->
      <RouterView />
    </Sidebar>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  height: 100vh;
}
</style>
