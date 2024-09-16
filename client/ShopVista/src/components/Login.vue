<template>
  <transition
    name="login"
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    appear
  >
    <div class="h-screen backdrop-sepia-0 flex justify-center items-center" @keyup.enter="toggleShow">
      <div
        class="relative w-3/4 h-96 bg-gradient-to-r from-cyan-500 to-blue-500 p-12 flex flex-col justify-center items-center rounded-xl"
      >
        <div
          class="absolute right-7 top-5 font-bold text-blue-50 text-2xl hover:text-red-600"
          v-on:click="toggleShow"
        >
          <font-awesome-icon :icon="['fas', 'xmark']" />
        </div>
        <div class="text-blue-600 font-medium text-3xl pb-8">
          <h1>Login</h1>
        </div>
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
          v-on:click="toggleShow"
          
        >
          Login
        </button>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from "vue";
import gsap from "gsap";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const email = ref("");
const password = ref("");
const show = computed(() => store.state.show);
const toggleShow = () => {
  store.commit("toggleShow");
};

//transition hooks

const beforeEnter = function (el, done) {
  gsap.set(el, { scale: 0, opacity: 0 });
};
const enter = function (el, done) {
  gsap.to(el, {
    scale: 1,
    opacity: 1,
    duration: 1,
    onComplete: done,
  });
};
const afterEnter = function (el, done) {
  done();
};

const beforeLeave = function (el, done) {
  gsap.set(el, { scale: 1, opacity: 1 });
  console.log("before leave");
};
const leave = function (el, done) {
  gsap.to(el, {
    scale: 0,
    opacity: 0,
    duration: 1,
    onComplete: done,
  });
};
const afterLeave = function (el, done) {
  done();
};
</script>
<!-- <style>
.email-enter-from {
  transform: scale();
}

.email-enter-active {
  transition: all 2s;
}

.email-leave-from {
  transform: scale(1);
}

.email-leave-active {
  transition: all 0.5s;
}
</style> -->
