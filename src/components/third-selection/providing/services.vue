<template>
  <div>
    <div class="flex justify-between">
      <h1 class="text-4xl tracking-tighter leading-tight font-bold">
        Providing <br />Best Services
      </h1>
      <p class="text-gray-400 text-sm leading-normal font-medium tracking-tighter">
        We are dedicated to providing the best services in the sustainability <br />
        manufacturing industry. Our commitment to excellence is reflected in our <br />
        innovative practices, cutting-edge technologies, and a passionate team of experts
      </p>
    </div>
    <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    <div v-for="card in cards" :key="card.id">
      <img :src="card.image" alt="" />
      <h1>{{ card.title }}</h1>
      <p>{{ card.description }}</p>
      <component :is="card.icon" :color="card.color" fill="" size="30" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

interface Card {
  id: number
  image: string
  title: string
  description: string
  icon: any
  color: string
}

const cards = ref<Card[]>([
  {
    id: 1,
    image: '@/assets/images/wind.jpg',
    title: 'Renewable <b>Energy Solutions</b>',
    description:
      'Embrace the power of clean energy with our <br>advanced renewable solutions.From solar panels to</br>wind turbines, we provide cutting-edge teachnologies',
    icon: ArrowRight,
    color: 'green'
  }
])
</script>
