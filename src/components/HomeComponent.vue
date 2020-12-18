<template>
  <div class="home">
    <HomeControllerComponent />
    <FooterComponent class="home-footer" />
  </div>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";
import HomeControllerComponent from "@/components/HomeControllerComponent.vue";
export default {
  components: {
    FooterComponent,
    HomeControllerComponent
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-rows: 3fr 1fr;
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
