<script setup lang="ts">
import type { Restaurant } from '@/types'
import RestaurantCard from './RestaurantCard.vue'
const props = defineProps<{ restaurants: Restaurant[] }>()
</script>

<template>
  <div class="flex flex-col my-4 mx-auto gap-4 md:grid md:grid-cols-3">
    <div v-for="restaurant of props.restaurants">
      <RestaurantCard :restaurant="restaurant" />
    </div>
  </div>
</template>
