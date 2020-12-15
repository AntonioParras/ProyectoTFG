import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    razas: null
  },
  mutations: {
    SET_USER_DATA(state, userData) {
      state.user = userData;
      localStorage.setItem("user", JSON.stringify(userData));
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem("user");
      location.reload();
    } /*
    GUARDAR_RAZAS(state, razas ) {
      localStorage.setItem('razas',JSON.stringify(razas));
    }*/
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
    } /*,
    obtenerRazas({ commit }) {
      return axios
                .get('http://localhost:8080/api/razas')
                .then(response => commit('GUARDAR_RAZAS',response.data))
    } */
  },
  modules: {},
  getters: {
    loggedIn(state) {
      return !!state.user;
    }
  }
});
