<template>
  <div class="flex justify-between items-center h-16 text-gray-100">
     <div class="flex items-center gap-4 mb-4">
        <div class="bg-[#01dc82] p-1.5 rounded-xl ">
          <Layers3  class="" />
        </div>
        <p class="text-2xl font-medium font-serif">Solum Firme</p>
      </div>

    <div class="flex text-sm gap-4 items-center text-gray-300">
      <router-link to="/" class="hover:text-gray-500">Home</router-link>
      <router-link to="/dashboard" class="hover:text-gray-500">About</router-link>
      <router-link to="/dashboard" class="hover:text-gray-500">Services</router-link>
      <router-link to="/dashboard" class="hover:text-gray-500">Blog</router-link>
      <router-link to="/dashboard" class="hover:text-gray-500">Resources</router-link>
      <router-link to="/dashboard" class="hover:text-gray-500">Contact us</router-link>
      <button
        class="rounded-full text-xs py-1 px-2.5 text-black bg-[#01dc82] hover:text-white hover:bg-gradient-to-tr from-[#064041] to-[#01dc82]"
      >
        Let's Talk
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
// const logout = 'logout'
import { Layers3 } from 'lucide-vue-next';



</script>

<style></style>
