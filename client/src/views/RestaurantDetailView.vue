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

      <div class="flex flex-col gap-2 mt-2 items-center justify-center">
        <GMapMap
          :center="mapCenter"
          :zoom="14"
          map-type-id="terrain"
          class="h-60 w-full md:w-8/10 md:h-100"
        >
          <GMapMarker :position="mapCenter" />
        </GMapMap>
        <button type="button" class="btn btn-info">
          <a :href="$route.query.googleMapsUri?.toString()">Open in Google Maps</a>
        </button>
      </div>
    </div>
  </section>
</template>
