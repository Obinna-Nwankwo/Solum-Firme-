<template>
  <div>
    <div class="py-8 space-y-2">
      <div class="flex gap-3">
        <img src="@/assets/images/wind.jpg" class="w-[10%] rounded-lg" alt="" />
        <div>
          <p class="font-bold">John Smith</p>
          <p class="text-sm font-medium text-gray-400">Chief Executive Officer (CEO)</p>
        </div>
      </div>

      <p class="font-medium text-sm py-2">
        John Simth has been at the forefront for the renewable energy <br>industry for over two decades
      </p>

      <div class="flex gap-6">
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Linkedin fill="#eeeeee" color="#0a4144" :size="22" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Facebook fill="#0a4144" color="#eeeee" :size="21" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Instagram fill="#0a4144" color="#eeeeee" :size="20" />
        </div>
      </div>
    </div>

    <hr class="h-0.5 bg-gray-200 border-0 dark:bg-gray-700" />

    <div class="py-8 space-y-2">
      <div class="flex gap-3">
        <img src="@/assets/images/wind.jpg" class="w-[10%] rounded-lg" alt="" />
        <div>
          <p class="font-bold">Cole Palmer</p>
          <p class="text-sm font-medium text-gray-400">Chief Technology Officer (CTO)</p>
        </div>
      </div>

      <p class="font-medium text-sm py-2">
        Cole Palmer is a trailbazer in the field of renewable energy technology. <br />
        He brings a wealth of experience in engineering.
      </p>

      <div class="flex gap-6">
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Linkedin fill="#eeeeee" color="#0a4144" :size="22" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Facebook fill="#0a4144" color="#eeeee" :size="21" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Instagram fill="#0a4144" color="#eeeeee" :size="20" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Linkedin, Facebook, Instagram } from 'lucide-vue-next'


</script>
