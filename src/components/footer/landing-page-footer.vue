<template>
  <div class="text-gray-800 py-10">
    <hr class="h-0.5 my-8 bg-gray-200 border-0 dark:bg-gray-700" />

    <div class="flex justify-between">
      <p class="text-sm">&copy;Copyright Constructopia 2024, All Rights Reserved</p>
      <div class="flex gap-6">
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Linkedin fill="#eeeeee" color="#0a4144" :size="17" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Facebook fill="#0a4144" color="#eeeee" :size="16" />
        </div>
        <div class="p-1.5 rounded-xl hover:shadow bg-slate-100">
          <Instagram fill="#0a4144" color="#eeeeee" :size="15" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Linkedin, Facebook, Instagram } from 'lucide-vue-next'


</script>

<style></style>
