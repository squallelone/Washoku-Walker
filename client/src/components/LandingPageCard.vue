<script setup>
import { defineProps } from 'vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
  content: String,
  link: String,
})
</script>

<template>
  <section
    class="p-4 md:p-8 rounded-2xl shadow flex flex-col md:basis-full gap-4 items-center justify-center bg-base-200"
  >
    <h1 class="font-bold text-2xl md:text-3xl text-center">{{ title }}</h1>
    <p>
      {{ content }}
    </p>
    <button class="btn btn-accent">
      <RouterLink :to="link">Go</RouterLink>
    </button>
  </section>
</template>
