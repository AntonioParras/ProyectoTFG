<template>
  <div>
    <div class="form-box">
      <h1>Crea tu adopción</h1>
      <form @submit.prevent="createPost">
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
        <label class="icon"><i class="fas fa-camera"></i></label>
        <input
          type="file"
          name="name"
          @change="guardarFoto"
          accept="image/*"
          required
        />
        <label class="icon-textarea" for="name">Datos</label>
        <textarea
          v-model="datos"
          placeholder="Introduce aquí datos básicos y necesario para la adopción del perro."
          required
        ></textarea>
        <p v-if="success" class="success">Has creado tu post con éxito.</p>
        <p v-if="success == false" class="error">
          Ha habido un problema al crear tu post. Comprueba los datos
          introducidos.
        </p>
        <button type="submit" class="add-btn">
          Crear
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nombre: null,
      datos: "",
      foto: null,
      fotoAdopcion: null,
      success: null
    };
  },
  methods: {
    guardarFoto(event) {
      this.foto = event.target.files[0];
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        this.fotoAdopcion = reader.result;
      });
      reader.readAsDataURL(this.foto);
    },
    createPost() {
      axios
        .post("http://localhost:8080/api/adopcion", {
          nombre: this.nombre,
          contenido: this.datos,
          foto: this.fotoAdopcion
        })
        .then(response => {
          if (response.data == 1) {
            this.success = true;
          } else {
            this.success = false;
          }
        });
    }
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
  background: #d3d3d3;
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
</style>
