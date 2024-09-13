import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      show: false,
    };
  },
  mutations: {
    isShow(state) {
      state.show = !state.show;
    },
  },
});

export default store;
