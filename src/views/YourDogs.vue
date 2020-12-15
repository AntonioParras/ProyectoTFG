<template>
  <div>
    <HomeControllerComponent />
    <YourDogsComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HomeControllerComponent from "@/components/HomeControllerComponent.vue";
import YourDogsComponent from "@/components/YourDogsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { HomeControllerComponent, YourDogsComponent, FooterComponent },
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
