<template>
  <div class="flex">
    <div class="flex-grow">
      <Header />
      <SideBar />

      <main>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script setup>
import Container from "@/template/Container.vue";

import SideBar from "@/components/SideBar.vue";
</script>
