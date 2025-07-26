import type { Ref } from 'vue'

interface Dish {
  uuid: string
  name: string
  category: string
  description: string
  origin: string
  localRanking: string
  internationalRanking: string
}

interface LocationData {
  latitude: Ref<number>
  longitude: Ref<number>
  locationShared: Ref<boolean>
}

interface Restaurant {
  name: string
  rating: number
  address: string
  url: string
  openNow: boolean
}

interface RestaurantFetch {
  loading: Ref<boolean>
  error: Ref<boolean>
  restaurants: Restaurant[]
}

export type { Dish, LocationData, RestaurantFetch }
