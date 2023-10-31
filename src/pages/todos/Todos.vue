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
        @editTask="editTask"
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
const storedData = localStorage.getItem("todos");
if (storedData) {
  tasks.value = JSON.parse(storedData);
}

const setToLocalstorage = () => {
  localStorage.setItem("todos", JSON.stringify(tasks.value));
};

const addTask = () => {
  if (newTask.value) {
    tasks.value = [
      ...tasks.value,
      { id: crypto.randomUUID(), title: newTask.value },
    ];
    newTask.value = "";
  }
  setToLocalstorage();
};

const removeTask = (id: Id) => {
  console.log(id);

  const filtered = tasks.value.filter((item) => item.id !== id);
  tasks.value = filtered;
  setToLocalstorage();
};
const editTask = (id: Id, text: string) => {
  const index = tasks.value.findIndex((item) => item.id === id);
  tasks.value[index].title = text;
  console.log(tasks.value);
  setToLocalstorage();
};
</script>

<style scoped>
.todo-container {
  margin: 10rem auto;
  display: flex;
  flex-direction: column;
  width: 300px;
  align-items: center;
}
.todo-inputs {
  display: flex;
}
</style>
