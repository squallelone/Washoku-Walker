<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ClosedBadge from './ClosedBadge.vue'
import OpenBadge from './OpenBadge.vue'
import type { Restaurant } from '@/types'
import getRestaurantDistance from '@/utils/getRestaurantDistance'

const props = defineProps<{
  restaurant: Restaurant
  userLatitude: number
  userLongitude: number
}>()

const distance = getRestaurantDistance(
  {
    latitude: props.userLatitude,
    longitude: props.userLongitude,
  },
  {
    latitude: props.restaurant.latitude,
    longitude: props.restaurant.longitude,
  },
)

// console.log(`${props.restaurant.name} is ${distance} from you.`)

let queryString = '?name=' + props.restaurant.name
queryString += '&rating=' + props.restaurant.rating
queryString += '&address=' + props.restaurant.address
queryString += '&url=' + props.restaurant.url
queryString += '&openNow=' + props.restaurant.openNow
queryString += '&startPrice=' + props.restaurant.startPrice
queryString += '&endPrice=' + props.restaurant.endPrice
queryString += '&latitude=' + props.restaurant.latitude
queryString += '&longitude=' + props.restaurant.longitude
queryString += '&distance=' + distance
</script>

<template>
  <div class="bg-base-200 shadow rounded-xl p-4">
    <RouterLink :to="`/restaurant/${restaurant.id}${queryString}`" class="flex flex-col gap-1">
      <h2 class="text-xl font-bold">{{ props.restaurant.name }}</h2>
      <p>
        <span>Rating: {{ props.restaurant.rating }}</span>
      </p>
      <hr />
      <OpenBadge v-if="props.restaurant.openNow" />
      <ClosedBadge v-else />
      <div v-if="distance">{{ distance }} from you</div>
    </RouterLink>
  </div>
</template>
