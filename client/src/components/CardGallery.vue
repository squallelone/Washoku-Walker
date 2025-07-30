<script setup lang="ts">
import { ref } from 'vue'
import type { Restaurant } from '@/types'
import RestaurantCard from './RestaurantCard.vue'

const props = defineProps<{ restaurants: Restaurant[] }>()
const openRestaurants = props.restaurants.filter((rest) => {
  return rest.openNow === true
})
const displayMode = ref<'openOnly' | 'all'>('all')

function toggleDisplayMode() {
  if (displayMode.value === 'all') {
    displayMode.value = 'openOnly'
  } else {
    displayMode.value = 'all'
  }
}
</script>

<template>
  <div
    v-if="props.restaurants.length !== 0 && openRestaurants.length !== 0"
    class="flex justify-center mt-2"
  >
    <button class="btn btn-sm btn-outline btn-success w-1/3" @click="toggleDisplayMode">
      {{ displayMode === 'all' ? 'Open Only' : 'All Restaurants' }}
    </button>
  </div>
  <div class="flex flex-col my-4 mx-auto gap-4 md:grid md:grid-cols-3">
    <!-- All restaurants -->
    <div v-if="displayMode === 'all'" v-for="restaurant of props.restaurants">
      <RestaurantCard :restaurant="restaurant" />
    </div>
    <!-- Open restaurants only -->
    <div v-else v-for="restaurant of openRestaurants">
      <RestaurantCard :restaurant="restaurant" />
    </div>
  </div>
</template>
