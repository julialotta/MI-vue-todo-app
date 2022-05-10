<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TasksList />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TasksList from "./components/TasksList.vue";

@Options({
  components: {
    TasksList,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5ead8;
  margin-top: 5px;
}
</style>
