<script lang="ts" setup>
import SelectCountry from "../../components/weather/SelectCountry.vue";
import CardContent from "../../components/weather/CardContent.vue";
</script>
<template>
  <div class="weather-container">
    <SelectCountry />
    <CardContent />
  </div>
</template>

<style scoped>
.weather-container {
  margin: 0 auto;
  margin-top: 5rem;
  height: 50vh;
}
@media screen and (min-width: 700px) {
  .weather-container {
    display: flex;
    margin-top: 10rem;
  }
}
</style>
