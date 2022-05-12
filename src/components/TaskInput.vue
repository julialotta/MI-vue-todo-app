<template>
  <div class="inputContainer">
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
@import "../assets/styles/mixins.scss";

.inputContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  @include for-phone-landscape-up {
    flex-direction: row;
  }
}
input {
  border: none;
  padding: 5px;
  margin-bottom: 10px;
}
button {
  margin-bottom: 10px;
  width: 100px;
  border-radius: 5px;
  border: 2px solid white;
}
</style>
