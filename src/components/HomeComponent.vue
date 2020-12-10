<template>
  <div>
    <div v-if="logeado">
      <p>Estas logeao</p>
    </div>
    <div v-else>
      <login-component></login-component>
    </div>
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
export default {
  components: { LoginComponent },
  data() {
    return {
      logeado: false
    };
  }
};
</script>

<style lang="scss" scoped>

  div {
     text-align: center;
  }

</style>
