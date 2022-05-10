<template>
  <div>
    <form @submit.prevent="onSubmit">
      <input
        type="text"
        placeholder="Swim in the ocean"
        v-model="task"
        @keypress.enter="handleClick"
      />
    </form>
    <button
      @click="
        () => {
          handleClick();
        }
      "
    >
      Add to bucketlist
    </button>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { NewTask } from "@/models/NewTask";
import { generateId } from "../helpers/generateId";

export default class TaskInput extends Vue {
  task = "";
  handleClick() {
    const id = generateId();
    console.log(id);
    this.$emit("addTask", new NewTask(this.task, id));
    this.task = "";
  }
  onSubmit() {
    console.log("Submitted");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
input {
  border: none;
}
button {
  border-radius: 5px;
  border: 2px solid white;
}
</style>
