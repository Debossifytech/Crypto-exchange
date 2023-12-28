<script setup lang="ts">
// const props = defineProps({
//     : Array<{
//         icon: string,
//         sub: string,
//         title: string,
//         href: string
//     }>,
//     theme: Boolean
// });

const {dropdownData} = defineProps(['dropdownData']);


</script>


<template>
    <ul
        class="absolute left-0 top-14  min-h min-w-[500px] rounded-lg py-1 group flex opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none bg-white shadow-lg dark:shadow-none  dark:bg-[#272729]">
        <li v-for="(data, key) in dropdownData" :key="key" class="min-w-full  group innerChild hover:bg-[#f3f3f3] dark:hover:bg-dropdownHover">
            <a :href="data.href" class="flex items-center justify-between p-3  group-[.innerChild]:hover:text-primaryHover">
                <div class="flex items-center gap-2">
                    <div class="p-1 rounded-md dark:bg-[#3a3a3c] bg-[#f7f7f7] w-[30px] h-[30px] flex justify-center items-center" v-html="data.icon">
                    </div>

                    <div class="w-full">
                        <h3 class="leading-tight text-sm text-black dark:text-white">{{ data.title }}</h3>
                        <p class="leading-tight text-xs text-secondaryText dark:text-subTitleColor">{{ data.sub }}</p>
                    </div>
                </div>

                <div class="opacity-100  group-[.innerChild]:hover:opacity-0 transition-all duration-500 text-primaryHover">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"
                        class="">
                        <path fill="currentColor"
                            d="M14.43 18.821c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l5.54-5.54-5.54-5.54a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l6.07 6.07c.29.29.29.77 0 1.06l-6.07 6.07c-.15.15-.34.22-.53.22Z">
                        </path>
                        <path fill="currentColor"
                            d="M20.33 12.75H3.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h16.83c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                        </path>
                    </svg>
                </div>
            </a>
        </li>
    </ul>
</template>