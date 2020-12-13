<template>
  <div>
    <nav class="menu-bar">
      <ul>
        <li v-for="(option, index) in menuOptionsHome" :key="index">
          <router-link class="router-link" :to="option.ruta">{{
            option.name
          }}</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOptionsHome: [
        { name: "Añadir perro", ruta: "/add_dog" },
        { name: "Ajustes", ruta: "/settings" },
        { name: "Tus perros", ruta: "/your_dogs" }
      ]
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.router-link {
  text-decoration: none;
  color: white;
  &:hover {
    color: black;
  }
}
.home-container,
.home-window {
  margin: 20px auto;
  -webkit-border-radius: 8px 8px;
  -moz-border-radius: 8px 8px;
  border-radius: 8px 8px;
  background-color: lightblue;
}
.home-container {
  width: 90%;
  height: 100%;
  min-height: 1000px;
  border: solid 1px #cbc9c9;
  -webkit-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  -moz-box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.31);
}
.home-window {
  margin-top: 5px;
  width: 90%;
  height: 70%;
}
.menu-bar {
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  background-color: black;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0px 5%;
  margin: 50px 20px 50px 20px;
  ul {
    padding-inline-start: 0px;
    li {
      display: inline-block;
      list-style: none;
      color: white;
      font-family: sans-serif;
      font-weight: bold;
      padding: 12px 16px;
      margin: 0 10px;
      position: relative;
      cursor: pointer;
      white-space: nowrap;
      a {
        padding: 2px;
      }
      &::before {
        content: " ";
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: -1;
        transition: 0.2s;
        border-radius: 25px;
      }
      &:hover {
        &::before {
          background: linear-gradient(to bottom, #e8edec, #d2d1d3);
          box-shadow: 0px 3px 20px 0px black;
          transform: scale(1.2);
        }
        color: black;
      }
    }
  }
}
</style>
