<template>
  <div>
    <div class="container">
      <div class="main-content">
        <h1>Dashboard</h1>
        <p>Here you can stuff!</p>
        <div
          v-for="adopcion in adopciones"
          :key="adopcion.id"
          class="panel-wrapper"
        >
          <div class="panel-head">
            {{ adopcion.nombre }}
          </div>
          <div class="panel-body">
            <div><img class="img" :src="foto" alt="" /></div>
            {{ adopcion.contenido }}
          </div>
          <hr />
          <div class="comment">
            <h2>Comentarios</h2>
            <div
              v-for="(comentario, index) in comentarios"
              :key="index"
              class="comment-box"
            >
              <p v-show="comentario.idAdopcion == adopcion.id">
                {{ comentario.comentario }}
              </p>
            </div>
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
      foto: require("../assets/modelo_match/Draco.jpg"),
      adopciones: [
        { id: 1, nombre: "Draco", contenido: "en adopcion muy bueno" },
        { id: 2, nombre: "Alfredo", contenido: "eses bueno" },
        { id: 3, nombre: "Alfredo", contenido: "espero es bueno" }
      ],
      comentarios: [
        {
          id: 1,
          idAdopcion: 1,
          idUsuario: 1,
          comentario: "Comentario de prueba"
        },
        { id: 2, idAdopcion: 2, idUsuario: 2, comentario: "A ver si funciona" },
        { id: 3, idAdopcion: 3, idUsuario: 3, comentario: "A ver si funciona" }
      ],
      usuario: [
        { id: 1, nombre: "Usuario 1" },
        { id: 2, nombre: "Usuario 2" },
        { id: 3, nombre: "Usuario 3" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.img {
  display: block;
  width: 200px;
  align-self: flex-start;
  border-radius: 10px;
  margin-right: 30px;
}
.container {
  font-family: "Raleway", sans-serif;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 10px;
}
.main-content {
  background-color: transparent;
  width: 100%;
  height: 100%;
  padding: 20px 30px;
}
.main-content .panel-wrapper {
  margin: 20px 0;
  box-shadow: 0px 1px 5px #777;
}
.panel-wrapper {
  background: #fff;
  border-radius: 10px;
}
.main-content .panel-wrapper .panel-head {
  background-color: #00a5f2;
  color: #fff;
  padding: 10px 10px;
  border: 1px solid #00a5f2;
  border-radius: 10px 10px 0 0;
}
.main-content .panel-wrapper .panel-body,
.comment {
  display: flex;
  padding: 20px 10px;
  font-size: 80%;
}
.comment {
  flex-direction: column;
  &-box {
    //border: solid 2px;
    height: auto;
    max-height: 200px;
    width: 40%;
    border-radius: 10px;
    align-self: center;
    word-wrap: break-word;
  }
}

@media only screen and (max-width: 420px) {
  .main-content {
    width: 100%;
    margin-left: 0;
    z-index: -1;
    position: relative;
  }
}

@media only screen and (max-width: 768px) {
  .main-content {
    width: 100%;
    margin-left: 0;
    z-index: -1;
    position: relative;
  }
}
</style>
