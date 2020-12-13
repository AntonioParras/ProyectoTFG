<template>
  <div>
      <MatchControllerComponent />
      <MatchesComponent />
      <FooterComponent />
  </div>
</template>

<script>
import MatchControllerComponent from '@/components/MatchControllerComponent.vue';
import MatchesComponent from '@/components/MatchesComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    components: { MatchesComponent, MatchControllerComponent, FooterComponent }
};
</script>

<style lang="scss" scoped></style>
