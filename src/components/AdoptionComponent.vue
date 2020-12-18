<template>
  <div>
    <div class="container">
      <div class="main-content">
        <div v-if="loggedIn" class="panel-wrapper">
          <h1 class="panel-head">Crea tu propio post</h1>
          <button class="btn" @click="toCreatePost">Crear</button>
        </div>
        <div v-if="adopciones.length == 0">
          <div class="panel-wrapper">
            <div class="panel-head">Ups...</div>
            <p>Parece que no hay adopciones disponibles en este momento.</p>
            <br />
          </div>
        </div>
        <div
          v-for="adopcion in adopciones"
          :key="adopcion.id"
          class="panel-wrapper"
        >
          <div class="panel-head">
            {{ adopcion.nombre }}
          </div>
          <div class="panel-body">
            <div><img class="img" :src="adopcion.foto" alt="" /></div>
            {{ adopcion.contenido }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { authComputed } from "../store/helpers.js";
export default {
  data() {
    return {};
  },
  methods: {
    toCreatePost() {
      this.$router.push("/create_post");
    }
  },
  computed: {
    ...mapState(["adopciones"]),
    ...mapState(["user"]),
    ...authComputed
  },
  created() {
    this.$store.dispatch("getAdopciones");
  }
};
</script>

<style lang="scss" scoped>
.img {
  display: block;
  width: 200px;
  align-self: flex-start;
  border-radius: 10px;
  margin-right: 30px;
}
.container {
  font-family: "Raleway", sans-serif;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
}
.main-content {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
}
.main-content .panel-wrapper {
  margin: 20px 0;
  box-shadow: 0px 1px 5px #777;
}
.panel-wrapper {
  background: #fff;
  border-radius: 10px;
}
.main-content .panel-wrapper .panel-head {
  background-color: #00a5f2;
  color: #fff;
  padding: 10px 10px;
  border: 1px solid #00a5f2;
  border-radius: 10px 10px 0 0;
}
.main-content .panel-wrapper .panel-body {
  display: flex;
  padding: 20px 10px;
  font-size: 80%;
}
.btn {
  font-family: "Raleway", sans-serif;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2rem;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 20%;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    background: #2b2bff;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: #ffffff;
    &::after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
}

a.button:hover {
  top: 3px;
  background-color: #2e458b;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
@media only screen and (max-width: 420px) {
  .main-content {
    width: 100%;
    margin-left: 0;
    z-index: -1;
    position: relative;
  }
}
@media only screen and (max-width: 321px) {
  .img {
    width: 100px;
  }
}
@media only screen and (max-width: 768px) {
  .main-content {
    width: 100%;
    margin-left: 0;
    z-index: -1;
    position: relative;
  }
  .btn {
    width: 60%;
  }
}
</style>
