import { ref } from 'vue'
import type { LocationData } from '@/types'

export default function useGetLocation(): LocationData {
  const latitude = ref(0)
  const longitude = ref(0)
  const locationShared = ref(false)

  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.value = position.coords.latitude
      longitude.value = position.coords.longitude
      locationShared.value = true
    },
    (error) => {
      console.error('Error when trying to get location.', error)
    },
  )

  return { latitude, longitude, locationShared }
}
