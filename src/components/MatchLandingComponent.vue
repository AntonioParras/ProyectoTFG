<template>
  <div>
    <div class="match-landing-container">
      <div class="match-landing-container-card1">
        <div><img :src="modelo1" alt="" /></div>
        <div class="card-info">
          <p>Draco, 3</p>
          <br />
          <p>Beagle, Macho, 21kg</p>
          <br />
          <p>Es muy juguetón pero bastante nervioso</p>
        </div>
      </div>
      <div class="msg">
        <div class="heart"></div>
        <div class="msg-msg"><p>Empieza a dar likes ahora</p></div>
      </div>
      <div class="match-landing-container-card3">
        <div><img :src="modelo2" alt="" /></div>
        <div class="card-info">
          <p>Betty, 5</p>
          <br />
          <p>Beagle, Hembra, 14kg</p>
          <br />
          <p>
            Es MUY cabezota, lista, poco obediente (porque básicamente es
            cabezota) y cada vez más cariñosa
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modelo1: require("../assets/modelo_match/Draco.jpg"),
      modelo2: require("../assets/modelo_match/Betty.jpg")
    };
  }
};
</script>

<style lang="scss" scoped>
.match-landing-container {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background: rgba(220, 206, 203, 0.9);
  width: 90%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 10px 5px 5px grey;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-card1 {
    margin-left: 10%;
  }
  &-card3 {
    margin-right: 10%;
  }
  &-card1,
  &-card3 {
    height: 100%;
    width: 25%;
    background: transparent;
    img {
      height: 80%;
      width: 100%;
      border-radius: 10px;
      display: block;
      max-height: 350px;
      min-height: 350px;
    }
  }
  p {
    margin: 0;
    font-family: "Raleway", sans-serif;
  }
}
.card-info {
  margin: 0;
  background: #fff;
  border-radius: 10px;
}
.msg {
  display: flex;
  flex-direction: column;
  align-items: center;
  &-msg {
    padding-top: 100px;
  }
}
.heart {
  background-color: #7ee14c;
  width: 50px;
  height: 50px;
  position: relative;
  transform: rotate(45deg);
  animation: animateHeart 1.2s infinite;

  &::before,
  &::after {
    content: "";
    width: 50px;
    height: 50px;
    background-color: #7ee14c;
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    left: -25px;
  }

  &::after {
    top: -24px;
    left: 0px;
  }
}

@keyframes animateHeart {
  0% {
    transform: rotate(45deg) scale(0.8);
  }
  5% {
    transform: rotate(45deg) scale(0.9);
  }
  10% {
    transform: rotate(45deg) scale(0.8);
  }
  15% {
    transform: rotate(45deg) scale(1);
  }
  50% {
    transform: rotate(45deg) scale(0.8);
  }
  100% {
    transform: rotate(45deg) scale(0.8);
  }
}
</style>
