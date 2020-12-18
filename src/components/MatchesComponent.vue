<template>
  <div>
    <div class="match-matches-container">
      <form @submit.prevent>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="perroId" required>
          <option
            v-for="perro in perrosUsuario"
            :key="perro.id"
            :value="perro.id"
            >{{ perro.nombre }}</option
          >
        </select>
        <button @click="getMatches" class="btn">Ver matches</button>
      </form>

      <div>
        <div v-if="!hayPerros">
          <p>
            Vaya, parece que no tienes ningún match con el perro seleccionado,
            comprueba tus preferencias.
          </p>
        </div>
        <div
          v-for="(perro1, index1) in perrosMatch"
          :key="index1"
          class="match-matches-container-card"
        >
          <img :src="perro1.foto" alt="" />
          <p>Nombre : {{ perro1.nombre }}</p>
          <p>Raza : {{ razas[perro1.id_raza - 1].nombre }}</p>
          <p>Edad : {{ perro1.edad }}</p>
          <p v-if="perro1.sexo == 'm'">Sexo : Macho</p>
          <p v-if="perro1.sexo == 'h'">Sexo : Hembra</p>
          <p>Peso : {{ perro1.peso }}</p>
          <p>Descripción: {{ perro1.descripcion }}</p>
          <p class="mg-b">
            Número dueño: <i class="fas fa-phone"></i>{{ perro1.telefono }}
          </p>
        </div>
      </div>

      <div
        v-for="(perro, index) in perrosMatch"
        :key="index"
        class="infocardContainer"
      >
        <div class="main">
          <img :src="perro.foto" />
        </div>
        <div class="textbois">
          <h3 v-if="perro.sexo == 'm'">{{ perro.nombre }} | Macho</h3>
          <h3 v-if="perro.sexo == 'h'">{{ perro.nombre }} | Hembra</h3>
          <h3>{{ razas[perro.id_raza - 1].nombre }}</h3>
          <h4>{{ perro.edad }} años | {{ perro.peso }} kg</h4>
          <h4>Número dueño: {{ perro.telefono }}</h4>
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
      perrosUsuario: null,
      perrosMatch: null,
      hayPerros: "",
      perroSeleccionado: {
        id: "",
        idUsu: "",
        nombre: "",
        raza: "",
        sexo: "",
        edad: "",
        peso: "",
        descripcion: "",
        foto: require("../assets/modelo_match/Draco.jpg")
      },
      perroId: ""
    };
  },
  methods: {
    getMatches() {
      axios
        .post("http://localhost:8080/api/getMatches", {
          id: this.perroId
        })
        .then(response => {
          this.perrosMatch = response.data;
          if (this.perrosMatch.length == 0) {
            this.hayPerros = false;
          } else {
            this.hayPerros = true;
          }
        });
    },
    getPerros() {
      axios
        .post("http://localhost:8080/api/getPerros", {
          id_usuario: this.$store.state.user[0].id
        })
        .then(response => {
          this.perrosUsuario = response.data;
        });
    }
  },
  computed: {
    ...mapState(["razas"])
  },
  created() {
    this.getPerros();
    this.$store.dispatch("obtenerRazas");
  }
};
</script>

<style lang="scss" scoped>
.mg-b {
  padding-bottom: 20px;
}
p {
  font-family: "Raleway", sans-serif;
}
.match-matches-container {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background: rgba(220, 206, 203, 0.7);
  width: 70%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 10px 5px 5px grey;
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
    display: none;
    border-radius: 10px;
    margin-left: 25%;
    margin-top: 5%;
    height: 100%;
    width: 50%;
    background: #fff;
    img {
      height: 150px;
      width: 150px;
      border-radius: 10px;
      margin-top: 20px;
    }
    p {
      font-family: "Raleway", sans-serif;
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
  font-family: "Raleway", sans-serif;
  background: #7ee14c;
  color: #2b3028;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 10%;
  position: relative;
  margin-bottom: 20px;
  margin-left: 5px;

  &:hover {
    background: #2b3028;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: #fff;
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
.infocardContainer * {
  font-family: "Fira Sans Condensed", sans-serif;
  font-weight: 300;
}
h2 {
  font-weight: 600;
  font-style: italic;
  font-family: "Fira Sans Condensed", sans-serif;
}
.infocardContainer {
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: rgb(0, 159, 255);
  background: linear-gradient(121deg, rgba(255, 255, 255, 0) 13%, #7ee14c 100%);
  transition: all 1s ease-in;
  margin: auto;
  margin-top: 100px;
  --margin-top: 100px;
}
.infocardContainer:hover {
  width: 500px;
  border-radius: 100px 10px 100px 100px;
  transition: all 1s ease-out;
}

.infocardContainer div {
  color: #2b3028;
  flex-shrink: 1;
  width: 100%;
  --background-color: green;
}
.infocardContainer div * {
  display: flex;
  --flex: inherit;
  overflow: hidden;
  text-overflow: hidden;
  --background-color: yellow;
  color: #2b3028;
  white-space: nowrap;
  width: 0;
  height: auto;
  transition: all 1s ease-in;
}
.infocardContainer:hover div * {
  --background-color: purple;
  display: flex;
  visibility: visible;
  transition: all 1s ease-out;
  width: 100%;
  height: auto;
}

.infocardContainer .main,
.infocardContainer .main img {
  --background-color: red;
  height: 200px;
  width: 200px;
  padding-right: 10px;
  border-radius: 100%;
  flex-shrink: 0;
  object-fit: cover;
}
.infocardContainer .main img {
  height: 180px;
  width: 180px;
  transition: none;
  display: float;
  position: relative;
  border: 10px solid #2b3028;
  margin: 0 0 0 0;
  padding: 0 0 0 0;
}
.infocardContainer .textbois {
  position: relative;
}

@media screen and (max-width: 426px) {
  .match-matches-container {
    &-card {
      display: block;
      img {
        width: 90%;
      }
    }
  }
  .infocardContainer,
  .main,
  .textbois {
    display: none;
  }
}
@media screen and (max-width: 582px) {
  .infocardContainer,
  .main,
  .textbois {
    display: none;
  }
  .match-matches-container {
    &-card {
      display: block;
    }
  }
}
@media screen and (max-width: 1024px) {
  .btn {
    width: 18%;
  }
}
@media screen and (max-width: 768px) {
  .btn {
    width: 25%;
  }
}
@media screen and (max-width: 425px) {
  .btn {
    width: 38%;
  }
}
</style>
