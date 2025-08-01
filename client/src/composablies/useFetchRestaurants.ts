import { ref } from 'vue'
import type { Restaurant, SearchedRestaurantFetch } from '@/types'

export default function useFetchRestaurants(): SearchedRestaurantFetch {
  const loading = ref(false)
  const fetchError = ref(false)
  const restaurants = ref<Restaurant[]>([])

  async function fetchRestaurants(url: string): Promise<void> {
    loading.value = true
    const response = await fetch(url)
    if (!response.ok) {
      console.error(response)
      fetchError.value = true
    } else {
      try {
        const data = await response.json()
        restaurants.value = data
      } catch (error) {
        console.error(error)
        fetchError.value = true
      } finally {
        loading.value = false
      }
    }
  }

  return { loading, fetchError, restaurants, fetchRestaurants }
}
