<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <main class="main">
      <RouterView />
  </main>
</template>

<style lang="scss">
@import "@/assets/main.scss";
.main{
  height: 100vh;
  width: 100vw;
  padding: 1rem;
}
</style>
