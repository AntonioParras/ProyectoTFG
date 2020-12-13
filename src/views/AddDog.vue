<template>
  <div>
    <HomeControllerComponent />
    <AddDogComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HomeControllerComponent from "@/components/HomeControllerComponent.vue";
import AddDogComponent from "@/components/AddDogComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  components: { HomeControllerComponent, AddDogComponent, FooterComponent }
};
</script>

<style lang="scss" scoped></style>
