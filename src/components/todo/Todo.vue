<template>
    <a-list-item class="todo-list-container">
        <a-typography-title :level="3">{{
          props.item?.title
        }}</a-typography-title>
        <DeleteTwoTone
          @click="removeTask"
          :style="{ fontSize: '1.5rem', color: '#08c' }"
        />
    </a-list-item>
</template>

<script setup lang="ts">
import { DeleteTwoTone } from "@ant-design/icons-vue";
const props = defineProps({
  item: Object,
});
const emit = defineEmits(["removeTask"]);

const removeTask = () => {
  console.log(props.item?.id);

  emit("removeTask", props.item?.id);
};
console.log(props.item);
</script>

<style scoped>
.todo-list-container {
  width: 300px;
}
</style>
