<script setup>
import GoogleLogin from '@/components/GoogleLogin.vue'
import Title from '@/components/Title.vue'
</script>

<template>
  <div
    class="flex flex-col justify-center items-center border border-base-300 p-4 my-4 mx-auto w-9/10 md:w-6/10 rounded shadow"
  >
    <Title text="Login" />
    <GoogleLogin />
    <div class="mb-4"></div>
  </div>
</template>
