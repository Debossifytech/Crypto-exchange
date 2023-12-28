<template>
    <div class="w-full p-2 bg-[hsl(49,100%,10%)] flex justify-center">
        <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full md:px:5 px-2 flex  gap-1 justify-between items-center">
            <p class="leading-tight flex items-center gap-1">
                <img src="~/assets/img/landingpage/bannerGift.svg" alt="bannerGift" class="w-[25px]">
                <span class="md:text-sm text-xs text-navColor">Register with Zihux and Enjoy New User Rewards</span>
            </p>

            <CommonUtilsRegisterBtn v-if="userStore.isLoggedIn" href="/trade/BTC/USDT" class="font-semibold text-xs sm:px-[.5rem] px-[.3rem]">Trade</CommonUtilsRegisterBtn>
            <template v-else>
              <CommonUtilsRegisterBtn href="/register" class="font-semibold text-xs sm:px-[.5rem] px-[.3rem]">Register</CommonUtilsRegisterBtn>
            </template>
        </div>
    </div>
</template>

<script setup>
  const app = useAppConfig()
const route = useRoute()
const userStore = useUserStore()
const user = computed(() => userStore.getProfile)
const logoUrl = computed(() => getLogoUrl())

const getLogoUrl = () => {
  switch (route.path.split('/')[1]) {
    case 'trade':
      return '/user'
    case 'binary':
      return '/user/binary'
    case 'forex':
      return '/user/forex'
    case 'ai-trading':
      return '/user/ai-trading'
    default:
      return '/user'
  }
}
  
  
</script>
