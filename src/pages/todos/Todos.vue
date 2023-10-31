<template>
  <div class="todo-container" @keydown.enter="addTask">
    <div class="todo-inputs">
      <a-input v-model:value="newTask" placeholder="Add a new task" />
      <a-button @click="addTask">Add Task</a-button>
    </div>
    <a-list :dataSource="tasks">
      <Todo
        v-for="(item, index) in tasks"
        :key="index"
        :item="item"
        @removeTask="removeTask"
      />
    </a-list>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import todoType, { Id } from "../../types/todo.type";
import Todo from "../../components/todo/Todo.vue";

const newTask = ref<string>("");
const tasks = ref<todoType[]>([]);

const addTask = () => {
  if (newTask.value) {
    tasks.value = [
      ...tasks.value,
      { id: crypto.randomUUID(), title: newTask.value },
    ];
    newTask.value = "";
  }
  console.log(tasks.value);
};

const removeTask = (id: Id) => {
  console.log(id);

  const filtered = tasks.value.filter((item) => item.id !== id);
  tasks.value = filtered;
};
</script>

<style scoped>
.todo-container {
  margin: 5rem auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
}
.todo-inputs {
  display: flex;
}
</style>
