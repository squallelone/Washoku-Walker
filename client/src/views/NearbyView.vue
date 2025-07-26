<script setup>
import { useBrowserLocationStore } from '@/stores/browserLoc'

const browserLocStore = useBrowserLocationStore()
</script>

<template>
  <p>Latitude: {{ browserLocStore.latitude }}</p>
  <p>Longitude: {{ browserLocStore.longitude }}</p>
</template>
