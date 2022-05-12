<template>
  <div class="taskContainer">
    <p>
      {{ singleTodo.task }}
    </p>
    <input
      class="checkbox"
      type="checkbox"
      :checked="singleTodo.done"
      @click="
        () => {
          handleChangeState();
        }
      "
    />

    <button
      class="button"
      @click="
        () => {
          handleDeleleTask();
        }
      "
    >
      ✕
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { NewTask } from "@/models/NewTask";
import { Prop } from "vue-property-decorator";

export default class TasksList extends Vue {
  @Prop() singleTodo!: NewTask;

  handleChangeState() {
    this.$emit("changeStateTask", this.singleTodo);
  }

  handleDeleleTask() {
    this.$emit("deleteTask", this.singleTodo);
  }
}
</script>

<style lang="scss">
.taskContainer {
  display: flex;
  justify-content: center;
  p {
    font-family: "Josefin Slab", serif;
    font-size: 20px;
    margin: 5px;
  }
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
  margin-left: 10px;
}
</style>
