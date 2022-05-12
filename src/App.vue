<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <TasksList />
  <Footer />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TasksList from "./components/TasksList.vue";
import Footer from "./components/Footer.vue";

@Options({
  components: {
    TasksList,
    Footer,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Josefin+Slab:wght@200&display=swap");
@import "./assets/styles/mixins.scss";
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #f5ead8;
  margin: 0;
  padding: 0;
  min-height: 100vh;
}
img {
  width: 250px;
  padding: 20px 0;
  @include for-phone-landscape-up {
    width: 300px;
  }
}
</style>
