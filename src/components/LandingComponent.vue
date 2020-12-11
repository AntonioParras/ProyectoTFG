<template>
  <div>
    <div class="landingContent">
      <h1>Welcome to Pender</h1>
      <h2>Empieza a dar likes</h2>
      <div>
        <router-link to="/login"
          ><button class="login-btn">Iniciar sesión</button></router-link
        >
      </div>
      <br />
      <div>
        <router-link to="/sign_up"
          ><button class="create-btn">Crear cuenta</button></router-link
        >
      </div>
      <img class="logo-img" src="../assets/logo-demo-igca.png" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4em;
}
.logo-img {
  margin-top: 2%;
  width: 300px;
  height: 300px;
}
.landingContent {
  font-family: "Raleway", sans-serif;
  background-color: white;
  height: 800px;
  border-radius: 10px;
  padding-top: 5%;

  .login-btn {
    font-family: "Raleway", sans-serif;
    background: #bbff00;
    color: #1d1d1d;
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
      content: "\f2f6";
      font-family: "Font Awesome 5 Free";
      font-weight: 900;
      position: absolute;
      left: 89%;
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
}
</style>
