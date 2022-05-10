<template>
  <div class="container">
    <div class="listContainer">
      <p>
        {{ singleTodo.task }}
      </p>
      <input
        class="checkbox"
        type="checkbox"
        :checked="singleTodo.done"
        @click="changeState"
      />

      <button
        class="button"
        @click="
          () => {
            handleDeleleTask();
          }
        "
      >
        X
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { NewTask } from "@/models/NewTask";
import { Prop } from "vue-property-decorator";

export default class TasksList extends Vue {
  @Prop() singleTodo!: NewTask;

  changeState() {
    this.singleTodo.done = !this.singleTodo.done;
  }

  handleDeleleTask() {
    this.$emit("deleteTask", this.singleTodo);
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
