<template>
  <div>
    <form class="form-box" @submit.prevent="login">
      <h1>Inicia sesión</h1>
      <label class="icon"><i class="fas fa-envelope"></i></label
      ><input
        type="text"
        v-model="email"
        placeholder="Introduce tu email"
      /><br /><br />
      <label class="icon"><i class="fas fa-lock"></i></label>
      <input
        type="password"
        v-model="password"
        placeholder="Introduce tu contraseña"
      /><br />
      <p class="error">{{ error }}</p>
      <button type="submit" class="btn">Iniciar sesión</button>

      <p class="redirect">
        ¿No tienes cuenta? Crea una
        <router-link to="/sign_up">aquí</router-link>
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", {
          email: this.email,
          password: this.password
        })
        .then(() => {
          this.$router.push("/home");
        })
        .catch(err => {
          if (err.response.status == "500") {
            this.error = "La conexión con el servidor ha fallado.";
          } else {
            this.error = err.response.data;
          }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
//Clase que define el grid para colocar el menú y el componente login.
.error {
  color: red;
}
/* /* .login-container {
/*   display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 3fr 1fr;
  grid-gap: 20px; 
  p {
    font-family: "Raleway", sans-serif;
  }
} */

//Clase que coloca el menu.
/*
.main-menu-component {
   grid-column: 1/4;
  grid-row: 1/1; 
}*/

//Clase que da estilo y coloca los componentes del formulario.

/* .login-form {
  margin-top: 30px;
  input {
    border-radius: 10px;
    height: 30px;
    border: 0;
    margin-left: 8px;
    width: 40%;
  }
} */

//Contenedor que coloca y da estilo a todos los componentes del login.
/*
.login {
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 100px 150px 100px;
  grid-column: 2/2; 
  background: lightgrey;
  width: 60%;
  height: 100%;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10%;
  border-radius: 10px;
} */

//Clase que coloca y define el encabezado del contenedor de Login.
/*
.header-login {
  background: lightblue;
  width: 60%;
  //grid-row: 1/1;
  margin-left: 21%;
  padding-top: 8%;
  border-radius: 10px;
  margin-top: 20px;
} */

//Clase que coloca y define es estilo del texto debajo del botón.
/*
.redirect {
  padding: 10px;
} */

//Clase que define el estilo del botón para iniciar sesión.

:focus {
  outline: none;
}

input,
h1,
p {
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
  width: 40%;
  height: 100%;
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
  width: 70%;
  height: 35px;
  max-width: 300px;
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
  background-color: #7ee14c;
  padding: 9px 30px 8px 15px;
  margin-left: 15px;
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
  margin-bottom: 30px;
  margin-top: 20px;

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
    background: #2b3028;
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

@media screen and (max-width: 768px) {
  .form-box {
    width: 60%;
  }
}
@media screen and (max-width: 470px) {
  .form-box {
    width: 80%;
  }
}
@media screen and (max-width: 321px) {
  .form-box {
    width: 90%;
  }
}
@media screen and (max-width: 321px) {
  .form-box {
    width: 90%;
  }
}
</style>
