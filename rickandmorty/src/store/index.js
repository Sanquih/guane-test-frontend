import { createStore } from 'vuex'

export default createStore({
  state: {
    character: "",
  },
  getters: {
    Character(state){
      return state.character;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
