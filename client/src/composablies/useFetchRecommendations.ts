import { ref } from 'vue'
import type { Restaurant, RecommendedRestaurantFetch } from '@/types'

export default function useFetchRecommendations(): RecommendedRestaurantFetch {
  const loading = ref(false)
  const fetchError = ref(false)
  const restaurants = ref<Restaurant[]>([])

  async function fetchRecommendations(
    url: string,
    latitude: number,
    longitude: number,
  ): Promise<void> {
    loading.value = true
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ lat: latitude, log: longitude }),
    })
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

  return { loading, fetchError, restaurants, fetchRecommendations }
}
