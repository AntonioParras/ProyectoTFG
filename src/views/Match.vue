<template>
  <div>
    <div v-if="logeado">
      <MatchControllerComponent />
    </div>
    <div v-else>
      <MatchLandingComponent />
    </div>
  </div>
</template>

<script>
import MatchLandingComponent from "@/components/MatchLandingComponent.vue";
import MatchControllerComponent from "@/components/MatchControllerComponent.vue";
export default {
  components: { MatchLandingComponent, MatchControllerComponent },
  data() {
    return {
      logeado: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
