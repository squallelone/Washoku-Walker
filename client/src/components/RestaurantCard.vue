<script setup lang="ts">
import { defineProps } from 'vue'
import ClosedBadge from './ClosedBadge.vue'
import OpenBadge from './OpenBadge.vue'
import type { Restaurant } from '@/types'

const props = defineProps<{ restaurant: Restaurant }>()
</script>

<template>
  <div class="bg-base-200 shadow rounded-xl p-4">
    <h2 class="text-xl font-bold">{{ props.restaurant.name }}</h2>
    <hr />
    <span>Rating: {{ props.restaurant.rating }}</span>
    <hr />
    <hr />
    <a :href="props.restaurant.url">Link</a>
    <hr />
    <OpenBadge v-if="props.restaurant.openNow" />
    <ClosedBadge v-else />
  </div>
</template>
