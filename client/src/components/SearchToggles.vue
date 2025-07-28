<script setup lang="ts">
import { ref } from 'vue'

const dishMode = ref<'traditional' | 'freeForm'>('traditional')
const locationMode = ref<'tokyo' | 'freeForm'>('tokyo')

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
</template>
