<template>
  <div
    class="z-0 h-full fixed shadow-xl py-10 transition-all duration-500 bg-slate-900 overflow-hidden  max-md:h-screen"
    :class="arrow ? 'w-44' : 'w-16'"
  >
    <div
      class="relative flex flex-col justify-between items-center h-full pt-6"
    >
      <div
        class="text-white text-2xl absolute -top-7 right-0 hover:-translate-x-1 transition-all duration-100"
        v-on:click="arrowRight"
        :class="arrow ? 'rotate-180' : ''"
      >
        <font-awesome-icon :icon="['fas', 'circle-chevron-right']" />
      </div>
      <div>
        <router-link to="/">
          <img
            src="@/assets/logo.png"
            alt="Shop Vista"
            class="w-12 h-12 rounded-full mb-16"
          />
        </router-link>
      </div>
      <div class="w-full h-18 px-2" :class="arrow ? 'visible' : 'invisible'">
        <input
          type="text"
          placeholder="Search"
          class="h-8 w-4/5 m-auto bg-white rounded-lg pl-4 focus:outline-none focus-visible:ring text-blue-900"
          v-model="search"
          @keypress.enter="searchInput"
        />
      </div>
      <div
        class="text-white w-full h-12 overflow-hidden flex items-center justify-center hover:bg-slate-400"
        :class="arrow ? 'invisible' : 'visible'"
      >
        <font-awesome-icon
          :icon="['fas', 'magnifying-glass']"
          v-on:click="arrowRight"
        />
      </div>
      <nav class="w-full overflow-hidden">
        <ul
          v-for="item in navBar"
          :key="item"
          class="flex flex-col gap-7 text-gray-50 font-medium text-xl hover:bg-slate-400 hover:translate-x-2 transition-all duration-500"
        >
          <router-link :to="item.path">
            <li
              class="flex flex-row gap-8 mx-2 p-3 w-full hover:shadow-xl transition-all duration-500 rounded-lg"
            >
              <font-awesome-icon :icon="item.icon" /> {{ item.name }}
            </li>
          </router-link>
        </ul>
      </nav>
      <nav
        class="w-full text-xl p-3 hover:shadow-xl hover:bg-slate-400 text-gray-50 hover:translate-x-2 transition-all duration-500"
      >
        <ul>
          <li>
            <router-link to="/register">
              <div
                class="px-2 flex flex-row gap-7 w-full items-center overflow-hidden"
              >
                <font-awesome-icon
                  :icon="['fas', 'right-to-bracket']"
                />Register
              </div>
            </router-link>
          </li>
          <li class="cursor-pointer hover:text-black"></li>
        </ul>
      </nav>
    </div>
  </div>
</template>
<script setup>
import { computed, ref } from "vue";
const arrow = ref(false);
const search = ref("");
const alphabet = ["lyes", "mohamed", "ali", "salim", "sami", "souad", "sara"];
const navBar = ref([
  { name: "Home", path: "/", icon: ["fas", "home"] },
  { name: "Products", path: "/products", icon: ["fas", "fa-bag-shopping"] },
  { name: "Contact", path: "/contact", icon: ["fas", "fa-address-card"] },
  { name: "Sells", path: "/sells", icon: ["fas", "fa-cart-shopping"] },
]);

const arrowRight = () => {
  arrow.value = !arrow.value;
};
const searchInput = function () {
  const result = alphabet.filter((item) => item===search.value); // pas besoin de .value
 console.log(result);
};
</script>
