<template>
  <div class="mainContent">
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
    <div class="content"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.mainContent {
  background-color: green;
  margin-top: 1%;
  border-radius: 10px;
  margin-right: 1%;
  margin-left: 1%;
  height: 800px;
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "content content content"
    "content content content"
    "content content content";
}
.content {
  margin: 25px;
  border-radius: 10px;
  background-color: lightblue;
}
</style>
