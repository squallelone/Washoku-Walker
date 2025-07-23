<script setup>
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
  <Navbar />
  <div class="gap-8 w-9/10 md:w-6/10 mx-auto mt-4 md:mt-32">
    <RouterView />
  </div>
</template>
