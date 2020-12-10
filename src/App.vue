<template>
  <div id="app">
    <div id="nav">
      <main-component />
    </div>
    <router-view />
  </div>
</template>
<script>
import MainComponent from "@/components/MainComponent.vue";

export default {
  components: { MainComponent }
};
</script>
<style lang="scss">
#app {
  text-align: center;
}
</style>
