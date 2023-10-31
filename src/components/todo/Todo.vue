<template>
  <a-list-item class="todo-list-container">
    <a-typography-title
      style="width: 100%"
      :contenteditable="contenteditable"
      :level="3"
      ref="text"
      >{{ props.item?.title }}</a-typography-title
    >
    <div class="icon-container">
      <EditFilled
        v-if="!contenteditable"
        @click="openEditor"
        :style="{ fontSize: '1.5rem', color: '#08c' }"
      />
      <CheckCircleFilled
        v-else
        @click="editTask"
        :style="{ fontSize: '1.5rem', color: '#08c' }"
      />
      <DeleteTwoTone
        two-tone-color="#b80d0d"
        @click="removeTask"
        :style="{ fontSize: '1.5rem', marginLeft: '4px' }"
      />
    </div>
  </a-list-item>
</template>

<script setup lang="ts">
import {
  DeleteTwoTone,
  EditFilled,
  CheckCircleFilled,
} from "@ant-design/icons-vue";
import { ref } from "vue";
const props = defineProps({
  item: Object,
});
const contenteditable = ref<boolean>(false);
const emit = defineEmits(["removeTask", "editTask"]);
const text = ref();

const removeTask = () => {
  emit("removeTask", props.item?.id);
};
const openEditor = () => {
  contenteditable.value = true;
};

const editTask = () => {
  contenteditable.value = false;
  emit("editTask", props.item?.id, text.value.textContent);
};
</script>

<style scoped>
.todo-list-container {
  display: flex;
  justify-content: space-between;
  width: 300px;
  color: #b80d0d;
}
.icon-container {
  margin-left: 4px;
  display: flex;
}
</style>
