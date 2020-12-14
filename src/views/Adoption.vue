<template>
  <div>
    <AdoptionComponent />
  </div>
</template>

<script>
import AdoptionComponent from "@/components/AdoptionComponent.vue";
export default {
  components: { AdoptionComponent },
  data() {
    return {
      dato: ""
    };
  }
};
</script>

<style lang="scss" scoped></style>
