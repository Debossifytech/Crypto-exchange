<script setup lang="ts">

defineProps({
    title: String,
    subTitle: String,
    gift: String,
    btnValue: String,
    href: String,
    cardStyle: String,
    btnClass: String
})
</script>

<template>
    <div class="flex flex-col lg:w-[400px] min-h rounded-lg p-5 lg:mb-0 mb-5 lg:space-y-5 divide-y dark:divide-gray-50/20" :class="cardStyle">
        <div class="grow">
            <h2 class="font-medium sm:text-md text-[1.1rem] dark:text-white text-dark">{{ title }}</h2>
            <p class="sm:text-sm text-[.8rem] text-subTitleColor py-2 font-light">{{ subTitle }}</p>
        </div>

        <div class="pt-3 flex justify-between items-center">
            <p class="text-sm flex gap-2 items-center text-dark dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24">
                    <path fill="currentColor"
                        d="M15.97 22.75h-8c-3.42 0-4.75-1.33-4.75-4.75v-8c0-.41.34-.75.75-.75h16c.41 0 .75.34.75.75v8c0 3.42-1.33 4.75-4.75 4.75Zm-11.25-12V18c0 2.58.67 3.25 3.25 3.25h8c2.58 0 3.25-.67 3.25-3.25v-7.25H4.72Z">
                    </path>
                    <path fill="currentColor"
                        d="M19.5 10.75h-15c-1.75 0-2.75-1-2.75-2.75V7c0-1.75 1-2.75 2.75-2.75h15c1.7 0 2.75 1.05 2.75 2.75v1c0 1.7-1.05 2.75-2.75 2.75Zm-15-5c-.91 0-1.25.34-1.25 1.25v1c0 .91.34 1.25 1.25 1.25h15c.88 0 1.25-.37 1.25-1.25V7c0-.88-.37-1.25-1.25-1.25h-15Z">
                    </path>
                    <path fill="currentColor"
                        d="M11.64 5.749H6.12c-.21 0-.41-.09-.55-.24-.61-.67-.59-1.7.05-2.34l1.42-1.42c.66-.66 1.75-.66 2.41 0l2.72 2.72c.21.21.28.54.16.82-.11.28-.38.46-.69.46Zm-4.97-1.5h3.17l-1.45-1.44a.205.205 0 0 0-.29 0l-1.42 1.42c0 .01-.01.01-.01.02Z">
                    </path>
                <path fill="currentColor"
                    d="M17.87 5.749h-5.52a.74.74 0 0 1-.69-.46c-.12-.28-.05-.6.16-.82l2.72-2.72c.66-.66 1.75-.66 2.41 0l1.42 1.42c.64.64.67 1.67.05 2.34-.14.15-.34.24-.55.24Zm-3.7-1.5h3.17l-.02-.02-1.42-1.42a.205.205 0 0 0-.29 0l-1.44 1.44ZM9.94 16.9a1.752 1.752 0 0 1-1.75-1.75V10c0-.41.34-.75.75-.75h6.04c.41 0 .75.34.75.75v5.13c0 .65-.35 1.24-.92 1.54-.57.31-1.26.27-1.8-.09l-.89-.6a.24.24 0 0 0-.28 0l-.94.62c-.29.2-.63.3-.96.3Zm-.25-6.15v4.39c0 .13.08.19.13.22s.15.06.26-.01l.94-.62c.59-.39 1.35-.39 1.93 0l.89.6c.11.07.21.04.26.01.05-.03.13-.09.13-.22v-4.38H9.69v.01Z">
                </path>
            </svg>
            <span class="text-xs">{{ gift }}</span>
        </p>
        <CommonUtilsRegisterBtn :class="btnClass" :href="href">
            {{ btnValue }}
        </CommonUtilsRegisterBtn>
    </div>
</div></template>