<template>
  <div class="text-gray-800">
    <div v-for="(item, index) in items" :key="index" class="border mb-2 w-[33rem] rounded-2xl shadow">
      <div @click="toggle(index)" class="px-6 py-4 cursor-pointer flex justify-between ">
        <h1 class="font-medium text-sm text-gray-700 mb-0 pb-0">{{ item.title }}</h1>
        <div>
          <ChevronDown class="ml-auto" v-if="!isOpen(index)" />
          <ChevronUp class="ml-auto" v-else />
        </div>
      </div>
      <div v-if="isOpen(index)" class="px-6 pb-5 mt-0 pt-0">
        <p class="text-gray-400 font-medium text-xs tracking-tighter leading-normal">{{ item.content }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import { ChevronDown, ChevronUp } from 'lucide-vue-next'

interface AccordionItem {
  title: string
  content: string
}

const props = defineProps<{ items: AccordionItem[] }>()
const openIndex = ref<number | null>(null)

const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? null : index
}

const isOpen = (index: number) => {
  return openIndex.value === index
}
</script>

<style></style>
