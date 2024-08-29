<template>
  <div class="m-0 p-0 w-screen">
    <div class="min-h-screen flex flex-col">
      <section
        class="bg-gradient-to-tl from-[#0a4144] from-10% via-[#003b3e] via-30% to-[#064041] to-90% flex-1"
      >
        <div class="container mx-auto h-full">
          <index />
          <card />
        </div>
      </section>

      <section class="flex-1 bg-white">
        <div class="container mx-auto h-full">
          <card2 />
        </div>
      </section>

      <section class="flex-1 bg-white">
        <div class="container mx-auto h-full">
          <card3 />
        </div>
      </section>

      <section class="flex-1 bg-white">
        <div class="container mx-auto h-full">
          <card4 />
        </div>
      </section>

      <section class="flex-1 bg-white">
        <div class="container mx-auto h-full">
          <card5 />
          <landingPageFooter />
        </div>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
import index from '@/components/header/index.vue'
import card from '@/components/first-selection/card.vue'
import card2 from '@/components/second-selection/card2.vue'
import card3 from '@/components/third-selection/card3.vue'
import card4 from '@/components/forth-selection/card4.vue'
import card5 from '@/components/last-selection/card.vue'
import landingPageFooter from '@/components/footer/landing-page-footer.vue'


</script>
