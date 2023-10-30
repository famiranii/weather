<template>
  <a-space direction="vertical">
    <a-select
      v-model:value="chosenCity"
      :size="size"
      style="width: 300px"
      :options="options"
    ></a-select>
  </a-space>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import type { SelectProps } from "ant-design-vue";
import citiesData from "../../data/citiesData.json";

const emit = defineEmits(["cityHandler"]);

const size = ref<SelectProps["size"]>("large");
const chosenCity = ref<string>(localStorage.getItem("city") || "choose city");
const options = citiesData.map((city) => ({
  value: city.city,
}));

watch(chosenCity, () => {
  const cityInfo = citiesData.find((item) => item.city === chosenCity.value);
  emit("cityHandler", cityInfo);
  localStorage.setItem("city", chosenCity.value);
  if (cityInfo) {
    localStorage.setItem("lat", cityInfo?.lat);
    localStorage.setItem("lng", cityInfo?.lng);
  }
});
</script>
