<template>
  <div>
    <a-card class="card" :title="city" :bordered="false" align="center">
      <div style="width: 300px">
        <a-typography-title :level="2"
          >{{ temperature }} &degC</a-typography-title
        >
        <br />
        <a-typography-title :level="3">{{ weather }}</a-typography-title>
      </div>
    </a-card>
  </div>
</template>
<script setup lang="ts">
import { ref, onUpdated } from "vue";
import weatherHook from "../hooks/weather.hook";
const props = defineProps({
  chosenCity: Object,
});

const city = ref(localStorage.getItem("city") || "choose your city");
const lat = ref(localStorage.getItem("lat"));
const lng = ref(localStorage.getItem("lng"));
const temperature = ref<number | string>("temprature");
const weather = ref<string>("weather");
const fetchData = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weathercode&forecast_days=1`
    );
    if (response.ok) {
      const data = await response.json();
      temperature.value = data.hourly.temperature_2m[0];
      weather.value = weatherHook(data.hourly.weathercode[0]);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error(error);
  }
};

if (lat.value && lng.value) {
  fetchData(JSON.parse(lat.value), JSON.parse(lng.value));
}

onUpdated(() => {
  if (props.chosenCity) {
    city.value = props?.chosenCity?.city;
    fetchData(
      JSON.parse(props.chosenCity.lat),
      JSON.parse(props.chosenCity.lng)
    );
  }
});
</script>

<style>
.card {
  width: 350px;
  margin-top: 3rem;
}
</style>
