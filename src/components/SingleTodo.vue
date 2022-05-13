<template>
  <div class="taskContainer">
    <p>
      {{ singleTodo.task }}
    </p>
    <div class="buttonContainer">
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
@import "../assets/styles/mixinsAndVariables";
.taskContainer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: $red 0.9px solid;
  margin: 3px 0;
  width: 260px;
  @include for-phone-landscape-up {
    width: 300px;
  }
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
.checkbox:hover {
  cursor: pointer;
}
.button {
  border: none;
  background-color: $beige;
  margin-left: 10px;
}
.button:hover {
  cursor: pointer;
  color: $red;
}
</style>
