<script setup lang="ts">
import { useRoute } from 'vue-router'

import Title from '@/components/Title.vue'
import OpenBadge from '@/components/OpenBadge.vue'
import ClosedBadge from '@/components/ClosedBadge.vue'
import getLinkText from '@/utils/getLinkText'

const route = useRoute()
const url: string = route.query.url?.toString() ?? ''
const name: string = route.query.name?.toString() ?? ''

const linkText = getLinkText(url, name)

const restLat: string = route.query.latitude?.toString() ?? ''
const restLong: string = route.query.longitude?.toString() ?? ''
const mapCenter = {
  lat: parseFloat(restLat),
  lng: parseFloat(restLong),
}
console.log(mapCenter)
</script>

<template>
  <section id="restaurant-details">
    <div class="bg-base-200 rounded-2xl shadow p-4">
      <Title :text="name" />
      <p v-if="$route.query.rating">Rating: {{ $route.query.rating }}</p>
      <OpenBadge v-if="$route.query.openNow === 'true'" />
      <ClosedBadge v-else />
      <div>
        <p>Address:</p>
        <p>{{ $route.query.address }}</p>
      </div>
      <p v-if="$route.query.distance">{{ $route.query.distance }} from you.</p>
      <p v-if="$route.query.url">
        Link: <a class="underline text-info" :href="url">{{ linkText }}</a>
      </p>

      <div class="flex items-center justify-center">
        <GMapMap
          :center="mapCenter"
          :zoom="14"
          map-type-id="terrain"
          class="h-60 w-full md:w-8/10 md:h-100"
        >
          <GMapMarker :position="mapCenter" />
        </GMapMap>
      </div>
    </div>
  </section>
</template>
