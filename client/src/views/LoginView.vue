<script setup>
import GoogleLogin from '@/components/GoogleLogin.vue'
import Title from '@/components/Title.vue'
</script>

<template>
  <div
    class="flex flex-col justify-center items-center border border-base-300 p-4 mx-auto my-4 md:w-1/2 rounded-2xl shadow"
  >
    <Title text="Login" />
    <GoogleLogin />
    <div class="mb-4"></div>
  </div>
</template>
