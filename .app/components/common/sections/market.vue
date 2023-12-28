<script setup lang="ts">
const marketText = {
    headingBold: "Market",
    headingL: "Trends",
    tab: ["Hot Spot", "Hot Derivative", "Top Looser", "New Listing", "Top Gainer"],
    thead: ["Pairs", "Last Price", "24h Change", "24h Volume"],
    tbody: [
        {
            icon: "~/assets/img/landingpage/BTC.png",
            coin_name: "BTCUSDT",
            lastPrice: "37.834",
            change24h: 2.49,
            volume24h: "390.12M USDT",
            btn: "Trade"
        }
    ]
}
</script>

<template>
    <section class="w-full pb-10 dark:bg-dark bg-white lg:mt-[250px] sm:mt-[450px] mt-[550px] p-5 flex justify-center">
        <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] w-[640px]">
            <h1 class="1300px:text-[2.5rem] lg:text-[2rem] sm:text-[1.5rem] text-[1.2rem] dark:text-white "><span
                    class="font-medium">Market </span> Trends
            </h1>

            <div class="w-full md:border dark:border-gray-50/20 md:p-3  mt-4 rounded-md grid lg:grid-cols-4 divide-x dark:divide-gray-50/50">
                <div class="col-span-3 h-full w-full lg:pr-10">
                    <CommonUtilsMoreLink
                        class="overflow-auto border-b dark:border-b-gray-50/20 lg:p-2 lg:pl-10  border-navColor/50 md:flex justify-between items-center">
                        <div class="space-x-4 flex w-0">
                            <button class="whitespace-nowrap lg:text-xl text-subTitleColor dark:text-white sm:text-md text-sm font-medium leading-[3]"
                                role="tab">
                                {{ marketText.tab[0] }}
                            </button>


                            <button
                                class="whitespace-nowrap lg:text-xl sm:text-md text-sm text-subTitleColor font-medium leading-[3]"
                                role="tab">{{
                                    marketText.tab[1] }}</button>
                            <button
                                class="whitespace-nowrap lg:text-xl sm:text-md text-sm text-subTitleColor font-medium leading-[3]"
                                role="tab">{{
                                    marketText.tab[2] }}</button>

                            <button
                                class="whitespace-nowrap lg:text-xl sm:text-md text-sm lg:hidden inline-block text-subTitleColor font-medium leading-[3]"
                                role="tab">{{
                                    marketText.tab[3] }}</button>
                            <button
                                class="whitespace-nowrap lg:text-xl sm:text-md text-sm lg:hidden inline-block text-subTitleColor font-medium leading-[3]"
                                role="tab">{{
                                    marketText.tab[4] }}</button>
                        </div>

                        <template #link>
                            <a href="" class="font-medium hidden md:inline-block dark:text-white">
                                More &rarr;
                            </a>
                        </template>
                    </CommonUtilsMoreLink>

                    <div class="lg:px-10 pb-5 md:py-0 py-5">

                        <!-- THIS IS FOR MOBILE -->
                        <a class="md:hidden md:p-3 p-1 dark:bg-[#2c2c2e] px-2 bg-[#f5f5f5] block rounded-md" href=""
                            v-for="(data, key) in marketText.tbody" :key="key">
                            <div class="flex justify-between items-center dark:text-white">
                                <div class="">
                                    <div class="flex gap-3 items-center">
                                        <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt="">
                                        <span class="font-medium sm:text-normal text-sm">{{ data.coin_name }}</span>
                                    </div>
                                </div>

                                <div class="">
                                    <div class="">
                                        <span class="font-medium sm:text-normal text-sm">{{ data.lastPrice }}</span>
                                    </div>

                                    <div class="sm:text-normal text-sm">
                                        <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                            data.change24h }}%</span>
                                    </div>

                                </div>
                            </div>
                        </a>


                        <table class="w-full md:table hidden dark:text-white" style="width: 100%;">
                            <tr class="">
                                <th class="p-5 text-left font-light">{{ marketText.thead[0] }}</th>
                                <th class="p-5 text-left font-light">{{ marketText.thead[1] }}</th>
                                <th class="p-5 text-left font-light">{{ marketText.thead[2] }}</th>
                                <th class="p-5 text-left font-light">{{ marketText.thead[3] }}</th>
                                <th class="p-5 text-left font-light"></th>
                            </tr>

                            <tr v-for="(data, key) in marketText.tbody" :key="key" class="even:bg-navColor/10 text-left">
                                <td class="p-3">
                                    <div class="flex gap-3 items-center">
                                        <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt="">
                                        <span class="font-medium">{{ data.coin_name }}</span>
                                    </div>
                                </td>
                                <td class="p-3">
                                    <span class="font-medium">{{ data.lastPrice }}</span>
                                </td>

                                <td class="p-3">
                                    <span :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                        data.change24h }}%</span>
                                </td>

                                <td class="p-3">
                                    <span class="font-medium">{{ data.volume24h }}</span>
                                </td>

                                <td class="p-3">
                                    <a :href="data.btn" role="button" class="font-medium hover:text-[#f5f5f5]">{{ data.btn }}</a>
                                </td>
                            </tr>
                        </table>
                    </div>



                </div>

                <div class="lg:grid grid-rows-2  divide-y dark:divide-gray-50/50 hidden">
                    <div class="h-full px-5 py-1 font-medium">
                        <CommonUtilsMoreLink class=" border-b py-[.4rem] border-navColor/50 dark:border-navColor/20 flex justify-between items-center dark:text-white">
                            <h1 class="text-xl">{{ marketText.tab[3]}}</h1>

                            <template #link>
                                <a href="" class="">
                                    More &rarr;
                                </a>
                            </template>
                        </CommonUtilsMoreLink>

                        <table class="w-full" style="width: 100%;">
                            <tr class="">
                                <th class="text-left"></th>
                                <th class="text-left"></th>
                            </tr>

                            <tr v-for="(data, key) in marketText.tbody" :key="key" class="text-center dark:text-white">
                                <td class="p-3">
                                    <div class="flex gap-3 items-center">
                                        <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt="">
                                        <span class="font-medium">{{ data.coin_name }}</span>
                                    </div>
                                </td>
                                <td class="p-3">
                                    <div class="font-light">{{ data.lastPrice }}</div>

                                    <div :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                        data.change24h }}%</div>
                                </td>
                            </tr>
                        </table>
                    </div>


                    <div class="h-full px-5 py-2 font-medium">
                        <CommonUtilsMoreLink class=" border-b p-2 border-navColor/50 flex justify-between items-center dark:text-white">
                            <h1 class="text-xl">{{ marketText.tab[4] }}</h1>

                            <template #link>
                                <a href="" class="">
                                    More &rarr;
                                </a>
                            </template>
                        </CommonUtilsMoreLink>


                        <table class="w-full" style="width: 100%;">
                            <tr class="">
                                <th class="text-left"></th>
                                <th class="text-left"></th>
                            </tr>

                            <tr v-for="(data, key) in marketText.tbody" :key="key" class="text-center dark:text-white">
                                <td class="p-2">
                                    <div class="flex gap-3 items-center">
                                        <img src="~/assets/img/landingpage/BTC.png" class="w-[25px]" alt="">
                                        <span class="font-regular">{{ data.coin_name }}</span>
                                    </div>
                                </td>
                                <td class="p-2">
                                    <div class="font-light">{{ data.lastPrice }}</div>

                                    <div :class="data.change24h < 1 ? 'text-[#a72929]' : 'text-[#30ad30]'">{{
                                        data.change24h }}%</div>
                                </td>
                            </tr>

                        </table>
                    </div>
                </div>
            </div>

            <div class="text-center md:hidden sm:text-normal text-sm dark:text-white text-dark">
                <a href="" role="" class="w-full font-regular">
                    More &rarr;
            </a>
        </div>
    </div>
</section></template>