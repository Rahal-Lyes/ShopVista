<template>
  <container >
    <header class="fixed top-0 left-0 w-full bg-white shadow-md p-4">
      <Header />
    </header>
    <main>
      <router-view></router-view>
    </main>
    <footer></footer>
  </container>
</template>
<script setup>
import Container from "@/template/Container.vue";
import Header from "@/views/Header.vue";
</script>
