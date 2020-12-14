<template>
  <div>
    <div v-if="logeado">
      <MatchControllerComponent />
    </div>
    <div v-else>
      <MatchLandingComponent />
    </div>
    <FooterComponent />
  </div>
</template>

<script>
import MatchLandingComponent from "@/components/MatchLandingComponent.vue";
import MatchControllerComponent from "@/components/MatchControllerComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: {
    MatchLandingComponent,
    MatchControllerComponent,
    FooterComponent
  },
  data() {
    return {
      logeado: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
