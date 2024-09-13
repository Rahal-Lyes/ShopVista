<template>
  <div class="h-screen backdrop-sepia-0 flex justify-center items-center">
    <div
      class="w-3/4 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 p-12 flex flex-col justify-center items-center rounded-xl"
    >
      <div class="text-blue-600 font-medium text-3xl pb-8"><h1>Login</h1></div>
      <div class="p-4 text-blue-900 text-xl">
        <label class="px-3">Email:</label>
        <input
          type="email"
          class="bg-slate-200 rounded py-2 px-2 border border-slate-300 focus:border-red-800 focus:outline-none"
          placeholder="Enter your email"
          v-model="email"
        />
      </div>
      <div class="p-4 text-blue-900 text-xl">
        <label class="px-3">Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          v-model="password"
          class="bg-slate-200 rounded py-2 px-2 border border-slate-300 focus:border-red-800 focus:outline-none"
        />
      </div>
      <button
        class="py-2 w-24 rounded-lg bg-blue-200 font-semibold text-xl hover:bg-blue-300 focus:outline-none"
        v-on:click="isShow"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const email = ref("");
const password = ref("");

// Computed property to access show from Vuex store
const show = computed(() => store.state.show);


const toggleShow = () => {
  store.commit("isShow");
};
</script>
