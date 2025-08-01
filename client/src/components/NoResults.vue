<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <p class="text-center font-bold text-2xl mt-8">{{ props.text }}</p>
</template>
