<script setup>
import { defineProps } from 'vue'
defineProps({
  text: String,
})
</script>

<template>
  <h1 class="font-bold text-2xl md:text-4xl text-center my-4 md:my-8">{{ text }}</h1>
</template>
