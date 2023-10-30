<template>
  <div class="container">
    <div>
      <a-select
        v-model:value="value1"
        :size="size"
        style="width: 200px"
        :options="options"
      ></a-select>
    </div>
    <div></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { SelectProps } from "ant-design-vue";
import citiesData from "../../data/citiesData.json";
console.log(citiesData);

const size = ref<SelectProps["size"]>("middle");
const value1 = ref("cities");

const options = citiesData.map((city) => ({
  value: city.city,
}));
</script>

<style scoped>
.container{
  margin-top: 5rem;
  margin-left: 3rem;
}
</style>
