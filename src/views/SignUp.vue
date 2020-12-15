<template>
  <div>
    <SignUpComponent />
  </div>
</template>

<script>
import SignUpComponent from "@/components/SignUpComponent.vue";
import { authComputed } from "../store/helpers.js";
export default {
  components: { SignUpComponent },
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
