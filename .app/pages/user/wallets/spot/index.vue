<script setup lang="ts">
definePageMeta({
  title: 'Spot Wallets',
  layout: 'landing',
})
</script>

<template>
<CommonAuthNav />
<div class="lg:mt-[4rem] mt-[3rem]">
<DashboardLeftSidebar />
  <div class="min-h-screen w-full lg:pl-[254px] p-3 dark:bg-dark">
  <UserWalletsSpotList :flutter="false" />
</div>
</div>
</template>
