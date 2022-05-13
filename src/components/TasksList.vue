<template>
  <div class="container">
    <TaskInput @addTask="handleAddTask($event)" />
    <p v-if="isError" class="error">{{ error }}</p>
    <SortSelect v-if="isList" @sortTask="handleSortByStatus($event)" />
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
import SortSelect from "./SortSelect.vue";
import { StorageService } from "@/services/StorageService";

@Options({
  components: {
    TaskInput,
    SingleTodo,
    SortSelect,
  },
})
export default class TasksList extends Vue {
  service = new StorageService();
  tasks: NewTask[] = [];
  error = "";
  isError = false;
  isList = false;

  mounted() {
    this.tasks = this.service.getLocalStorage();
    if (this.tasks.length > 0) {
      this.isList = true;
    }
  }

  handleAddTask(t: NewTask) {
    if (t.task.length == 0) {
      this.error = "You need to write something!";
      this.isError = true;
    } else if (t.task.length >= 20) {
      this.error = "There's a maximum of 20 characters";
      this.isError = true;
    } else if (t.task.length > 0 && t.task.length < 20) {
      this.error = "";
      this.isError = false;
      this.tasks.push(t);
      this.service.setLocalStorage(this.tasks);
      this.isList = true;
    }
  }

  handleDeleteTask(t: NewTask) {
    for (let i = 0; i < this.tasks.length; i++) {
      if (this.tasks[i].id === t.id) {
        this.tasks.splice(i, 1);
      }
      this.service.setLocalStorage(this.tasks);
      if (this.tasks.length == 0) {
        this.isList = false;
      }
    }
  }

  handleChangeState(t: NewTask) {
    t.done = !t.done;
    this.service.setLocalStorage(this.tasks);
  }
  handleSortByStatus(completed: string) {
    if (completed === "Done") {
      this.tasks.sort(function (x, y) {
        return x.done === y.done ? 0 : x.done ? -1 : 1;
      });
    } else if (completed === "Not done") {
      this.tasks.sort(function (x, y) {
        return x.done === y.done ? 0 : x.done ? 1 : -1;
      });
    }
  }
}
</script>

<style lang="scss">
@import "../assets/styles/mixinsAndVariables";
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
}
.error {
  font-family: "Josefin Slab", serif;
  font-size: 20px;
  color: $red;
}
</style>
