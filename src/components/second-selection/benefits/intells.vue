<template>
  <div class="bg-slate-100 p-12 mt-20 rounded-2xl">
    <div class="text-center">
      <h1 class="text-4xl font-bold tracking-tighter leading-relaxed">Our Main Benefits</h1>
      <p class="text-gray-400 text-sm leading-relaxed">
        We offer innovative solutions that not only enhance environmental <br />sustainability but
        also drive economic efficiency
      </p>
    </div>

    <div class="pt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="card in cards"
        :key="card.id"
        class="bg-white rounded-2xl shadow-md overflow-hidden"
      >
        <div class="p-7 gap-6">
          <div class="py-2">
            <component
              :is="card.icon"
              size="30"
              :color="card.color"
              fill="#0a4144"
              class="bg-slate-100 p-1 rounded-lg"
            />
          </div>

          <h2 class="text-md font-bold text-gray-600 mb-2">{{ card.title }}</h2>
          <p class="text-gray-400 text-sm">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Handshake, Factory, Leaf } from 'lucide-vue-next'

interface Card {
  id: number
  title: string
  description: string
  icon: any
  color: string
}

const cards = ref<Card[]>([
  {
    id: 1,
    title: 'Innovative Green Technologies',
    description:
      'Explore our cutting-edge solution designed to reduce environmental impact and promote sustainability.',
    icon: Factory,
    color: '#eeeeee'
  },
  {
    id: 2,
    title: 'Sustainable Project',
    description:
      'Delve in our portfolion of successful sustainability projects that are making a real different',
    icon: Leaf,
    color: '#eeeeee'
    }, {
    id: 3,
    title: 'Community & Partnerships',
      description: 'Join a thriving network of like-minded individuals and organizations dedicated to building a sustainable futuer',
    icon: Handshake,
    color: '#0a4144'
  }
])
</script>
