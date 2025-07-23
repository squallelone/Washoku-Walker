<script setup>
import LandingPageCard from '@/components/LandingPageCard.vue'
import text from '../assets/siteText.json'
</script>

<template>
  <div class="flex flex-col md:flex-row gap-8 w-9/10 md:w-6/10 mx-auto mt-4 md:mt-32">
    <!-- Search -->
    <LandingPageCard
      :title="text.landingPage.searchCard.title"
      :content="text.landingPage.searchCard.content"
      :link="text.landingPage.searchCard.link"
    />
    <!-- Nearby -->
    <LandingPageCard
      :title="text.landingPage.nearbyCard.title"
      :content="text.landingPage.nearbyCard.content"
      :link="text.landingPage.nearbyCard.link"
    />
  </div>
</template>
