<script setup>
import { useRoute } from 'vue-router'
import Title from '@/components/Title.vue'
import OpenBadge from '@/components/OpenBadge.vue'
import ClosedBadge from '@/components/ClosedBadge.vue'
import getLinkText from '@/utils/getLinkText'

const route = useRoute()
console.log('url:', route.query)

const linkText = getLinkText(route.query.url, route.query.name)
</script>

<template>
  <div class="bg-base-200 rounded-2xl shadow p-4">
    <Title :text="$route.query.name" />
    <p v-if="$route.query.rating">Rating: {{ $route.query.rating }}</p>
    <OpenBadge v-if="$route.query.openNow === 'true'" />
    <ClosedBadge v-else />
    <div>
      <p>Address:</p>
      <p>{{ $route.query.address }}</p>
    </div>
    <p v-if="$route.query.url">
      Link: <a class="underline text-info" :href="$route.query.url">{{ linkText }}</a>
    </p>
  </div>
</template>
