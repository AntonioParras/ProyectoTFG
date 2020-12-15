<template>
  <div v-if="loggedIn">
    <HomeControllerComponent />
    <AddDogComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HomeControllerComponent from "@/components/HomeControllerComponent.vue";
import AddDogComponent from "@/components/AddDogComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { HomeControllerComponent, AddDogComponent, FooterComponent },
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
