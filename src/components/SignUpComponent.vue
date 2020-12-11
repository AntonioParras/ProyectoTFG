<template>
  <div>
    <div class="form-box">
      <h1>Regístrate</h1>

      <form>
        <hr />
        <label class="icon" for="name"><i class="fas fa-envelope"></i></label>
        <input
          v-model="email"
          type="text"
          name="name"
          id="name"
          placeholder="Email"
          required
        />
        <label class="icon" for="name"><i class="fas fa-user"></i></label>
        <input
          v-model="nombre"
          type="text"
          name="name"
          placeholder="Nombre"
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
        <label class="icon" for="name"><i class="fas fa-lock"></i></label>
        <input
          v-model="password"
          type="password"
          name="name"
          placeholder="Contraseña"
          required
        />
        <button @click="print" class="create-btn">Crea tu cuenta</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      nombre: "",
      movil: "",
      password: ""
    };
  },
  methods: {
    print() {
      console.log("Email:" + this.email + "\nNombre: " + this.nombre);
    }
  }
};
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}

input,
h1 {
  font-family: "Raleway", sans-serif;
  font-size: 16px;
  color: #4c4c4c;
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
  width: 343px;
  height: 464px;
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
input[type="password"] {
  width: 200px;
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

input[type="password"] {
  margin-bottom: 25px;
}

.icon {
  display: inline-block;
  width: 30px;
  background-color: #3a57af;
  padding: 9px 30px 8px 15px;
  margin-left: 15px;
  -webkit-border-radius: 4px 0px 0px 4px;
  -moz-border-radius: 4px 0px 0px 4px;
  border-radius: 4px 0px 0px 4px;
  color: white;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.09);
  border: solid 0px #cbc9c9;
}

.create-btn {
  font-family: "Raleway", sans-serif;
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 2em;
  padding: 1.5rem;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  min-width: 250px;

  &::after {
    content: "\f599";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    left: 90%;
    top: 54%;
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
    padding: 1.5rem 3rem 1.5rem 1.5rem;
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
