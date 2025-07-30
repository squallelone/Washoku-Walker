<script setup lang="ts">
import { ref } from 'vue'

import ErrorMessage from '@/components/ErrorMessage.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import RestaurantCard from '@/components/RestaurantCard.vue'
import Title from '@/components/Title.vue'

import useFetchRestaurants from '@/composablies/useFetchRestaurants'

import text from '../assets/siteText.json'

const api = import.meta.env.VITE_API_URL

// === Selection Data ===
const selectedLocation = ref('...')
const selectedDish = ref('...')
const searchDone = ref(false)
const dishMode = ref<'traditional' | 'freeForm'>('traditional')
const locationMode = ref<'tokyo' | 'freeForm'>('tokyo')
const { loading, fetchError, restaurants, fetchRestaurants } = useFetchRestaurants()

// === Form submission ===
async function handleSubmit(event: Event): Promise<void> {
  event.preventDefault()

  const url = `${api}/by-dish-area?dish=${selectedDish.value}&area=${selectedLocation.value}`
  await fetchRestaurants(url)
  if (restaurants) {
    searchDone.value = true
  }
}

function resetSearch(): void {
  searchDone.value = false
  restaurants.value = []
}

// === Toggle functions ===
function toggleDishMode() {
  dishMode.value === 'traditional'
    ? (dishMode.value = 'freeForm')
    : (dishMode.value = 'traditional')
}

function toggleLocationMode() {
  locationMode.value === 'tokyo'
    ? (locationMode.value = 'freeForm')
    : (locationMode.value = 'tokyo')
}
</script>

<template>
  <Title text="Search" />

  <!-- Search form, etc. -->
  <div v-if="!searchDone">
    <h2 class="text-xl text-center">Select a Food and Find a Restaurant</h2>
    <form
      class="flex flex-col gap-1 mt-2 bg-base-200 rounded-2xl shadow p-4 justify-center items-center"
      @submit="handleSubmit"
    >
      <div class="flex flex-row w-full gap-2 justify-center items-center">
        <p class="w-2/10 text-xl">Find</p>
        <!-- Dishes -->
        <select v-if="dishMode === 'traditional'" class="select" v-model="selectedDish">
          <option v-for="dish of text.dishes" :value="dish.name">{{ dish.name }}</option>
        </select>
        <input v-else type="text" class="input" placeholder="Your dish" v-model="selectedDish" />
      </div>
      <div class="flex flex-row w-full gap-2 justify-center items-center">
        <p class="w-2/10 text-xl">in</p>
        <!-- Tokyo Wards -->
        <select v-if="locationMode === 'tokyo'" class="select" v-model="selectedLocation">
          <option v-for="ward of text.tokyoWards" :value="ward">
            {{ ward }}
          </option>
        </select>
        <input v-else type="text" class="input" placeholder="A place" v-model="selectedLocation" />
      </div>
      <button type="submit" class="btn btn-primary w-5/10 mx-auto my-2">
        {{
          selectedLocation !== '...' || selectedDish !== '...'
            ? `Find ${selectedDish} in ${selectedLocation}`
            : 'Find'
        }}
      </button>
    </form>

    <!-- Search Toggles -->
    <div class="collapse bg-base-100 border-base-300 border mt-4">
      <input type="checkbox" />
      <div class="collapse-title font-semibold md:text-center">Search Options</div>
      <div class="collapse-content text-sm flex flex-col gap-2 md:flex-row md:justify-around">
        <div class="flex flex-row gap-2">
          <input type="checkbox" class="toggle" @click="toggleDishMode" />
          <span v-if="dishMode === 'traditional'">Traditional Food</span>
          <span v-else>Anything</span>
        </div>
        <div class="flex flex-row gap-2">
          <input type="checkbox" class="toggle" @click="toggleLocationMode" />
          <span v-if="locationMode === 'tokyo'">Tokyo Wards</span>
          <span v-else>Anywhere</span>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex justify-center">
    <button class="btn btn-primary" @click="resetSearch">Search again</button>
  </div>

  <!-- Search results -->
  <div v-if="loading" class="h-full">
    <LoadingSpinner />
  </div>
  <div v-else-if="fetchError">
    <ErrorMessage />
  </div>
  <div v-else-if="restaurants.length === 0 && searchDone">
    <p>No results</p>
  </div>
  <div v-else class="flex flex-col my-4 mx-auto gap-4 md:grid md:grid-cols-3">
    <div v-for="restaurant of restaurants">
      <RestaurantCard :restaurant="restaurant" />
    </div>
  </div>
</template>
