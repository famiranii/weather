<template>
  <a-space direction="vertical">
    <a-input
      v-model:value="searchedCity"
      :size="size"
      style="width: 350px"
      :placeholder="$t('Search for a city')"
      @click="hidden = false"
    />
    <div class="select-city" :hidden="hidden">
      <div v-for="(item, index) in shownCity" :key="index">
        <p @click="() => setCity(item)">{{ item.city }}</p>
      </div>
    </div>
  </a-space>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";
import type { SelectProps } from "ant-design-vue";
import citiesData from "../../data/citiesData.json";
import cityType from "../../types/city.Type";

const emit = defineEmits(["cityHandler"]);

const size = ref<SelectProps["size"]>("large");
const searchedCity = ref<string>("");

const hidden = ref<boolean>(true);
const shownCity = computed(() => {
  return citiesData.filter((item) =>
    item.city.toLowerCase().includes(searchedCity.value.toLocaleLowerCase())
  );
});

const setCity = (cityInfo: cityType) => {
  hidden.value = true;
  searchedCity.value = "";
  emit("cityHandler", cityInfo);
  localStorage.setItem("city", cityInfo.city);
  localStorage.setItem("lat", cityInfo.lat);
  localStorage.setItem("lng", cityInfo.lng);
};
</script>

<style scoped>
.select-city {
  background-color: #fff;
  width: 95%;
  border: 1px solid rgb(216, 216, 216);
  border-radius: 5px;
  text-align: center;
  padding-top: 8px;
  overflow-y: scroll;
  z-index: 99;
  max-height: 40vh;
  cursor: pointer;
}
</style>
