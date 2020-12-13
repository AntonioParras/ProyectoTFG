<template>
  <div>
    <HomeComponent v-if="logeado" />
    <LandingComponent v-else />
  </div>
</template>

<script>
import HomeComponent from "@/components/HomeComponent.vue";
import LandingComponent from "@/components/LandingComponent.vue";
export default {
  components: { HomeComponent, LandingComponent },
  data() {
    return {
      logeado: true
    };
  }
};
</script>

<style lang="scss" scoped></style>
