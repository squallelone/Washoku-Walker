<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="fixed bottom-0 left-0 w-full flex justify-center items-center bg-primary p-4">
    <p class="font-light">&copy; Justin Klitgaard {{ currentYear }}</p>
  </footer>
</template>
