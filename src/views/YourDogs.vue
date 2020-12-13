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
export default {
  components: { HomeControllerComponent, YourDogsComponent, FooterComponent }
};
</script>

<style lang="scss" scoped></style>
