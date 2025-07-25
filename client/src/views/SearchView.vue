<script setup>
import { ref } from 'vue'

import ErrorMessage from '@/components/ErrorMessage.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'
import Title from '@/components/Title.vue'

import text from '../assets/siteText.json'

const api = import.meta.env.VITE_API_URL

// === Selection Data ===
const selectedWard = ref('...')
const selectedDish = ref('...')
const searchDone = ref(false)
const loading = ref(false)
const error = ref(false)
const restaurants = ref([])

// === Form submission ===
async function handleSubmit(event) {
  event.preventDefault()

  async function fetchRestaurants() {
    loading.value = true
    const response = await fetch(
      `${api}/by-dish-area?dish=${selectedDish.value}&area=${selectedWard.value}`,
    )
    if (!response.ok) {
      console.error(response)
      error.value = true
    }
    try {
      const data = await response.json()
      restaurants.value = data
      searchDone.value = true
    } catch (error) {
      console.error(error)
      error.value = true
    } finally {
      loading.value = false
    }
  }
  fetchRestaurants()
}

function resetSearch() {
  searchDone.value = false
  restaurants.value = []
}
</script>

<template>
  <Title text="Search" />

  <!-- Search form, etc. -->
  <div v-if="!searchDone">
    <h2 class="text-xl text-center">Select a Food and Find a Restaurant</h2>
    <form
      class="flex flex-col gap-1 mt-2 bg-base-200 rounded-2xl shadow p-2 justify-center items-center"
      @submit="handleSubmit"
    >
      <p>I'm looking for</p>
      <!-- Dishes -->
      <select class="select" v-model="selectedDish">
        <option v-for="dish of text.dishes" :value="dish.name">{{ dish.name }}</option>
      </select>
      <p>in</p>
      <!-- Tokyo Wards -->
      <select class="select" v-model="selectedWard">
        <option v-for="ward of text.tokyoWards" :value="ward">
          {{ ward }}
        </option>
      </select>
      <button type="submit" class="btn btn-primary w-5/10 mx-auto my-2">
        {{
          selectedWard !== '...' || selectedDish !== '...'
            ? `Find ${selectedDish} in ${selectedWard}`
            : 'Find'
        }}
      </button>
    </form>
  </div>

  <!-- Search results -->
  <div v-if="loading" class="h-full">
    <LoadingSpinner />
  </div>
  <div v-else-if="error">
    <ErrorMessage />
  </div>
  <div v-else-if="restaurants.length === 0 && searchDone">
    <p>No results</p>
  </div>
  <div v-else class="flex flex-col my-4 mx-auto gap-4">
    <button v-if="searchDone" class="btn btn-primary" @click="resetSearch">Search again</button>
    <div v-for="restaurant of restaurants">
      <RestaurantCard :restaurantData="restaurant" />
    </div>
  </div>
</template>
