<template>
  <div>
    <div class="match-play-container">
      <form @submit.prevent>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="perroUsuarioActual" required>
          <option
            v-for="perro in perrosUsuario"
            :key="perro.id"
            :value="perro.id"
            >{{ perro.nombre }}</option
          >
        </select>
      </form>
      <div
        v-if="!pruebabool && perrosFiltrados.length != 0"
        class="match-play-container-card"
      >
        <div><img :src="perroActual.foto" alt="" /></div>
        <div class="match-play-container-card-btn">
          <div class="match-play-container-card-info">
            <p>{{ perroActual.nombre }}, {{ perroActual.edad }}</p>
            <br />
            <p v-if="perroActual.sexo == 'm'">
              {{ razas[perroActual.id_raza - 1].nombre }}, Macho ,
              {{ perroActual.peso }}kg
            </p>
            <p v-if="perroActual.sexo == 'h'">
              {{ razas[perroActual.id_raza - 1].nombre }}, Hembra ,
              {{ perroActual.peso }}kg
            </p>
            <br />
            <p>{{ perroActual.descripcion }}</p>
            <button @click="nextDog" class="btn btn-dis">
              <i class="fas fa-heart-broken"></i></button
            ><button @click="insertLike" class="btn btn-like">
              <i class="fas fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>
          Vaya,parece que ya no hay más perros. Ajusta tus preferencias o
          recarga la página para volver a jugar.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      perrosUsuario: [
        { id: 1, nombre: "Alfredo" },
        { id: 2, nombre: "Draco" }
      ],
      perroUsuarioActual: "",
      cont: 1,
      pruebabool: "",
      perrosFiltrados: "",
      perroActual: {},
      idPerroLike: null,
      idPerroLikeado: null
    };
  },
  methods: {
    pruebas() {
      console.log(this.perroUsuarioActual);
      if (this.perrosFiltrados.length == this.cont) {
        this.pruebabool = true;
      }
      this.perroActual = this.perrosFiltrados[this.cont];
      console.log(this.perroActual);
      console.log(this.cont);
      this.cont++;
    },
    getPerros() {
      axios
        .post("http://localhost:8080/api/getPerros", {
          id_usuario: this.$store.state.user[0].id
        })
        .then(response => {
          this.perrosUsuario = response.data;
        });
    },
    getPerrosFiltrados() {
      axios
        .post("http://localhost:8080/api/getPerrosFiltrados", {
          id_usuario: this.$store.state.user[0].id
        })
        .then(response => {
          this.perrosFiltrados = response.data;
          this.perroActual = this.perrosFiltrados[0];
        });
    },
    insertLike() {
      if (this.perrosFiltrados.length == this.cont) {
        this.pruebabool = true;
      }
      this.idPerroLike = this.perroUsuarioActual;
      this.idPerroLikeado = this.perroActual.id;
      this.perroActual = this.perrosFiltrados[this.cont];
      /*       console.log(this.perroActual);
      console.log(this.cont);
      console.log(this.idPerroLike);
      console.log(this.idPerroLikeado); */
      this.cont++;
      var fechaActual = new Date().toJSON().slice(0, 10);
      axios.post("http://localhost:8080/api/likes", {
        id_perroLike: this.idPerroLike,
        id_perroLikeado: this.idPerroLikeado,
        created_at: fechaActual
      });
    },
    nextDog() {
      if (this.perrosFiltrados.length == this.cont) {
        this.pruebabool = true;
      }
      this.idPerroLike = this.perroUsuarioActual;
      this.idPerroLikeado = this.perroActual.id;
      this.perroActual = this.perrosFiltrados[this.cont];
      this.cont++;
    }
  },
  computed: {
    ...mapState(["razas"])
  },
  created() {
    this.getPerros();
    this.getPerrosFiltrados();
    this.$store.dispatch("obtenerRazas");
  }
};
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}
p {
  font-family: "Raleway", sans-serif;
}
.match-play-container {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background: rgba(220, 206, 203, 0.7);
  width: 60%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 10px 5px 5px grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    margin-top: 5%;
    width: 100%;
    select {
      width: 20%;
      height: 35px;
      -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
      -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
      border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
      background-color: #fff;
      -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
      -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
      box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
      border: solid 1px #cbc9c9;
      margin-top: 5%;
      padding-left: 10px;
    }
  }
  &-card {
    margin-top: 5%;
    margin-left: 5%;
    height: 100%;
    width: 30%;
    background: transparent;
    img {
      height: 80%;
      width: 100%;
      border-radius: 10px;
      display: block;
    }
  }
  &-card-info {
    font-family: "Raleway", sans-serif;
    background: #fff;
    margin: 0;
    border-radius: 10px;
    height: 100%;
    margin-bottom: 30%;
    p {
      margin: 0;
      margin-top: 10px;
      text-align: left;
      padding: 20px;
    }
  }
}
.icon {
  display: inline-block;
  width: 30px;
  background-color: #7ee14c;
  padding: 8px 30px 9px 15px;
  margin-left: 30px;
  -webkit-border-radius: 4px 0px 0px 4px;
  -moz-border-radius: 4px 0px 0px 4px;
  border-radius: 4px 0px 0px 4px;
  color: #2b3028;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 0px #cbc9c9;
}
.btn {
  background: #2b3028;
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 40%;
  position: relative;
  margin-bottom: 20px;
  margin-left: 5px;

  &-dis:hover {
    background: red;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: black;
    &::after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
  &-like:hover {
    background: green;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: red;
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

@media screen and (max-width: 769px) {
  .match-play-container-card {
    width: 50%;
  }
}

@media screen and (max-width: 426px) {
  .match-play-container-card {
    width: 50%;
  }
}
</style>
