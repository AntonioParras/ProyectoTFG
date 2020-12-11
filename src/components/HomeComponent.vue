<template>
  <div class="home">
    <div v-if="!logeado"><LandingComponent class="home-main-content" /></div>
    <div v-else>ESTAS LOGEADO</div>
    <FooterComponent class="home-footer" />
  </div>
</template>

<script>
import LandingComponent from "@/components/LandingComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    LandingComponent,
    FooterComponent
  },
  data() {
    return {
      logeado: false
    };
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
