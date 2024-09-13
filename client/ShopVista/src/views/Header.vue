<template>
  <div class="flex flex-row justify-between items-center">
    <div>
      <img
        src="@/assets/logo.png"
        alt="Shop Vista"
        class="w-16 h-16 rounded-full"
      />
    </div>
    <nav>
      <ul class="flex flex-row gap-8 text-blue-950 font-medium text-xl">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <!-- Updated paths for clarity -->
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/sells">Sells</router-link></li>
      </ul>
    </nav>
    <nav>
      <ul class="flex flex-row gap-5 text-blue-500 font-bold items-center">
        <li>
          <router-link to="/register">
            <button
              class="bg-blue-400 py-2 px-5 text-white rounded-xl hover:text-black"
            >
              Register
            </button>
          </router-link>
        </li>
        <li class="cursor-pointer hover:text-black" v-on:click="toggleShow">
          Login
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed } from "vue";

const store = useStore();

const toggleShow = () => {
  store.commit("isShow");
};
</script>
