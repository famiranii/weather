<template>
  <div class="weather-container">
    <SelectCountry @cityHandler="cityHandler" />
    <CardContent :chosenCity="chosenCity" />
  </div>
</template>
<script lang="ts" setup>
import SelectCountry from "../../components/weather/SelectCountry.vue";
import CardContent from "../../components/weather/CardContent.vue";
import { ref } from "vue";
let chosenCity = ref<object>({});
const cityHandler = (city: object) => {
  chosenCity.value = city;
};
</script>

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
