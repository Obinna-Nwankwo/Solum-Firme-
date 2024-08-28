<template>
  <div class="text-center lg:pb-16 lg:pt-28">
    <h1 class="leading-loose lg:text-5xl font-bold tracking-tighter">
      We are Building a <br />
      <span
        class="bg-clip-text bg-gradient-to-r from-green-500 via-green-500 to-yellow-500 text-transparent"
        >Sustainable Futuer</span
      >
    </h1>
    <p class="leading-loose text-gray-400 lg:py-4 text-sm">
      Committed to innovative practices and eco-friendly solutions.
    </p>

    <div class="flex justify-center gap-10 items-center">
      <div class="">
        <img
          src="@/assets/images/constructionManager.png"
          alt="construction manager"
          class="rounded-2xl items-center h-72 w-64 content-center justify-center"
        />
      </div>

      <div class="rounded-2xl h-[21rem] w-64 p-4 bright bg-no-repeat bg-center bg-cover">
        <p class="text-xl font-medium p-6">
          Renewable Energy,<br />
          Greener World,<br />
          <span class="text-green-500">Bright</span> Futuer
        </p>
        <div class="flex w-56 mt-12">
          <img src="@/assets/images/energy.jpg" alt="" class="rounded-xl" />
        </div>
      </div>
    </div>

    <div class="mt-12">
      <p class="py-3.5 text-gray-400 text-xs">It's free for consultation</p>
      <buttons />
    </div>
  </div>
</template>

<script setup lang="ts">
import buttons from './contact-us/buttons.vue'
</script>

<style scoped>
.bright {
  background-image: url(@/assets/images/wind.jpg);
}
</style>
