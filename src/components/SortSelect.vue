<template>
  <Select @change="sortByStatus($event)" id="status">
    <option disabled selected>Sort by status</option>
    <option>Done</option>
    <option>Not done</option>
  </Select>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class SortSelect extends Vue {
  sortByStatus(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.$emit("sortTask", target.value);
    const selectList: HTMLSelectElement = document.getElementById(
      "status"
    ) as HTMLSelectElement;
    selectList.selectedIndex = 0;
  }
}
</script>

<style lang="scss">
@import "../assets/styles/_mixinsAndVariables.scss";
select {
  color: black;
  margin-bottom: 10px;
  border: none;
  background-color: $beige;
  font-family: "Josefin Slab";
}
</style>
