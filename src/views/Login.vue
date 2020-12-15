<template>
  <div>
    <LoginComponent v-if="!loggedIn" />
  </div>
</template>

<script>
import LoginComponent from "@/components/LoginComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { LoginComponent },
  computed: {
    ...authComputed
  },
  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
