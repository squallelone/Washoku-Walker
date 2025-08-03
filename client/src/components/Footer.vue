<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer
    class="fixed bottom-0 left-0 w-full flex flex-col justify-center items-center bg-primary p-4 md:p-8"
  >
    <p class="font-light">Justin Klitgaard &copy; {{ currentYear }}</p>
    <span class="flex flex-row justify-between gap-2 font-light">
      <a href="https://github.com/Justin-K-Ellis" class="underline">GitHub</a>
      <div>|</div>
      <a href="https://www.linkedin.com/in/justin-klitgaard-ellis-384b9965/" class="underline"
        >LinkedIn</a
      >
    </span>
  </footer>
</template>
