<script setup lang="ts">
const { href, isActive } = defineProps(['href', 'isActive'])
const route = useRoute()

// Check if the current route matches the link's destination
const isLinkActive = computed(() => {
  return route.path === href
})

</script>

<template>
  <div :class="isLinkActive ? isActive + ' border-l-[.3rem] border-[rgb(215,173,2)] bg-[rgb(241,241,244)] dark:bg-[#374048] p-3' : 'p-3'">
    <NuxtLink :to="href" >
      <slot></slot>
    </NuxtLink>
  </div>
</template>