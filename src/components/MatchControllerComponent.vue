<template>
  <div>
    <nav class="menu-bar">
      <ul>
        <li v-for="(option, index) in menuOptionsMatch" :key="index">
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
      menuOptionsMatch: [
        { name: "Jugar", ruta: "/play" },
        { name: "Mis Matches", ruta: "/matches" }
      ]
    };
  }
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
.menu-bar {
  border-radius: 25px;
  height: fit-content;
  display: inline-flex;
  background-color: black;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0px 10%;
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
      margin: 0 8px;
      position: relative;
      cursor: pointer;
      white-space: nowrap;
      a {
        padding: 20px;
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
