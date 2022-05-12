<template>
  <div class="container">
    <TaskInput @addTask="handleAddTask($event)" />
    <SingleTodo
      @deleteTask="handleDeleteTask($event)"
      @changeStateTask="handleChangeState($event)"
      v-for="t in tasks"
      :key="t.id"
      :singleTodo="t"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NewTask } from "@/models/NewTask";
import TaskInput from "./TaskInput.vue";
import SingleTodo from "./SingleTodo.vue";
import { StorageService } from "@/services/StorageService";

@Options({
  components: {
    TaskInput,
    SingleTodo,
  },
})
export default class TasksList extends Vue {
  service = new StorageService();
  tasks: NewTask[] = [];

  //this.service.setLocalStorage(this.tasks);
  mounted() {
    this.tasks = this.service.getLocalStorage();
  }

  handleAddTask(t: NewTask) {
    console.log(this.tasks);
    this.tasks.push(t);
    this.service.setLocalStorage(this.tasks);
  }

  handleDeleteTask(t: NewTask) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === t.id) {
        this.tasks.splice(i, 1);
      }
      this.service.setLocalStorage(this.tasks);
    }
  }

  handleChangeState(t: NewTask) {
    t.done = !t.done;
    this.service.setLocalStorage(this.tasks);
  }
}
</script>

<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.listContainer {
  display: flex;
  justify-content: center;
}
input {
  text-align: center;
}
.checkbox {
  margin: 0;
  align-self: center;
  margin-left: 10px;
}
.button {
  border: none;
  background-color: antiquewhite;
}
</style>
