<script setup>
import { defineProps } from 'vue'
defineProps({
  text: String,
})
</script>

<template>
  <h1 class="font-bold text-2xl md:text-4xl text-center mt-4 md:mt-8">{{ text }}</h1>
</template>
