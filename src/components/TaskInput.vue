<template>
  <form @submit.prevent="" class="form">
    <input
      type="text"
      placeholder="Swim in the ocean..."
      v-model="task"
      @keypress.enter="handleClick"
    />
    <button
      type="button"
      @click="
        () => {
          handleClick();
        }
      "
    >
      Add to bucketlist
    </button>
  </form>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
import { NewTask } from "@/models/NewTask";
import { generateId } from "../helpers/generateId";

export default class TaskInput extends Vue {
  task = "";
  handleClick() {
    const id = generateId();
    this.$emit("addTask", new NewTask(this.task, id));
    this.task = "";
  }
}
</script>

<style scoped lang="scss">
@import "../assets/styles/_mixinsAndVariables.scss";

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
input {
  border: none;
  border: 0.9px solid $orange;
  background-color: $beige;

  border-radius: 5px;
  padding: 5px;
  height: 30px;
  width: 200px;
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-size: 18px;
}
button {
  height: 30px;
  margin: 10px 0;
  width: 150px;
  border-radius: 5px;
  border: none;
  background-color: $yellow;
  font-family: "Josefin Slab", serif;
  font-weight: 600;
  font-size: 15px;
}

button:hover {
  cursor: pointer;
  color: white;
}
</style>
