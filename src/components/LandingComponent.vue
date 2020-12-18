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
      <img class="logo-img" :src="logo" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logo: require("../assets/LogoTFG.png")
    };
  }
};
</script>

<style lang="scss" scoped>
h1 {
  font-size: 4em;
}
.logo-img {
  margin-top: 2%;
  width: 40%;
  height: 100%;
}
.landingContent {
  font-family: "Raleway", sans-serif;
  background: rgba(220, 206, 203, 0.7);
  box-shadow: 10px 5px 5px grey;
  height: 100%;
  width: 40%;
  margin-left: 30%;
  border-radius: 10px;
  padding-top: 5%;

  .login-btn {
    font-family: "Raleway", sans-serif;
    background: #7ee14c;
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
  .create-btn {
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
}
@media screen and (max-width: 955px) {
  .landingContent {
    width: 60%;
    margin-left: 20%;
  }
}
@media screen and (max-width: 680px) {
  .landingContent {
    width: 80%;
    margin-left: 10%;
  }
}
@media screen and (max-width: 680px) {
  .landingContent {
    width: 100%;
    margin-left: 0;
  }
}
</style>
