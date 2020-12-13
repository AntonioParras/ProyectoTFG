<template>
  <div>
      <MatchControllerComponent />
      <PlayComponent />
      <FooterComponent />
  </div>
</template>

<script>
import MatchControllerComponent from '@/components/MatchControllerComponent.vue';
import PlayComponent from '@/components/PlayComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
    components:  {PlayComponent , MatchControllerComponent, FooterComponent}
};
</script>

<style lang="scss" scoped></style>
