<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
  text: string
}>()
</script>

<template>
  <h1 class="font-bold text-2xl md:text-4xl text-center my-4 md:my-8">{{ props.text }}</h1>
</template>
