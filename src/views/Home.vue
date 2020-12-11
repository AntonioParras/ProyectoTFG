<template>
  <div class="home">
    <!-- MainMenuComponent class="home-main-menu" / -->
    <LandingComponent class="home-main-content" />
    <FooterComponent class="home-footer" />
    <HomeComponent />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
//import MainMenuComponent from "@/components/MainMenuComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    HomeComponent,
    //MainMenuComponent,
    LandingComponent,
    FooterComponent
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 3fr 1fr;
  //grid-row: 10px;
}
.home-main-menu {
  grid-row: 1/1;
}
.home-main-content {
  grid-row: 1/1;
}
.home-footer {
  grid-row: 2/2;
}
</style>
