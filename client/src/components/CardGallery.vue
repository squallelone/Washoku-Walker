<script setup lang="ts">
import { ref } from 'vue'
import type { Restaurant } from '@/types'
import { useBrowserLocationStore } from '@/stores/browserLoc'
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

const locData = useBrowserLocationStore()
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
    <div v-if="displayMode === 'all'">
      <div v-for="restaurant of props.restaurants" :key="restaurant.id">
        <RestaurantCard
          :restaurant="restaurant"
          :user-latitude="locData.latitude"
          :user-longitude="locData.longitude"
        />
      </div>
    </div>
    <!-- Open restaurants only -->
    <div v-else>
      <div v-for="restaurant of openRestaurants" :key="restaurant.id">
        <RestaurantCard
          :restaurant="restaurant"
          :user-latitude="locData.latitude"
          :user-longitude="locData.longitude"
        />
      </div>
    </div>
  </div>
</template>
