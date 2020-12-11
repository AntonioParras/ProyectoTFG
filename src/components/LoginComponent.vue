<template>
  <div class="login-container">
    <div class="login">
      <p class="header-login">Inicia sesión</p>
      <form class="login-form" action="">
        <i class="fas fa-user"></i
        ><input type="text" placeholder="Introduce tu usuario" /><br /><br />
        <i class="fas fa-lock"></i
        ><input type="password" placeholder="Introduce tu contraseña" /><br />
      </form>
      <button class="login-btn">Iniciar sesión</button>
      <p class="redirect">
        ¿No tienes cuenta? Crea una
        <router-link to="/sign_up">aquí</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
//Clase que define el grid para colocar el menú y el componente login.

.login-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 3fr 1fr;
  grid-gap: 20px;

  p {
    font-family: "Raleway", sans-serif;
  }
}

//Clase que coloca el menu.

.main-menu-component {
  grid-column: 1/4;
  grid-row: 1/1;
}

//Clase que da estilo y coloca los componentes del formulario.

.login-form {
  margin-top: 30px;

  input {
    border-radius: 10px;
    height: 30px;
    border: 0;
    margin-left: 8px;
  }
}

//Contenedor que coloca y da estilo a todos los componentes del login.

.login {
  grid-row: 2/3;
  display: grid;
  grid-template-rows: 100px 150px 100px;
  grid-column: 2/2;
  background: lightgrey;
  width: 300px;
  height: 90%;
  text-align: center;
  margin-left: 20%;
  margin-right: 20%;
  margin-top: 10%;
  border-radius: 10px;
}

//Clase que coloca y define el encabezado del contenedor de Login.

.header-login {
  background: lightblue;
  width: 60%;
  grid-row: 1/1;
  margin-left: 21%;
  padding-top: 8%;
  border-radius: 10px;
  margin-top: 20px;
}

//Clase que coloca y define es estilo del texto debajo del botón.

.redirect {
  padding: 10px;
}

//Clase que define el estilo del botón para iniciar sesión.

.login-btn {
  grid-row: 3/3;
  margin-top: 20px;
  font-family: "Raleway", sans-serif;
  background: #bbff00;
  color: #1d1d1d;
  cursor: pointer;
  font-size: 1em;
  padding: 1.5rem;
  margin-left: 22%;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 60%;
  position: relative;

  &::after {
    content: "\f2f6";
    font-family: "Font Awesome 5 Free";
    font-weight: 900;
    position: absolute;
    left: 89%;
    top: 58%;
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

@media screen and (max-width: 515px) {
  .login {
    margin-left: 5%;
    margin-right: 10%;
    width: 100%;
  }
}
</style>
