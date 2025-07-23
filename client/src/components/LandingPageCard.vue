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
  <div class="p-4 rounded-2xl shadow flex flex-col gap-4 items-center justify-center bg-base-200">
    <h1 class="font-bold text-2xl">{{ title }}</h1>
    <p>
      {{ content }}
    </p>
    <button class="btn btn-accent">
      <RouterLink :to="link">Go</RouterLink>
    </button>
  </div>
</template>
