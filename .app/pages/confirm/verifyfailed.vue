<template>
  <CommonAuthNav />
<div class="lg:mt-[4rem] mt-[3rem]">
<DashboardLeftSidebar />
  <div class="min-h-screen w-full lg:pl-[254px] p-3 dark:bg-dark">
  <div>
    <BaseIconBox size="lg" shape="full" flavor="solid" color="danger">
      <Icon name="ph:cookie-duotone" class="h-6 w-6" />
    </BaseIconBox>
    <h1>{{ $t('Verification Failed') }}!</h1>
    <p>
      {{ $t('Your account verification failed. Link expired or other error') }}.
      &#128542;. {{ $t('Please contact our support team for assistance') }}.
    </p>
  </div>
  </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Verification Failed',
  layout: 'landing',
})
</script>

<style scoped>
.text-danger {
  color: #dc3545;
}
</style>
