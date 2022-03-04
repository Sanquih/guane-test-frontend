import { createStore } from "vuex";

export default createStore({
  state: {
    character: "",
  },
  getters: {
    character(state) {
      return state.character;
    },
  },
  mutations: {
    setCharacter(state, character) {
      state.character = character;
    },
  },
  actions: {
    setCharacter(context, character) {
      context.commit("setCharacter", character);
    },
  },
  modules: {},
});
