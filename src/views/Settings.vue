<template>
  <div>
    <HomeControllerComponent />
    <SettingsComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HomeControllerComponent from "@/components/HomeControllerComponent.vue";
import SettingsComponent from "@/components/SettingsComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { HomeControllerComponent, SettingsComponent, FooterComponent },
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
