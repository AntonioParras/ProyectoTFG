<template>
  <div>
    <div v-for="perro in listadoPerros" :key="perro"><FormDogComponent /></div>
  </div>
</template>

<script>
import FormDogComponent from "@/components/FormDogComponent.vue";
export default {
  components: {
    FormDogComponent
  },
  data() {
    return {
      listadoPerros: [1, 2]
    };
  }
};
</script>

<style lang="scss" scoped></style>
