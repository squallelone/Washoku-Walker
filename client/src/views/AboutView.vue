<script setup>
import Title from '../components/Title.vue'
import text from '../assets/siteText.json'
</script>

<template>
  <Title text="About" />
  <div class="flex flex-col w-9/10 md:w-5/10 mx-auto gap-4">
    <p class="text-justify" v-for="para in text.aboutPage">{{ para }}</p>
  </div>
</template>
