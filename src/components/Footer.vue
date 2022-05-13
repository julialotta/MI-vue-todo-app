<template>
  <div class="footerContainer">
    <p>App created by Julia-Lotta</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class Footer extends Vue {}
</script>

<style lang="scss">
@import "../assets/styles/mixinsAndVariables";
.footerContainer {
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 35px;
  background-color: $yellow;

  p {
    font-family: "Josefin Slab", serif;
    font-size: 12px;
    top: 0;
  }
}
</style>
