<template>
  <a-space direction="vertical">
    <a-select
      v-model:value="value1"
      :size="size"
      style="width: 300px"
      :options="options"
    ></a-select>
  </a-space>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SelectProps } from "ant-design-vue";
import citiesData from "../../data/citiesData.json";
console.log(citiesData);

const size = ref<SelectProps["size"]>("large");
const value1 = ref("tehran");

const options = citiesData.map((city) => ({
  value: city.city,
}));
</script>
