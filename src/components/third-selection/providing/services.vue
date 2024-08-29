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
    <!-- <div
      v-for="card in cards"
      :key="card.id"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
    >
      <div class="flex gap-6">
        <img :src="card.image" :alt="card.title" class="w-full h-48 object-cover" />
        <h1 class="text-3xl tracking-tighter font-medium leading-snug whitespace-pre">
          {{ card.title }}
        </h1>
      </div>

      <div class="flex gap-24">
        <p class="break-words px-6 text-gray-400 text-xs font-medium">{{ card.description }}</p>
        <component :is="card.icon" :color="card.color" fill="" size="80" />
      </div>
    </div> -->

    <div class="">
      <div class="grid grid-cols-2">
        <div class="flex gap-6 items-center">
          <img src="@/assets/images/wind.jpg" alt="" class="rounded-xl h-full w-640" />
          <h1 class="tracking-tighter font-medium leading-snug text-2xl pl-8">
            Renewable <br />Energy Solutions
          </h1>
        </div>

        <div class="flex gap-8 items-center">
          <p class="text-gray-400 text-xs font-medium pr-14 pl-8">
            Embrace the power of clean energy with our advanced renewable solutions.From solar
            panels to wind turbines, we provide cutting-edge teachnologies
          </p>
          <div class="shadow rounded-full p-1 hover:shadow-2xl">
            <ArrowRight color="#0a4144" :size="25" class="" />
          </div>
        </div>
      </div>
      <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>

    <div class="">
      <div class="grid grid-cols-2">
        <div class="flex gap-6 items-center">
          <img src="@/assets/images/wind.jpg" alt="" class="rounded-xl h-full w-640" />
          <h1 class="tracking-tighter font-medium leading-snug text-2xl pl-8">
            Eco-Friendly Manufacturing
          </h1>
        </div>

        <div class="flex gap-8 items-center">
          <p class="text-gray-400 text-xs font-medium pr-14 pl-8">
            Trasform your production processes with our sustainable manufacturing solutions
          </p>
          <div class="shadow rounded-full p-1 hover:shadow-2xl">
            <ArrowRight color="#0a4144" :size="25" class="" />
          </div>
        </div>
      </div>
      <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>

    <div class="">
      <div class="grid grid-cols-2">
        <div class="flex gap-6 items-center">
          <img src="@/assets/images/wind.jpg" alt="" class="rounded-xl h-full w-640" />
          <h1 class="tracking-tighter font-medium leading-snug text-2xl pl-8">
            Environmental <br />Consulting <br />Services
          </h1>
        </div>

        <div class="flex gap-8 items-center">
          <p class="text-gray-400 text-xs font-medium pr-14 pl-8">
            Navigate the complexities of an environmental regulations with our expert consulting
            services. We provide comprehensive assessments and strategic planning
          </p>
          <div class="shadow rounded-full p-1 hover:shadow-2xl">
            <ArrowRight color="#0a4144" :size="25" class="" />
          </div>
        </div>
      </div>
      <hr class="h-0.5 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight } from 'lucide-vue-next'

interface Card {
  // id: number
  // image: string
  // title: string
  // description: string
  // icon: any
  // color: string
}

const cards = ref<Card[]>([
  //   {
  //     id: 1,
  //     image: '@/assets/images/wind.jpg',
  //     title: `Renewable
  // Energy Solutions`,
  //     description:
  //       'Embrace the power of clean energy with our advanced renewable solutions.From solar panels to wind turbines, we provide cutting-edge teachnologies',
  //     icon: ArrowRight,
  //     color: 'green'
  //   },
  //   {
  //     id: 1,
  //     image: '@/assets/images/wind.jpg',
  //     title: `Renewable
  // Energy Solutions`,
  //     description:
  //       'Embrace the power of clean energy with our advanced renewable solutions.From solar panels to wind turbines, we provide cutting-edge teachnologies',
  //     icon: ArrowRight,
  //     color: 'green'
  //   },
  //   {
  //     id: 1,
  //     image: '@/assets/images/wind.jpg',
  //     title: `Renewable
  // Energy Solutions`,
  //     description:
  //       'Embrace the power of clean energy with our advanced renewable solutions.From solar panels to wind turbines, we provide cutting-edge teachnologies',
  //     icon: ArrowRight,
  //     color: 'green'
  //   }
])
</script>
