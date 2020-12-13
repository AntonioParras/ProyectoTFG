<template>
    <div>
        <div class="match-matches-container">
            <form @submit.prevent>
        <label class="icon"><i class="fas fa-dog"></i></label>
        <select v-model="perroId" required>
          <option v-for="perro in perrosMatch" :key="perro.id" :value="perro.id">{{
            perro.nombre
          }}</option>
        </select>
      </form>

        <div v-for="perro in perrosMatch" :key="perro" class="match-matches-container-card">
            <div><img :src="perroSeleccionado.foto" alt=""><p>Nombre : Draco</p><p>Raza : Beagle</p><p>Edad : 3</p><p>Sexo : Macho</p><p>Peso : 21kg</p>
            <p>Descripción: Es muy jugueton</p><p class="mg-b">Número dueño: <i class="fas fa-phone"></i>123456789</p></div>
        </div>
        <div v-for="perro in perrosMatch" :key="perro" class="infocardContainer">
  <div id="main">
    <img :src="perroSeleccionado.foto">
  </div>
  <div id="textbois">
      <h3>Draco |  Beagle  |  Macho</h3>
      <h4>3 años | 21 kg | Jugueton</h4>
      <h4>Número dueño: 123456789</h4>
  </div>
</div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                      perrosMatch: [
        { id: 1, nombre: "Alfredo" },
        { id: 2, nombre: "Draco" }
      ],
                perroSeleccionado : {id:'',idUsu:'',nombre:'',raza:'',sexo:'',edad:'',peso:'',descripcion:'',foto:require('../assets/modelo_match/Draco.jpg')},
                perroId:''
            }
        }
    }
</script>

<style lang="scss" scoped>
.mg-b {
    padding-bottom:20px;
}
.match-matches-container {
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
    display:none;
    border-radius:10px;
    margin-left: 25%;
    margin-top: 5%;
    height: 100%;
    width:50%;
    background: #fff;
    img {
      height: 150px;
      width: 150px;
      border-radius: 10px;
      margin-top:20px;
      
    }
    p {
        font-family: "Raleway", sans-serif;
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

.infocardContainer * {
  font-family: 'Fira Sans Condensed', sans-serif;
  font-weight: 300;
}
h2 {
  font-weight: 600; font-style: italic; font-family: "Fira Sans Condensed", sans-serif;
}
a {
  text-decoration: none;
}
a:visited {
  color: #555566;
}
a:hover {
  text-decoration: underline;
}
.infocardContainer {
  display: flex;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  background: rgb(0,159,255);
  background: linear-gradient(121deg, rgba(255,255,255,0) 13%, rgba(0,159,255,1) 100%);
  transition: all 500ms ease-in;
  transition-delay: 1s;
  margin: auto;
  margin-top: 100px;
  --margin-top: 100px;
}
.infocardContainer:hover {
  width: 500px;
  border-radius: 100px 10px 100px 100px;
  transition: all 1s ease-out;
}

.infocardContainer div {
  text-color: white;
  flex-shrink: 1;
  width: 100%;
  --background-color: green;
}
.infocardContainer div * {
  display: flex;
  --flex: inherit;
  overflow: hidden;
  text-overflow: hidden;
  --background-color: yellow;
  color: white;
  white-space: nowrap;
  width: 0;
  height: auto;
  transition: all 450ms ease-in;
  transition-delay: 1s;
}
.infocardContainer:hover div *{
  --background-color: purple;
  display: flex;
  visibility: visible;
  transition: all 1s ease-out;
  transition-delay: 500ms;
  width: 100%;
  height: auto;
}

.infocardContainer #main, .infocardContainer #main img{
  --background-color: red;
  height: 200px;
  width: 200px;
  padding-right: 10px;
  border-radius: 100%;
  flex-shrink: 0;
  object-fit: cover;
}
.infocardContainer #main img{
  height: 180px;
  width: 180px;
  transition: none;
  display: float;
  position: relative;
  border: 10px solid white;
  margin: 0 0 0 0; padding: 0 0 0 0;
}
.infocardContainer #textbois {
  position: relative;
}
.infocardContainer #textbois #hotlinks {
  max-width: 60%;
  max-height: 30px;
  
  --background-color: white;
  position:absolute;
  bottom: 5px;
  display: flex;
  justify-content: space-between;
  border-radius: 13px;
}
.infocardContainer #textbois #hotlinks * {
  background-color: white;
  max-width: 30px;
  --margin: 0 1px 0 1px;
  border-radius: 25px;
}
@media screen and (max-width: 426px) {
    .match-matches-container{
        &-card{
            display:block;
            img{
                width:90%;
            }
        }
    }
    .infocardContainer, .main, .textbois {
        display:none;
    }
}
@media screen and (max-width: 582px) {

    .infocardContainer, .main, .textbois {
        display:none;
    }
        .match-matches-container{
        &-card{
            display:block;
        }
    }
}
</style>