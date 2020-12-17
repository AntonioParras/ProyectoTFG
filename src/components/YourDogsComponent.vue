<template>
  <div>
    <div
      class="container-dogs"
      v-for="(perro, index) in listadoPerros"
      :key="index"
    >
      <div class="dog-card">
        <img class="dog-img" :src="listadoPerros[index].foto" alt="" />
        <h3>Nombre:</h3>
        <input type="text" name="nombre" disabled :value="perro.nombre" />
        <h3>Edad:</h3>
        <input type="number" disabled :value="perro.edad" />
        <h3>Raza:</h3>
        <input
          type="text"
          disabled
          v-if="perro.id_raza == razas[perro.id_raza - 1].id"
          :value="razas[perro.id_raza - 1].nombre"
        />
        <h3>Peso:</h3>
        <input type="number" v-model="perro.peso" />
        <p>kg</p>
        <h3>Descripcion:</h3>
        <textarea type="text" v-model="perro.descripcion"></textarea>
        <button @click="comprobarDatos(index)" class="btn btn-mod">
          Modificar
        </button>
        <button @click="guardarPerroDelete(index)" class="btn btn-del">
          Eliminar
        </button>
        <div v-show="errors.length != 0">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
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
      listadoPerros: [],
      listadoPerrosAux: "",
      listadoFotos: [],
      datosUpdate: [],
      perroDelete: [],
      errors: [],
      usuario: null
    };
  },
  methods: {
    comprobarDatos(index) {
      this.errors = [];
      if (
        this.listadoPerros[index].peso != "" &&
        (this.listadoPerros[index].peso < 1 ||
          this.listadoPerros[index].peso > 80)
      ) {
        this.errors.push("*-Introduce un peso válido. (desde 1 kg hasta 80)");
      }
      if (this.errors.length == 0) {
        this.guardarDatosUpdate(this.listadoPerros[index]);
      }
    },
    guardarDatosUpdate(perro) {
      this.datosUpdate.push(perro);
      console.log(this.datosUpdate);
      axios.put("http://localhost:8080/api/getPerros", {
        id: parseInt(this.datosUpdate[0].id),
        peso: parseInt(this.datosUpdate[0].peso),
        descripcion: this.datosUpdate[0].descripcion
      });
    },
    guardarPerroDelete(index) {
      this.perroDelete.push(this.listadoPerros[index]);
      console.log(this.perroDelete);
      axios.delete("http://localhost:8080/api/getPerros", {
        data: {
          id: parseInt(this.perroDelete[0].id)
        }
      });
      location.reload();
    },
    getPerros() {
      axios
        .post("http://localhost:8080/api/getPerros", {
          id_usuario: this.$store.state.user[0].id
        })
        .then(response => {
          this.listadoPerros = response.data;
        });
    }
  },
  computed: {
    ...mapState(["razas"])
  },
  created: function() {
    var foto = require("../assets/Alfredo.png");
    this.listadoFotos.push(foto);
    this.listadoFotos.push(foto);
    this.getPerros();
    this.$store.dispatch("obtenerRazas");
  }
};
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}
textarea {
  background: lightgreen;
  border-radius: 8px;
  border: solid 2px;
  height: 100px;
  resize: none;
  width: 80%;
  margin-bottom: 10px;
}
input {
  background-image: linear-gradient(#000, #000);
  background-position: bottom 2px center;
  background-size: calc(100% - 10px) 2px;
  background-repeat: no-repeat;
  background-color: lightgreen;
  border-radius: 8px;
  border-color: white;
  border: 0;
  padding: 4px;
  margin-left: 5px;
  margin-top: 5px;
  text-align: center;
  color: black;
  font-family: "Raleway", sans-serif;
  font-size: 16px;
}
.container-dogs {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.dog-card {
  background: lightgreen;
  width: 90%;
  height: 100%;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  h3,
  p {
    font-family: "Raleway", sans-serif;
  }
  h3 {
    margin-left: 10px;
    color: #3a57af;
  }
  p {
    margin-left: 5px;
    font-size: 16px;
    padding-top: 3px;
  }
}
.dog-img {
  width: 20%;
  height: 20%;
  margin: 20px;
  border-radius: 50%;
}

.btn {
  font-family: "Raleway", sans-serif;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 16px;
  padding: 0.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 20%;
  position: relative;
  margin-bottom: 10px;

  &-mod:hover {
    background: green;
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

  &-del:hover {
    background: red;
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
@media screen and (max-width: 426px) {
  .btn {
    width: 40%;
  }
}
</style>
