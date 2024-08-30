<template>
  <div class="text-gray-800 lg:space-y-28">
    <div class="rounded-3xl bg-[#0a4144] text-center p-8 h-80 content-center">
      <h1 class="text-5xl tracking-tighter leading-snug text-white font-semibold">
        Renewal <span class="text-[#01dc82]">Now</span>
      </h1>
      <p class="text-sm text-gray-400 font-medium py-2">
        By focusing on immediate action and sustainable practices, <br />We are dedicated to
        creating a cleaner, greener world today.
      </p>
      <button
        class="px-8 font-semibold py-3.5 text-sm mt-8 rounded-full text-gray-800 bg-[#01dc82] hover:text-white hover:bg-gradient-to-tr from-[#0a4144] via-[#01dc82] to-[#064041]"
      >
        Contact Us
      </button>
    </div>

    <div>
      <div class="flex items-center gap-2 mb-4">
        <div class="bg-[#01dc82] p-1.5 rounded-xl">
          <Layers3 class="" />
        </div>
        <p class="text-2xl font-medium font-serif">Solum Firme</p>
      </div>
      <div class="space-x-8 grid grid-cols-5">
        <div>
          <p class="font-bold text-gray-600 text-md py-4 tracking-tight">Company</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">About Us</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Product</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Reviews</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Invsetor Relations</p>
        </div>

        <div class="col-span-2">
          <p class="font-bold text-gray-600 text-md py-4 tracking-tight">Services</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Renewable Energy Solutions</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Eco-Friendly Manufacturing</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">
            Environmental Consulting Services
          </p>
        </div>

        <div>
          <p class="font-bold text-gray-600 text-md py-4 tracking-tight">Resources</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Blog</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">Case Studies</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">White Papers</p>
          <p class="text-sm text-gray-400 font-medium leading-loose">FAQs</p>
        </div>

        <div class="flex justify-end">
          <div class="">
            <p class="font-bold text-gray-600 text-md py-4 tracking-tight">Legal</p>
            <p class="text-sm text-gray-400 font-medium leading-loose">Privacy Policy</p>
            <p class="text-sm text-gray-400 font-medium leading-loose">Terms of Service</p>
            <p class="text-sm text-gray-400 font-medium leading-loose">Cookie Policy</p>
            <p class="text-sm text-gray-400 font-medium leading-loose">Accessbility</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Layers3 } from 'lucide-vue-next'
</script>

<style></style>
