<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
console.log('url:', route.query)
</script>

<template>
  <h1>{{ $route.query.name }}</h1>
  <p v-if="$route.query.rating">Rating: {{ $route.query.rating }}</p>
  <p v-if="$route.query.openNow === 'true'">Open</p>
  <p v-else>Closed</p>
  <div>
    <p>Address:</p>
    <p>{{ $route.query.address }}</p>
  </div>
  <p v-if="$route.query.url">
    Link: <a :href="$route.query.url">{{ $route.query.url }}</a>
  </p>
</template>
