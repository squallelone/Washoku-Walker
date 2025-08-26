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

const queryOptions = {
  name: props.restaurant.name,
  rating: props.restaurant.rating?.toString() || '',
  address: props.restaurant.address,
  url: props.restaurant.url,
  openNow: props.restaurant.openNow?.toString() || '',
  startPrice: props.restaurant.startPrice?.toString() || '',
  endPrice: props.restaurant.endPrice?.toString() || '',
  latitude: props.restaurant.latitude.toString() || '',
  longitude: props.restaurant.longitude.toString() || '',
  distance: distance,
  googleMapsUri: props.restaurant.googleMapsUri,
}
</script>

<template>
  <div class="bg-base-200 shadow rounded-xl p-4">
    <RouterLink
      :to="{
        name: 'restaurant-details',
        params: { id: restaurant.id },
        query: queryOptions,
      }"
      class="flex flex-col gap-1"
    >
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
