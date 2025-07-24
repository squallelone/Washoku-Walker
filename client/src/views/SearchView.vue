<script setup>
import { ref, onMounted } from 'vue'
import Title from '@/components/Title.vue'
import text from '../assets/siteText.json'

const api = import.meta.env.VITE_API_URL

// === Selection Data ===
const selectedWard = ref('...')
const selectedDish = ref('...')
const dishData = ref([])
const loading = ref(true)
const error = ref(false)

async function fetchDishData() {
  const response = await fetch(`${api}/dishes`)
  if (!response.ok) {
    console.error(response)
    error.value = true
  }
  try {
    const data = await response.json()
    dishData.value = data
  } catch (error) {
    console.error(error)
    error.value = true
  } finally {
    loading.value = false
  }
}

onMounted(fetchDishData)

// === Form submission ===
async function handleSubmit(event) {
  event.preventDefault()
  console.log(selectedDish.value, selectedWard.value)
}
</script>

<template>
  <Title text="Search" />
  <h2 class="text-xl text-center">Select a Food and Find a Restaurant</h2>
  <form
    class="flex flex-col gap-1 mt-2 bg-base-200 rounded-2xl shadow p-2 justify-center items-center"
    @submit="handleSubmit"
  >
    <p>I'm looking for</p>
    <!-- Dishes -->
    <p v-if="loading">Loading...</p>
    <p v-else-if="error">Something went wrong.</p>
    <select v-else class="select" v-model="selectedDish">
      <option v-for="dish of dishData" :value="dish.name">{{ dish.name }}</option>
    </select>
    <p>in</p>
    <!-- Tokyo Wards -->
    <select class="select" v-model="selectedWard">
      <option v-for="ward of text.tokyoWards" :value="ward">
        {{ ward }}
      </option>
    </select>
    <button type="submit" class="btn btn-primary w-5/10 mx-auto my-2">
      {{
        selectedWard !== '...' || selectedDish !== '...'
          ? `Find ${selectedDish} in ${selectedWard}`
          : 'Find'
      }}
    </button>
  </form>
</template>
