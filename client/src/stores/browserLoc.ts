import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { LocationData } from '@/types'

export const useBrowserLocationStore = defineStore('browserLoc', (): LocationData => {
  const latitude = ref(0)
  const longitude = ref(0)
  const locationShared = ref(false)

  return { latitude, longitude, locationShared }
})
