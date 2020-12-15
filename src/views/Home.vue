<template>
  <div>
    <HomeComponent v-if="loggedIn" />
    <LandingComponent v-else />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { HomeComponent, LandingComponent },
  computed: {
    ...authComputed
  }
};
</script>

<style lang="scss" scoped></style>
