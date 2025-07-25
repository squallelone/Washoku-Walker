<script setup>
import { defineProps } from 'vue'
import ClosedBadge from './ClosedBadge.vue'
import OpenBadge from './OpenBadge.vue'

defineProps({
  restaurantData: Object,
})
</script>

<template>
  <div class="bg-base-200 shadow rounded-xl p-4">
    <h2 class="text-xl font-bold">{{ restaurantData.name }}</h2>
    <hr />
    <span>Rating: {{ restaurantData.rating }}</span>
    <hr />
    <div>
      <p>Address:</p>
      <p class="text-sm">{{ restaurantData.address }}</p>
    </div>
    <hr />
    <a :href="restaurantData.url">Link</a>
    <hr />
    <OpenBadge v-if="restaurantData.openNow" />
    <ClosedBadge v-else />
  </div>
</template>
