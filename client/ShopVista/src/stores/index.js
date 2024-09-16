import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      show: false,
    };
  },
  mutations: {
    toggleShow(state) {
      state.show = !state.show;
    },
  },
  actions: {  
    toggleShow({ commit }) {
      commit('toggleShow');
    },
  },
  getters: {
    show: (state) => state.show,
  },
});

export default store;
