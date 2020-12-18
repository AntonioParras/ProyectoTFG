import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    razas: null,
    adopciones: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    },
    GUARDAR_RAZAS(state, razas) {
      state.razas = razas;
    },
    MOD_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    GUARDAR_ADOPCIONES(state, adopcionesData) {
      state.adopciones = adopcionesData;
    }
  },
  actions: {
    login({ commit }, credentials) {
      return axios
        .post("http://localhost:8080/api/login", credentials)
        .then(({ data }) => {
          commit("SET_USER_DATA", data);
        });
    },
    logout({ commit }) {
      commit("CLEAR_USER_DATA");
    },
    obtenerRazas({ commit }) {
      return axios
        .get("http://localhost:8080/api/razas")
        .then(response => commit("GUARDAR_RAZAS", response.data));
    },
    modificarUsuario({ commit }, credentials) {
      return axios
        .put("http://localhost:8080/api/updateUser", credentials)
        .then(({ data }) => {
          commit("MOD_USER_DATA", data);
        });
    },
    getAdopciones({ commit }) {
      return axios
        .get("http://localhost:8080/api/adopcion")
        .then(response => commit("GUARDAR_ADOPCIONES", response.data));
    }
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
});
