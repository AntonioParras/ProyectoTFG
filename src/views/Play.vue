<template>
  <div v-if="loggedIn">
    <MatchControllerComponent />
    <PlayComponent />
    <FooterComponent />
  </div>
</template>

<script>
import MatchControllerComponent from "@/components/MatchControllerComponent.vue";
import PlayComponent from "@/components/PlayComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { PlayComponent, MatchControllerComponent, FooterComponent },
  computed: {
    ...authComputed
  }
};
</script>

<style lang="scss" scoped></style>
