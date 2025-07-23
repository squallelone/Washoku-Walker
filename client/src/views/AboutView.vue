<script setup>
import Title from '../components/Title.vue'
import text from '../assets/siteText.json'
</script>

<template>
  <Title text="About" />
  <div class="flex flex-col gap-4">
    <p class="text-justify md:text-xl" v-for="para in text.aboutPage">{{ para }}</p>
  </div>
</template>
