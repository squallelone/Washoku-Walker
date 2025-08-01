<script setup lang="ts">
import { RouterLink } from 'vue-router'

import ClosedBadge from './ClosedBadge.vue'
import OpenBadge from './OpenBadge.vue'
import type { Restaurant } from '@/types'

const props = defineProps<{ restaurant: Restaurant }>()
let queryString = '?name=' + props.restaurant.name
queryString += '&rating=' + props.restaurant.rating
queryString += '&address=' + props.restaurant.address
queryString += '&url=' + props.restaurant.url
queryString += '&openNow=' + props.restaurant.openNow
queryString += '&startPrice=' + props.restaurant.startPrice
queryString += '&endPrice=' + props.restaurant.endPrice
</script>

<template>
  <div class="bg-base-200 shadow rounded-xl p-4">
    <RouterLink :to="`/restaurant/${restaurant.id}${queryString}`">
      <h2 class="text-xl font-bold">{{ props.restaurant.name }}</h2>
      <hr />
      <span>Rating: {{ props.restaurant.rating }}</span>
      <hr />
      <hr />
      <OpenBadge v-if="props.restaurant.openNow" />
      <ClosedBadge v-else />
    </RouterLink>
  </div>
</template>
