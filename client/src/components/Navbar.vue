<script setup>
import { RouterLink } from 'vue-router'
import NavBtn from './NavBtn.vue'
</script>

<template>
  <header class="flex justify-between items-center p-4 bg-base-200">
    <h1 class="font-bold text-2xl text-primary-content">
      <RouterLink to="/">Washoku Walker</RouterLink>
    </h1>
    <nav class="flex justify-around gap-2">
      <NavBtn>
        <RouterLink to="/about">About</RouterLink>
      </NavBtn>

      <!-- <NavBtn>
        <RouterLink to="/login">Login</RouterLink>
      </NavBtn> -->
    </nav>
  </header>
</template>
