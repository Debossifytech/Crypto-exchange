<script setup lang="ts">
definePageMeta({
  title: '2 Factor Authentication',
  layout: 'landing',
})
</script>

<template>
 <CommonAuthNav />
<div class="lg:mt-[4rem] mt-[3rem]">
<DashboardLeftSidebar />
  <div class="min-h-screen w-full lg:pl-[254px] p-3 dark:bg-dark">
  <UserProfileTwoFactor :flutter="false" />
</div>
</div>
</template>
