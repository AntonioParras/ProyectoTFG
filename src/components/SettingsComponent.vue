<template>
  <div>
    <div class="form-box">
      <div class="settings-usuario">
        <h2>Ajustes de usuario</h2>
        <hr />
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

        <button @click="comprobarDatosUsuario" class="btn">
          Modificar datos
        </button>
        <div v-if="errors.lengt != 0">
          <p v-for="error in errors" :key="error">{{ error }}</p>
        </div>
      </div>
      <br />
      <div class="preferencias-usuario">
        <h2>Preferencias de usuario</h2>
        <hr />
        <label class="icon"><i class="fas fa-venus-mars"></i></label>
        <select v-model="sexo" required>
          <option value="m">Macho</option>
          <option value="h">Hembra</option>
          <option value="mh">Ambos</option>
        </select>
        <h3>Selecciona hasta 3 razas diferentes</h3>
        <h4>(Solo es necesario escoger al menos 1 raza)</h4>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="raza3" required>
          <option value="m">Macho</option>
          <option value="h">Hembra</option>
        </select>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="raza1" required>
          <option value="m">Macho</option>
          <option value="h">Hembra</option>
        </select>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="raza2" required>
          <option value="m">Macho</option>
          <option value="h">Hembra</option>
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
        <button @click="comprobarPreferenciasUsuario" class="btn">
          Establecer preferencias
        </button>
        <div v-if="errorsPref.lengt != 0">
          <p v-for="error in errorsPref" :key="error">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      errorsPref: [],
      datosUsuario: {
        nombre: "",
        password: "",
        email: "",
        movil: "",
        foto: ""
      },
      preferenciasUsuario: {
        sexo: "",
        razas: [],
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
      this.datosUsuario.nombre = this.nombre;
      this.datosUsuario.password = this.password;
      this.datosUsuario.email = this.email;
      this.datosUsuario.movil = this.movil;
    },
    guardarPreferencias() {
      this.preferenciasUsuario.sexo = this.sexo;
      if (this.raza1 != "") {
        this.preferenciasUsuario.razas.push(this.raza1);
      }
      if (this.raza2 != "") {
        this.preferenciasUsuario.razas.push(this.raza2);
      }
      if (this.raza3 != "") {
        this.preferenciasUsuario.razas.push(this.raza3);
      }
      this.preferenciasUsuario.edadMin = this.edadMin;
      this.preferenciasUsuario.edadMax = this.edadMax;
      this.preferenciasUsuario.pesoMin = this.pesoMin;
      this.preferenciasUsuario.pesoMax = this.pesoMax;
    }
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

form {
  margin: 0 30px;
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
.home-container,
.home-window {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background-color: lightblue;
  //-webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  //-moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  //box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  //border: solid 1px #cbc9c9;
}
.home-container {
  width: 90%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
}
@media screen and (max-width: 426px) {
  .btn {
    font-size: 1vw;
  }
}
@media screen and (max-width: 1201px) {
  .range-max {
    margin-left: 0;
  }
}
</style>
