<template>
  <div>
    <div class="match-play-container">
      <form @submit.prevent>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="perroId" required>
          <option v-for="perro in perros" :key="perro.id" :value="perro.id">{{
            perro.nombre
          }}</option>
        </select>
      </form>
      <div class="match-play-container-card">
        <div><img :src="perroActual.foto" alt="" /></div>
        <div class="match-play-container-card-btn">
          <div class="match-play-container-card-info">
            <p>{{ perroActual.nombre }}, {{ perroActual.edad }}</p>
            <br />
            <p>
              {{ perroActual.raza }}, {{ perroActual.sexo }},
              {{ perroActual.peso }}kg
            </p>
            <br />
            <p>{{ perroActual.descripcion }}</p>
            <button class="btn btn-dis">
              <i class="fas fa-heart-broken"></i></button
            ><button class="btn btn-like"><i class="fas fa-heart"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      perros: [
        { id: 1, nombre: "Alfredo" },
        { id: 2, nombre: "Draco" }
      ],
      perroId: "",
      perroActual: {
        id: 1,
        idUsu: 1,
        nombre: "Draco",
        edad: 3,
        raza: "Beagle",
        peso: 21,
        sexo: "Macho",
        foto: require("../assets/modelo_match/Draco.jpg"),
        descripcion: "Es jugueton"
      }
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
:focus {
  outline: none;
}
.match-play-container {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background-color: lightblue;
  width: 90%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  display: flex;
  flex-direction: column;
  align-items: center;
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
    margin-top: 5%;
    margin-left: 5%;
    height: 100%;
    width: 20%;
    background: transparent;
    img {
      height: 80%;
      width: 100%;
      border-radius: 10px;
      display: block;
    }
  }
  &-card-info {
    font-family: "Raleway", sans-serif;
    background: #fff;
    margin: 0;
    border-radius: 10px;
    height: 100%;
    margin-bottom: 30%;
    p {
      margin: 0;
      margin-top: 10px;
      text-align: left;
      padding: 20px;
    }
  }
}
.icon {
  display: inline-block;
  width: 30px;
  background-color: #3a57af;
  padding: 8px 30px 9px 15px;
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
  background: #d3d3d3;
  color: #2c2c2c;
  cursor: pointer;
  font-size: 16px;
  padding: 10px;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: 40%;
  position: relative;
  margin-bottom: 20px;
  margin-left: 5px;

  &-dis:hover {
    background: red;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: black;
    &::after {
      opacity: 1;
      transition: all 0.5s;
      color: #ffffff;
    }
  }
  &-like:hover {
    background: green;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
    color: red;
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
  .match-play-container-card {
    width: 50%;
  }
}

@media screen and (max-width: 426px) {
  .match-play-container-card {
    width: 50%;
  }
}
</style>
