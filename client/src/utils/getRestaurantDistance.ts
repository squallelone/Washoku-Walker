import { getDistance } from 'geolib'
import type { SimpleLocationData } from '@/types'

export default function getRestaurantDistance(
  userLoc: SimpleLocationData,
  restLoc: SimpleLocationData,
): string {
  if (userLoc.latitude === 0 || restLoc.latitude === 0) return ''

  const meters: number = getDistance(userLoc, restLoc)
  if (meters > 1000) {
    return `${(meters / 1000).toFixed(1)} kilometers`
  } else {
    return `${meters} meters`
  }
}
