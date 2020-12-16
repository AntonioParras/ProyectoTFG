<template>
  <div>
    <div class="form-box">
      <div class="settings-usuario">
        <h2>Ajustes de usuario</h2>
        <hr />
        <form @submit.prevent="comprobarDatosUsuario">
          <label class="icon"><i class="fas fa-user"></i></label>
          <input
            v-model="nombre"
            type="text"
            name="name"
            placeholder="Nombre"
            required
          />
          <label class="icon"><i class="fas fa-lock"></i></label>
          <input
            v-model="password"
            type="password"
            name="name"
            placeholder="Contraseña"
            required
          />
          <label class="icon"><i class="fas fa-envelope"></i></label>
          <input
            v-model="email"
            type="email"
            name="name"
            placeholder="Email"
            required
          />
          <label class="icon" for="name"><i class="fas fa-phone"></i></label>
          <input
            v-model="movil"
            type="text"
            name="name"
            placeholder="Número de teléfono"
            required
          />
          <label class="icon"><i class="fas fa-camera"></i></label>
          <input type="file" name="name" required />

          <button type="submit" class="btn">
            Modificar datos
          </button>
        </form>
        <div v-if="errors.lengt != 0">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
        <div v-if="success">
          <p class="success">Has cambiado tus datos satisfactoriamente.</p>
        </div>
      </div>
      <br />
      <div class="preferencias-usuario">
        <h2>Preferencias de usuario</h2>
        <hr />
        <form @submit.prevent="comprobarPreferenciasUsuario">
          <label class="icon"><i class="fas fa-venus-mars"></i></label>
          <select v-model="sexo" required>
            <option value="m">Macho</option>
            <option value="h">Hembra</option>
          </select>
          <h3>Selecciona hasta 3 razas diferentes</h3>
          <h4>(Solo es necesario escoger al menos 1 raza)</h4>
          <label class="icon"><i class="fas fa-dog"></i></label>
          <select v-model="raza1" required>
            <option v-for="r in razas" :key="r.id" :value="r.id">{{
              r.nombre
            }}</option>
          </select>
          <label class="icon"><i class="fas fa-dog"></i></label>
          <select v-model="raza2">
            <option v-for="r in razas" :key="r.id" :value="r.id">{{
              r.nombre
            }}</option>
          </select>
          <label class="icon"><i class="fas fa-dog"></i></label>
          <select v-model="raza3">
            <option v-for="r in razas" :key="r.id" :value="r.id">{{
              r.nombre
            }}</option>
          </select>
          <label class="icon"><i class="fas fa-sort-numeric-up"></i></label>
          <input
            v-model="edadMin"
            type="range"
            min="1"
            max="20"
            step="1"
            required
          />
          <label class="icon"><i class="fas fa-sort-numeric-up-alt"></i></label>
          <input
            v-model="edadMax"
            type="range"
            min="1"
            max="20"
            step="1"
            required
          />
          <h4>Edad : {{ edadMin }} - {{ edadMax }}</h4>
          <label class="icon"><i class="fas fa-weight"></i></label>
          <input
            v-model="pesoMin"
            type="range"
            min="1"
            max="80"
            step="1"
            required
          />
          <label class="icon"><i class="fas fa-weight"></i></label>
          <input
            v-model="pesoMax"
            type="range"
            min="1"
            max="80"
            step="1"
            required
          />
          <h4>Peso : {{ pesoMin }} - {{ pesoMax }}</h4>
          <button type="submit" class="btn">
            Establecer preferencias
          </button>
          <div v-if="errorsPref.lengt != 0">
            <p v-for="error in errorsPref" :key="error">{{ error }}</p>
          </div>
        </form>
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
      password: "",
      email: "",
      movil: "",
      foto: "",
      edadMin: "",
      edadMax: "",
      pesoMin: "",
      pesoMax: "",
      sexo: "",
      raza1: "",
      raza2: "",
      raza3: "",
      errors: [],
      success: "",
      usuario: null,
      errorsPref: [],
      count: null,
      datosUsuario: {
        id: "",
        nombre: "",
        password: "",
        email: "",
        movil: ""
      },
      preferenciasUsuario: {
        sexo: "",
        razasUsu: [],
        pesoMin: "",
        pesoMax: "",
        edadMin: "",
        edadMax: ""
      }
    };
  },
  methods: {
    comprobarDatosUsuario() {
      this.errors = [];
      if (this.nombre.length == 0) {
        this.errors.push("*-Introduce un nombre.");
      }
      if (this.password.length == 0) {
        this.errors.push("*-Introduce una contraseña.");
      }
      if (this.email.length == 0) {
        this.errors.push("*-Introduce un email.");
      }
      if (this.movil.length == 0) {
        this.errors.push("*-Introduce un movil.");
      }
      if (this.errors.length == 0) {
        this.guardarDatosUsuario();
      }
    },
    comprobarPreferenciasUsuario() {
      this.errorsPref = [];
      if (this.sexo == "") {
        this.errorsPref.push("*-Selecciona el sexo.");
      }
      if (this.raza1 == "" && this.raza2 == "" && this.raza3 == "") {
        this.errorsPref.push("*-Selecciona al menos una raza.");
      }
      if (this.edadMin == "" || this.edadMax == "") {
        this.errorsPref.push("*-Selecciona un rango de edades.");
      }
      if (this.pesoMin == "" || this.pesoMax == "") {
        this.errorsPref.push("*-Selecciona un rango de peso.");
      }
      if (this.errorsPref.length == 0) {
        this.guardarPreferencias();
      }
    },
    guardarDatosUsuario() {
      this.success = false;
      console.log(this.usuario.id);
      this.datosUsuario.nombre = this.nombre;
      this.datosUsuario.password = this.password;
      this.datosUsuario.email = this.email;
      this.datosUsuario.movil = this.movil;
      this.$store.dispatch("modificarUsuario", {
        id: this.usuario[0].id,
        nombre: this.nombre,
        password: this.password,
        email: this.email,
        telefono: this.movil
      });
      if (this.$store.state.user != null) {
        this.success = true;
      }
    },
    guardarPreferencias() {
      this.preferenciasUsuario.razasUsu = [];
      this.preferenciasUsuario.sexo = this.sexo;
      if (this.raza1 != null) {
        this.preferenciasUsuario.razasUsu.push(this.raza1);
      }
      if (this.raza2 != "") {
        this.preferenciasUsuario.razasUsu.push(this.raza2);
      }
      if (this.raza3 != "") {
        this.preferenciasUsuario.razasUsu.push(this.raza3);
      }
      this.preferenciasUsuario.edadMin = this.edadMin;
      this.preferenciasUsuario.edadMax = this.edadMax;
      this.preferenciasUsuario.pesoMin = this.pesoMin;
      this.preferenciasUsuario.pesoMax = this.pesoMax;
      if (this.preferenciasUsuario.razasUsu.length == 1) {
        axios.post("http://localhost:8080/api/sexo", {
          id_usuario: this.usuario[0].id,
          sexo: this.preferenciasUsuario.sexo
        });
        axios.post("http://localhost:8080/api/edad", {
          id_usuario: this.usuario[0].id,
          edad_max: parseInt(this.preferenciasUsuario.edadMax),
          edad_min: parseInt(this.preferenciasUsuario.edadMin)
        });
        axios.post("http://localhost:8080/api/peso", {
          id_usuario: this.usuario[0].id,
          peso_max: parseInt(this.preferenciasUsuario.pesoMax),
          peso_min: parseInt(this.preferenciasUsuario.pesoMin)
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[0])
        });
      } else if (this.preferenciasUsuario.razasUsu.length == 2) {
        axios.post("http://localhost:8080/api/sexo", {
          id_usuario: this.usuario[0].id,
          sexo: this.preferenciasUsuario.sexo
        });
        axios.post("http://localhost:8080/api/edad", {
          id_usuario: this.usuario[0].id,
          edad_max: parseInt(this.preferenciasUsuario.edadMax),
          edad_min: parseInt(this.preferenciasUsuario.edadMin)
        });
        axios.post("http://localhost:8080/api/peso", {
          id_usuario: this.usuario[0].id,
          peso_max: parseInt(this.preferenciasUsuario.pesoMax),
          peso_min: parseInt(this.preferenciasUsuario.pesoMin)
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[0])
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[1])
        });
      } else if (this.preferenciasUsuario.razasUsu.length == 3) {
        axios.post("http://localhost:8080/api/sexo", {
          id_usuario: this.usuario[0].id,
          sexo: this.preferenciasUsuario.sexo
        });
        axios.post("http://localhost:8080/api/edad", {
          id_usuario: this.usuario[0].id,
          edad_max: parseInt(this.preferenciasUsuario.edadMax),
          edad_min: parseInt(this.preferenciasUsuario.edadMin)
        });
        axios.post("http://localhost:8080/api/peso", {
          id_usuario: this.usuario[0].id,
          peso_max: parseInt(this.preferenciasUsuario.pesoMax),
          peso_min: parseInt(this.preferenciasUsuario.pesoMin)
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[0])
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[1])
        });
        axios.post("http://localhost:8080/api/raza", {
          id_usuario: this.usuario[0].id,
          id_raza: parseInt(this.preferenciasUsuario.razasUsu[2])
        });
      }
    }
  },
  created() {
    this.succes = false;
    this.usuario = this.$store.state.user;
    if (this.razas == null) {
      this.$store.dispatch("obtenerRazas");
    }
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
.settings-usuario,
.preferencias-usuario {
  margin: 0 30px;
}
.success {
  color: green;
}
input,
h2,
select,
p,
h4,
h3 {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #4c4c4c;
}

p {
  color: red;
}
h2 {
  font-size: 2vw;
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
  background-color: #ebebeb;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  border: solid 1px #cbc9c9;
}

hr {
  color: #a9a9a9;
  opacity: 0.3;
}

input[type="text"],
input[type="password"],
input[type="file"],
input[type="email"],
input[type="range"],
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
input[type="range"] {
  height: 100%;
}
input[type="file"] {
  padding-top: 5px;
}

input[type="file"] {
  margin-bottom: 25px;
}
.range-max {
  margin-left: 60px;
}
.icon {
  display: inline-block;
  width: 30px;
  background-color: #3a57af;
  padding: 9px 30px 8px 15px;
  margin-left: 30px;
  -webkit-border-radius: 4px 0px 0px 4px;
  -moz-border-radius: 4px 0px 0px 4px;
  border-radius: 4px 0px 0px 4px;
  color: white;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 0px #cbc9c9;
}
.btn {
  font-family: "Raleway", sans-serif;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2vw;
  padding: 1rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 80%;
  position: relative;
  margin-bottom: 20px;

  &::after {
    content: "\f4ff";
    font-family: "Font Awesome 5 Free";
    font-weight: 600;
    position: absolute;
    left: 93%;
    top: 50%;
    right: 0;
    bottom: 0;
    opacity: 0;
    transform: translate(-50%, -50%);
  }
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

@media screen and (max-width: 769px) {
  .form-box {
    width: 80%;
    h2 {
      font-size: 16px;
    }

    .btn {
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 560px) {
  .form-box {
    width: 100%;
    h2 {
      font-size: 16px;
    }
  }
}
@media screen and (max-width: 1201px) {
  .range-max {
    margin-left: 0;
  }
}
</style>
