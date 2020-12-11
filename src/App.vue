<template>
  <div id="app">
    <MainMenuComponent />
  </div>
</template>
<script>
//import Home from "@/views/Home.vue";
//import LoginComponent from "@/components/LoginComponent.vue";
import MainMenuComponent from "@/components/MainMenuComponent.vue";

export default {
  components: { MainMenuComponent }
};
</script>
<style lang="scss">
#app {
  text-align: center;
}
* {
  box-sizing: border-box;
}
</style>
