<script setup lang="ts">
defineProps({
    productData: Array<{
        icon: string,
        title: string,
        desc: string,
        href: string,
        hrefValue: string
    }>
})
</script>

<template>
    <div class="flex flex-col gap-3 dark:text-white">
        <a href="" role="dialog" v-for="(data, key) in productData">
            <div
                class="1300px:w-[600px] min-h-max flex gap-6 border dark:hover:border-[rgb(44,44,46)] dark:border-gray-50/20 group transition-all hover:bg-[#f5f5f5] dark:hover:bg-[rgb(44,44,46)] duration-300 1300px:p-8 p-4 rounded-md">
                <div
                    class="1300px:min-w-[130px] 1300px:h-[130px] md:min-w-[120px] min-w-[80px] md:h-[120px] h-[80px]   rounded-md group-hover:bg-white  dark:group-hover:bg-[#3a3a3c] transition-colors duration-300  bg-[#f5f5f5] dark:bg-[rgb(44,44,46)] flex justify-center items-center">
                    <img :src="data.icon" class="1300px:w-[100%] 1300px:h-full md:w-[150px] w-[120px] -translate-x-5 -translate-y-3" alt="">
                </div>

                <div class="space-y-2 flex flex-col">
                    <h2 class="1300px:text-xl text-md font-semibold md:block flex justify-between">
                        {{ data.title }}
                        <span class="md:hidden font-bold"> <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </span>
                    </h2>
                    <p class="font-light md:grow leading-tight text-subTitleColor 1300px:text-md text-sm mb-10">
                        {{
                            data.desc }}</p>

                    <div class="font-semibold md:flex hidden">
                        <a role="button" class="1300px:mt-5 mt-3 text-sm flex gap-2" :href="data.href">
                        {{
                            data.hrefValue }}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                                stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
    </a>
</div></template>