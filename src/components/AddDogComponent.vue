<template>
  <div>
    <div>
      <div class="form-box">
        <h1>Añade tu perro</h1>

        <form @submit.prevent="comprobarDatos">
          <hr />
          <label class="icon"><i class="fas fa-paw"></i></label>
          <input
            v-model="nombre"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            required
          />
          <label class="icon"><i class="fas fa-venus-mars"></i></label>
          <select v-model="sexo" required>
            <option value="m">Macho</option>
            <option value="h">Hembra</option>
          </select>
          <label class="icon"><i class="fas fa-dog"></i></label>
          <select v-model="raza" required>
            <option v-for="r in razas" :key="r.id" :value="r.id">{{
              r.nombre
            }}</option>
          </select>
          <label class="icon"><i class="fas fa-sort-numeric-up-alt"></i></label>
          <input
            ref="edadP"
            v-model="edad"
            type="number"
            name="name"
            placeholder="Edad"
            required
          />
          <label class="icon"><i class="fas fa-weight"></i></label>
          <input
            v-model="peso"
            type="number"
            name="name"
            placeholder="Peso"
            required
          />
          <label class="icon"><i class="fas fa-camera"></i></label>
          <input
            type="file"
            name="name"
            @change="guardarFoto"
            accept="image/*"
            required
          />
          <label class="icon-textarea" for="name">Descripción</label>
          <textarea
            v-model="descripcion"
            placeholder="Descripción..."
            required
          ></textarea>
          <button type="submit" class="add-btn">
            Añadir
          </button>
        </form>
        <div v-if="errors.lengt != 0">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <p v-if="success" class="success">Has añadido a tu perro con éxito.</p>
        <p v-if="success == false" class="error">
          Error al añadir perro. Comprueba los datos introducidos.
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
      nombre: "",
      sexo: "",
      raza: "",
      edad: "",
      peso: "",
      descripcion: "",
      foto: null,
      errors: [],
      success: null,
      datos: {
        id_usuario: "",
        id_raza: "",
        nombre: "",
        sexo: "",
        peso: "",
        edad: "",
        descripcion: "",
        foto: "",
        fotoperfil: "",
        created_at: "",
        updated_at: ""
      },
      usuario: null
    };
  },
  methods: {
    comprobarDatos() {
      this.errors = [];
      for (let i = 0; i < this.nombre.length; i++) {
        if (
          this.nombre.charAt(i) == "1" ||
          this.nombre.charAt(i) == "2" ||
          this.nombre.charAt(i) == "3" ||
          this.nombre.charAt(i) == "4" ||
          this.nombre.charAt(i) == "5" ||
          this.nombre.charAt(i) == "6" ||
          this.nombre.charAt(i) == "7" ||
          this.nombre.charAt(i) == "8" ||
          this.nombre.charAt(i) == "9" ||
          this.nombre.charAt(i) == "0"
        ) {
          this.errors.push("*-El nombre no puede contener números.");
        }
      }
      if (this.edad != "" && (this.edad < 1 || this.edad > 20)) {
        this.errors.push("*-Introduce una edad válida. (desde 1 año hasta 20)");
      }
      if (this.peso != "" && (this.peso < 1 || this.peso > 80)) {
        this.errors.push("*-Introduce un peso válido. (desde 1 kg hasta 80)");
      }
      if (this.errors.length == 0) {
        this.guardarDatos();
      }
    },
    guardarDatos() {
      var fechaActual = new Date().toJSON().slice(0, 10);
      this.datos.id_usuario = this.usuario[0].id;
      this.datos.id_raza = this.raza;
      this.datos.nombre = this.nombre;
      this.datos.sexo = this.sexo;
      this.datos.peso = this.peso;
      this.datos.edad = this.edad;
      this.datos.descripcion = this.descripcion;
      (this.datos.created_at = fechaActual),
        (this.datos.updated_at = fechaActual);
      axios
        .post("http://localhost:8080/api/perros", {
          id_usuario: this.datos.id_usuario,
          id_raza: this.datos.id_raza,
          nombre: this.datos.nombre,
          sexo: this.datos.sexo,
          peso: parseInt(this.datos.peso),
          edad: parseInt(this.datos.edad),
          descripcion: this.datos.descripcion,
          foto: this.fotoperfil,
          created_at: this.datos.created_at,
          updated_at: this.datos.updated_at
        })
        .then(response => {
          if (response.data == 1) {
            this.success = true;
          } else {
            this.success = false;
          }
        });
    },
    obtenerRazas() {
      this.$store.dispatch("obtenerRazas");

      /*axios
        .get("http://localhost:8080/api/razas")
        .then(response => (this.razas = response.data)); */
      this.usuario = this.$store.state.user;
    },
    guardarFoto(event) {
      this.foto = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.fotoperfil = reader.result;
      });
      reader.readAsDataURL(this.foto);
      console.log(this.foto.result);
    }
  },
  created() {
    this.obtenerRazas();
  },
  computed: {
    ...mapState(["razas"])
  }
};
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}

input,
h1,
select,
p {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #4c4c4c;
}
.success {
  color: green;
}
.error {
  color: red;
}
h1 {
  font-size: 32px;
  font-weight: 300;
  color: #4c4c4c;
  text-align: center;
  padding-top: 10px;
  margin-bottom: 10px;
}

.form-box {
  margin: 20px auto;
  width: 40%;
  height: 80%;
  -webkit-border-radius: 8px/7px;
  -moz-border-radius: 8px/7px;
  border-radius: 8px/7px;
  background: rgba(220, 206, 203, 0.9);
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 10px 5px 5px grey;
  border: solid 1px #cbc9c9;
}

form {
  margin: 0 30px;
}

hr {
  color: #a9a9a9;
  opacity: 0.3;
}

input[type="text"],
input[type="password"],
input[type="number"],
input[type="file"],
textarea,
select {
  width: 80%;
  height: 35px;
  -webkit-border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  -moz-border-radius: 0px 4px 4px 0px/0px 0px 4px 4px;
  border-radius: 0px 4px 4px 0px/5px 5px 4px 4px;
  background-color: #fff;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 1px #cbc9c9;
  margin-top: 13px;
  padding-left: 10px;
}
input[type="file"] {
  padding-top: 5px;
}

input[type="password"] {
  margin-bottom: 25px;
}

.icon,
.icon-textarea {
  display: inline-block;
  width: 30px;
  background-color: #7ee14c;
  padding: 9px 30px 8px 15px;
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
.icon-textarea {
  width: 80%;
  margin-top: 10px;
  border-radius: 4px 4px 4px 4px;
  margin-left: 20px;
  font-family: "Raleway", sans-serif;
}
textarea {
  width: 80%;
  margin-left: 30px;
  border-radius: 4px 4px 4px 4px;
  margin-bottom: 20px;
  height: 100px;
  resize: none;
  font-family: "Raleway", sans-serif;
}
.add-btn {
  font-family: "Raleway", sans-serif;
  background: #7ee14c;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2em;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 80%;
  position: relative;
  margin-bottom: 20px;

  &:hover {
    background: #2b3028;
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

@media screen and (max-width: 620px) {
  h1 {
    font-size: 16px;
    font-weight: 300;
    color: #4c4c4c;
    text-align: center;
    padding-top: 10px;
    margin-bottom: 10px;
  }
  .icon-textarea {
    width: 80%;
    margin-top: 10px;
    border-radius: 4px 4px 4px 4px;
    margin-left: 20px;
    font-family: "Raleway", sans-serif;
    font-size: 12px;
  }
}
@media screen and (max-width: 1105px) {
  .form-box {
    width: 60%;
  }
}
@media screen and (max-width: 745px) {
  .form-box {
    width: 80%;
  }
}
@media screen and (max-width: 565px) {
  .form-box {
    width: 100%;
  }
}
</style>
