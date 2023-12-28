<script setup lang="ts">
const frontendStore = useFrontendStore()

const marketsContent = computed(
  () => frontendStore.getSection('markets')?.content || {},
)
</script>

<template>
  <section
    id="markets"
    class="w-full pb-10 dark:bg-dark bg-white lg:mt-[250px] sm:mt-[450px] mt-[550px] p-5 flex justify-center">
     <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] w-[640px]">
    <h3 class="text-4xl font-semibold dark:text-gray-100 mb-4 text-center z-10">
      {{ marketsContent?.heading }}
    </h3>
    <h4 class="text-lg font-medium dark:text-gray-400 mb-4 text-center z-10">
      {{ marketsContent?.subtext }}
    </h4>
    <MarketAnalysis class="z-10" />
    </div>
  </section>
</template>
