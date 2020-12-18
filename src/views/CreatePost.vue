<template>
  <div>
    <CreatePostComponent />
  </div>
</template>

<script>
import { authComputed } from "../store/helpers.js";
import CreatePostComponent from "@/components/CreatePostComponent.vue";
export default {
  components: { CreatePostComponent },
  computed: {
    ...authComputed
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped></style>
