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

interface SimpleLocationData {
  latitude: number
  longitude: number
}

interface Restaurant {
  name: string
  id: string
  rating: number | null
  address: string
  url: string
  openNow: boolean | null
  startPrice: number | null
  endPrice: number | null
  latitude: number
  longitude: number
}

interface RestaurantFetch {
  loading: Ref<boolean>
  fetchError: Ref<boolean>
  restaurants: Ref<Restaurant[]>
}

interface SearchedRestaurantFetch extends RestaurantFetch {
  fetchRestaurants: (url: string) => Promise<void>
}

interface RecommendedRestaurantFetch extends RestaurantFetch {
  fetchRecommendations: (url: string, latitude: number, longitude: number) => Promise<void>
}

export type {
  Dish,
  LocationData,
  SimpleLocationData,
  Restaurant,
  SearchedRestaurantFetch,
  RecommendedRestaurantFetch,
}
