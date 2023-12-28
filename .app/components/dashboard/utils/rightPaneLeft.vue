<script setup lang="ts">
const props = defineProps({
  flutter: {
    type: Boolean,
    default: false,
  },
})

const route = useRoute()

const currencyStore = useCurrencyStore()
const currencies = computed(() => currencyStore.items)
const walletStore = useWalletStore()
const wallets = computed(() => walletStore.getSpotWallets)

onMounted(async () => {
  if (currencyStore.items.length === 0) {
    await currencyStore.fetchCurrencies()
  }

  await walletStore.fetchWallets()
})

const { sciToPrecision } = useUtils()
const hideSmallBalances = ref(false)

// Pagination Constants
const filter = ref('')
const perPage = ref(10)
const page = computed(() => parseInt((route.query.page as string) ?? '1'))

// Pagination
const paginatedItems = computed(() => {
  const start = (page.value - 1) * perPage.valuer
  const end = start + perPage.value
  return items.value.slice(start, end)
})

// Modify the items computed value to include the new filter
const items = computed(() => {
  if (currencies.value && Array.isArray(currencies.value)) {
    return currencies.value
      .map((currency) => {
        // Append the wallet information to the currency if it exists
        const wallet = wallets.value.find(
          (walletItem: any) => walletItem.currency === currency.currency,
        )
        return {
          ...currency,
          wallet: wallet || null, // If wallet is found, append it, else set to null
        }
      })
      .filter((item) => {
        if (hideSmallBalances.value) {
          const total = item.wallet?.balance + item.wallet?.inOrder || 0
          return (
            total > 0 &&
            item.currency.toLowerCase().includes(filter.value.toLowerCase())
          )
        }
        return item.currency.toLowerCase().includes(filter.value.toLowerCase())
      })
  } else {
    return []
  }
})

// New computed property to calculate total balance in USDT
const totalBalanceInUSDT = computed(() => {
  if (currencies.value && Array.isArray(currencies.value)) {
    return currencies.value.reduce((total, item) => {
      const wallet = wallets.value.find(
        (walletItem: any) => walletItem.currency === item.currency,
      )

      if (wallet) {
        if (wallet.currency === 'USDT') {
          total += wallet.balance + wallet.inOrder
        } else {
          total += (wallet.balance + wallet.inOrder) * item.price
        }
      }
      return total
    }, 0)
  }
  return 0
})


const content = {
    header: "Start by depositing some crypto",
    fastlink: [
        // {
        //     icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path><path fill="currentColor" d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h11.11c3.98 0 5.19 1.2 5.19 5.14v8.21c.01 3.95-1.2 5.15-5.18 5.15Zm-11.12-17c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64V7.89c0-3.1-.55-3.64-3.69-3.64H6.44Z"></path></svg>`,
        //     header: "Buy Crypto",
        //     desc: "New to crypto? Purchase within seconds!",
        //     btnText: "Buy Crypto",
        //     href: "#"
        // },
        {
            icon: `<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.882 14.99c-.19 0-.38-.07-.53-.22l-2.56-2.56a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2.03 2.03 2.03-2.03c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.56 2.56c-.15.15-.34.22-.53.22Z"></path><path fill="currentColor" d="M11.88 14.924c-.41 0-.75-.34-.75-.75V4.004c0-.41.34-.75.75-.75s.75.34.75.75v10.17c0 .41-.34.75-.75.75Z"></path><path fill="currentColor" d="M12 20.928c-5.15 0-8.75-3.6-8.75-8.75 0-.41.34-.75.75-.75s.75.34.75.75c0 4.27 2.98 7.25 7.25 7.25s7.25-2.98 7.25-7.25c0-.41.34-.75.75-.75s.75.34.75.75c0 5.15-3.6 8.75-8.75 8.75Z"></path></svg>`,
            header: "Start Trading",
            desc: "Already own crypto? Start trading on your account!",
            btnText: "Trade",
            href: "/trade/BTC/USDT"
        },
    ],

    knowMore: "How to deposit?",

    balance_detail: {
        header: "Balance details",
        top_link: "Account Balance",
        total_val: "Total value (USD)",
        assetDetail: "Asset Details",
        balance: totalBalanceInUSDT.value,
        currency: "$",

        btn: [
            {
                btnName: "Deposit",
                btnClass: "bg-main border border-black",
                href: "/user/wallets/spot"
            },
            // {
            //     btnName: "Buy Crypto",
            //     btnClass: "border bg-transparent dark:border-navColor/20 dark:text-white hover:bg-primaryHoverLight dark:hover:bg-[#1b190c]",
            //     href: "/user/wallets/spot"
            // },
            {
                btnName: "Withdraw",
                btnClass: "border bg-transparent dark:border-navColor/20 dark:text-white hover:bg-primaryHoverLight dark:hover:bg-[#1b190c]",
                href: "/user/wallets/spot"
            },
            // {
            //     btnName: "Transfer",
            //     btnClass: "border bg-transparent dark:border-navColor/20 dark:text-white hover:bg-primaryHoverLight dark:hover:bg-[#1b190c]",
            //     href: "/deposit"
            // }
        ],

        balances: [
            {
                name: "Spot (USD)",
            },
            // {
            //     name: "Futures (BTC)",
            //     amt: "0",
            // },
            // {
            //     name: "Futures (BTC)",
            //     amt: "0",
            // },
     //     {
          //     name: "Fiat (USD)",
       //      amt: totalBalanceInUSD.value.toFixed(2),
        //  }
        ]
    },
    // referral: {
    //     header: "Referral",
    //     desc: "Invite friends and earn passive income!"
    // },

    // login_activity: {
    //     header: "Login activity",
    //     prevLogins: [
    //         {
    //             system_name: "Linux x86_64",
    //             locaton: "Nigeria, Abuja",
    //             time: "2023/11/25, 04:29:23 PM",
    //             ip: "197.210.53.89"
    //         },
    //         {
    //             system_name: "Andriod",
    //             locaton: "Nigeria, Lagos",
    //             time: "2023/11/25, 04:29:23 PM",
    //             ip: "197.290.53.81"
    //         },
    //         {
    //             system_name: "Linux x86_64",
    //             locaton: "Nigeria",
    //             time: "2023/11/25, 04:29:23 PM",
    //             ip: "197.260.53.891"
    //         }
    //     ]
    // }
}
</script>

<template>
    <div class="2xl:col-span-2">
        <div class="border dark:border-navColor/20 rounded-md lg-sm:p-5 p-3 dark:text-white">
            <h2 class="lg-sm:text-lg text-md font-medium mb-4">{{ content.header }}</h2>

            <a href="/trade/BTC/USDT" v-for="(data, key) in content.fastlink" :key="key" tabindex="-1">
                <div class="bg-[#f7f7f7] dark:bg-dark3 flex justify-between items-center p-4 my-2 rounded-md">
                    <div class="flex gap-2 items-center  w-full">
                        <div class="bg-white dark:bg-dark3sub w-[35px] flex items-center justify-center text-[1.4rem] h-[35px] rounded-md"
                            v-html="data.icon"></div>
                        <div class="lg-sm:block flex w-full justify-between">
                            <div class="">
                                <h2 class="lg-sm:text-md text-sm">{{ data.header }}</h2>
                                <p class="leading-tight text-[#939393] font-light text-xs">{{ data.desc }}</p>
                            </div>

                            <div class="lg-sm:hidden block">
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="none"
                                    viewBox="0 0 24 24" class="arrow_right">
                                    <path fill="currentColor"
                                        d="M14.43 18.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.54-5.54-5.54-5.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22Z">
                                    </path>
                                    <path fill="currentColor"
                                        d="M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                    </path>
                                </svg>
                            </div>
                        </div>


                    </div>
                    <CommonUtilsRegisterBtn :href="data.href"
                    tabindex="-1"
                        class="font-regular border-navColor/20 text-center w-[120px] hidden lg-sm:block px-1 border bg-transparent dark:text-white dark:hover:bg-[#1b190c] transition-colors  hover:bg-primaryHoverLight">
                        <span class="text-sm font-medium whitespace-nowrap">{{ data.btnText }}</span>
                    </CommonUtilsRegisterBtn>
                </div>
            </a>
        </div>


        <!--  2nd section -->
        <div class="w-full lg-sm:p-7 p-5 rounded-md bg-[#f7f7f7] dark:bg-dark3 dark:text-white mt-4">
            <div class="flex justify-between items-center mb-2">
                <h2 class="text-lg font-medium text-md">{{ content.balance_detail.header }}</h2>
                <a href="#" class="text-main border-b border-main font-semibold lg-sm:text-sm text-xs">{{
                    content.balance_detail.top_link }}</a>
            </div>


            <!-- balance area -->
            <div class="">
                <div class="flex gap-2 items-center lg-sm:text-base text-sm">
                    <span>
                        {{ content.balance_detail.total_val }}
                    </span>
                    <svg class="text-secondaryText" xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em"
                        fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M12 16.33c-2.39 0-4.33-1.94-4.33-4.33S9.61 7.67 12 7.67s4.33 1.94 4.33 4.33-1.94 4.33-4.33 4.33Zm0-7.16c-1.56 0-2.83 1.27-2.83 2.83s1.27 2.83 2.83 2.83 2.83-1.27 2.83-2.83S13.56 9.17 12 9.17Z">
                        </path>
                        <path fill="currentColor"
                            d="M12 21.02c-3.76 0-7.31-2.2-9.75-6.02-1.06-1.65-1.06-4.34 0-6 2.45-3.82 6-6.02 9.75-6.02s7.3 2.2 9.74 6.02c1.06 1.65 1.06 4.34 0 6-2.44 3.82-5.99 6.02-9.74 6.02Zm0-16.54c-3.23 0-6.32 1.94-8.48 5.33-.75 1.17-.75 3.21 0 4.38 2.16 3.39 5.25 5.33 8.48 5.33 3.23 0 6.32-1.94 8.48-5.33.75-1.17.75-3.21 0-4.38-2.16-3.39-5.25-5.33-8.48-5.33Z">
                        </path>
                    </svg>


                    <span class="flex items-center gap-2">
                        <span>{{ content.balance_detail.assetDetail }}</span>
                        <i class="fa fa-angle-right text-[1.1rem] text-secondaryText"></i>
                    </span>
                </div>


                <div class="flex lg-sm:items-center flex-col lg-sm:flex-row lg-sm:justify-between my-4 gap-3 lg-sm:gap-0">
                    <h1 class="lg-sm:text-[1.6rem] text-[1.4rem] font-medium">
                        <span> {{ totalBalanceInUSDT.toFixed(2) }}</span>
                                <span class="ml-2 text-[12px] text-secondaryText">= {{ content.balance_detail.currency }}{{ totalBalanceInUSDT }}</span>
                    </h1>


                    <div class="grid grid-cols-2 items-center gap-2">
                        <CommonUtilsRegisterBtn v-for="(data, key) in content.balance_detail.btn" :class="data.btnClass"
                            class="text-sm font-light text-center" :href="data.href" :key="key">{{ data.btnName }}
                        </CommonUtilsRegisterBtn>
                    </div>
                </div>
            </div>

            <div class="flex lg-sm:flex-row flex-col gap-2 items-center">
                <div class="w-full lg-sm:bg-white  lg-sm:dark:bg-dark3sub lg-sm::dark:text-white lg-sm:p-3 p-0 rounded-md flex justify-between lg-sm:block items-center"
                    v-for="(data, key) in content.balance_detail.balances">
                    <h5 class="font-light text-xs text-secondaryText flex">{{ data.name }}</h5>
                    <div class="border-b border-dotted w-[70%] border-gray-500 lg-sm:hidden"></div>
                    <p class="lg-sm:text-md text-sm font-regular whitespace-nowrap">
                        <span>
                            {{ totalBalanceInUSDT.toFixed(2) }} </span>
                                <span class="text-xs text-secondaryText">
                                    = {{ content.balance_detail.currency }}{{ totalBalanceInUSDT }}
                                </span>
                    </p>

                </div>
            </div>

        </div>

        <!-- referral -->
<!--         <a href="#" class="block">
            <div class="flex w-full bg-[rgb(244,255,221)] dark:bg-[rgb(38,56,0)] dark:text-white p-4 rounded-md items-center justify-between my-4">
                <div class="flex gap-2 items-center">
                    <div class="bg-white dark:bg-white/10 w-[35px] flex items-center justify-center text-[1.4rem] h-[35px] rounded-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24">
                            <path fill="currentColor"
                                d="M9.16 11.62h-.08a.543.543 0 0 0-.18 0C6 11.53 3.81 9.25 3.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM9 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.06-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 9 2.75ZM16.54 11.75c-.03 0-.06 0-.09-.01-.41.04-.83-.25-.87-.66-.04-.41.21-.78.62-.83.12-.01.25-.01.36-.01 1.46-.08 2.6-1.28 2.6-2.75 0-1.52-1.23-2.75-2.75-2.75a.74.74 0 0 1-.75-.74c0-.41.34-.75.75-.75a4.26 4.26 0 0 1 4.25 4.25c0 2.3-1.8 4.16-4.09 4.25h-.03ZM9.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0ZM18.34 20.75c-.35 0-.66-.24-.73-.6a.76.76 0 0 1 .58-.89c.63-.13 1.21-.38 1.66-.73.57-.43.88-.97.88-1.54 0-.57-.31-1.11-.87-1.53-.44-.34-.99-.58-1.64-.73a.756.756 0 0 1-.57-.9c.09-.4.49-.66.9-.57.86.19 1.61.53 2.22 1 .93.7 1.46 1.69 1.46 2.73s-.54 2.03-1.47 2.74c-.62.48-1.4.83-2.26 1-.06.02-.11.02-.16.02Z">
                            </path>
                        </svg> -->
                        </div>
                        </template>

              