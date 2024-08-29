<template>
  <div class="text-gray-800 lg:pb-16">
    <div class="flex gap-10">
      <div class="w-3/5">
        <img src="@/assets/images/wind.jpg" class="w-full rounded-3xl h-[95%]" alt="" />
      </div>
      <div class="">
        <h1 class="text-4xl font-bold leading-snug tracking-tighter">Our Founders</h1>
        <p class="text-sm font-medium leading-normal tracking-tighter text-gray-400">
          The visionaries behind our renewable futuer
        </p>

        <partners />
      </div>
    </div>

    <div class="flex gap-10 lg:pt-24">
      <div class="w-3/5 space-y-4">
        <h1 class="text-4xl font-bold leading-snug tracking-tighter">
          We Have 27/4 <br />Support Available
        </h1>
        <p class="text-sm font-medium leading-normal tracking-tighter text-gray-400">
          In you're still looking for answers.
        </p>
        <button
          class="px-7 font-semibold py-4 text-sm rounded-full text-gray-800 bg-[#01dc82] hover:text-white hover:bg-gradient-to-tr from-[#0a4144] via-[#01dc82] to-[#064041]"
        >
          <div class="flex gap-4 items-center">
            Contact Support
            <ArrowRight :size="20" />
          </div>
        </button>
      </div>
      <div class="">
        <partners />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import partners from '@/components/forth-selection/founder/partners.vue'
import { ArrowRight } from 'lucide-vue-next';


</script>
