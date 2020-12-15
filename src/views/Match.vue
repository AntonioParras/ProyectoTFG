<template>
  <div>
    <div v-if="loggedIn">
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
import { authComputed } from "../store/helpers.js";
export default {
  components: {
    MatchLandingComponent,
    MatchControllerComponent,
    FooterComponent
  },
  computed: {
    ...authComputed
  }
};
</script>

<style lang="scss" scoped></style>
