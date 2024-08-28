<template>
  <div class="flex justify-between items-center h-16">
    <div class="flex items-center">
      <RouterLink to="/" class="text-xl font-bold"> My App </RouterLink>
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
</script>

<style></style>
