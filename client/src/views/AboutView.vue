<script setup>
import Title from '../components/Title.vue'
import text from '../assets/siteText.json'
</script>

<template>
  <Title text="About" />
  <section class="flex flex-col gap-4">
    <p class="text-justify md:text-xl" v-for="para in text.aboutPage">{{ para }}</p>
  </section>
</template>
