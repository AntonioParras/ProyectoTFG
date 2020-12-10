<template>
  <div class="container">
    <landing-component></landing-component>
    <home-component></home-component>
  </div>
</template>

<script>
// import MainMenuComponent from "@/components/MainMenuComponent.vue";
// import FooterComponent from "@/components/FooterComponent.vue";
// import MainContentComponent from "@/components/MainContentComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";
import HomeComponent from "@/components/HomeComponent.vue";
export default {
  components: { LandingComponent, HomeComponent }
};
</script>

<style lang="scss" scoped>
.container {
  padding: 1%;
  background-color: lightgrey;
}
</style>
