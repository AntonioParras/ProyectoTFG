<template>
  <div>
    <MatchControllerComponent />
    <MatchesComponent />
    <FooterComponent />
  </div>
</template>

<script>
import MatchControllerComponent from "@/components/MatchControllerComponent.vue";
import MatchesComponent from "@/components/MatchesComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { MatchesComponent, MatchControllerComponent, FooterComponent },
  computed: {
    ...authComputed
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
