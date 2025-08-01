<script setup>
import { onMounted } from 'vue'

import CardGallery from '@/components/CardGallery.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import Title from '@/components/Title.vue'

import text from '../assets/siteText.json'

import { useBrowserLocationStore } from '@/stores/browserLoc'
import useFetchRecommendations from '@/composablies/useFetchRecommendations'

const browserLocStore = useBrowserLocationStore()
const { loading, fetchError, restaurants, fetchRecommendations } = useFetchRecommendations()
const api = import.meta.env.VITE_API_URL

onMounted(() => {
  fetchRecommendations(
    `${api}/recommendations`,
    browserLocStore.latitude,
    browserLocStore.longitude,
  )
})
</script>

<template>
  <Title :text="text.nearbySearch.title" />
  <!-- Results -->
  <div v-if="loading" class="h-full">
    <LoadingSpinner />
  </div>
  <div v-else-if="fetchError">
    <ErrorMessage />
  </div>
  <div v-else-if="restaurants.length === 0">
    <p>No results</p>
  </div>
  <CardGallery v-else :restaurants="restaurants" />
</template>
