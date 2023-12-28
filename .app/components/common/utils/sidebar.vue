<script setup lang="ts">
import toggleThemeMode from '~/helpers/themeContext';

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

const sidebarData = [
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path><path fill="currentColor" d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h11.11c3.98 0 5.19 1.2 5.19 5.14v8.21c.01 3.95-1.2 5.15-5.18 5.15Zm-11.12-17c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64V7.89c0-3.1-.55-3.64-3.69-3.64H6.44Z"></path></svg>`,
        href: "#",
        value: "Buy Crypto",
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M5.418 18.958a.63.63 0 0 1-.625-.625V12.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v5.833a.63.63 0 0 1-.625.625ZM5.418 4.791a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625ZM14.582 18.959a.63.63 0 0 1-.625-.625v-2.5a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5a.63.63 0 0 1-.625.625ZM14.582 8.124a.63.63 0 0 1-.625-.625V1.666a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v5.833a.63.63 0 0 1-.625.625Z"></path><path fill="currentColor" d="M6.251 13.124H4.585c-1.434 0-2.292-.858-2.292-2.291v-5c0-1.434.858-2.292 2.292-2.292H6.25c1.434 0 2.292.858 2.292 2.292v5c0 1.433-.858 2.291-2.292 2.291ZM4.585 4.791c-.742 0-1.042.3-1.042 1.042v5c0 .741.3 1.041 1.042 1.041H6.25c.742 0 1.042-.3 1.042-1.041v-5c0-.742-.3-1.042-1.042-1.042H4.585ZM15.415 16.458H13.75c-1.434 0-2.292-.858-2.292-2.291v-5c0-1.434.858-2.292 2.292-2.292h1.666c1.434 0 2.292.858 2.292 2.292v5c0 1.433-.858 2.291-2.292 2.291ZM13.75 8.125c-.742 0-1.042.3-1.042 1.042v5c0 .741.3 1.041 1.042 1.041h1.666c.742 0 1.042-.3 1.042-1.041v-5c0-.742-.3-1.042-1.042-1.042H13.75Z"></path></svg>`,
        href: "/binary/BTC/USDT",
        value: "Binary"
    },
    {
        caret: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 15.75c-.18 0-.38-.01-.57-.02a.751.751 0 0 1-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 0 1-.69-.7c-.01-.19-.02-.38-.02-.57 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25ZM9.75 8.36c2.98.52 5.37 2.91 5.89 5.89a5.755 5.755 0 0 0 5.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61Z"></path><path fill="currentColor" d="M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 0 1 7.82-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75a5.757 5.757 0 0 0 5.73-6.22c-.22-2.77-2.48-5.04-5.27-5.26-.14-.01-.3-.02-.46-.02ZM3 7.34a1.737 1.737 0 0 1-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h2.59a1.752 1.752 0 0 1 1.24 2.99L4.24 6.83c-.34.33-.78.51-1.24.51Zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.1.21.15.23.06.02.17.05.27-.05l2.59-2.59c.1-.1.08-.21.05-.27-.03-.06-.09-.15-.23-.15H3v-.01ZM20.999 22.749h-2.59a1.752 1.752 0 0 1-1.24-2.99l2.59-2.59c.5-.5 1.25-.65 1.91-.38.66.27 1.08.91 1.08 1.62v2.59c0 .96-.79 1.75-1.75 1.75Zm-.01-4.59a.24.24 0 0 0-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27.03.06.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23a.36.36 0 0 0-.11-.02Z"></path></svg>`,
        value: "Trade",
        dropdown: [
            {
                value: "Spot",
                href: "/trade/BTC/USDT"
            }
        ]
    },
    {
        caret: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75V9c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v6c0 5.43-2.32 7.75-7.75 7.75Zm-6-20C4.39 2.75 2.75 4.39 2.75 9v6c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25V9c0-4.61-1.64-6.25-6.25-6.25H9Z"></path><path fill="currentColor" d="M17.5 10.07H6.97c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H17.5c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.52 14.07h-2.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.77c.41 0 .75.34.75.75s-.34.75-.75.75ZM17.52 17.5h-2.77c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2.77c.41 0 .75.34.75.75s-.34.75-.75.75ZM9.607 12.43l1.183 1.15c.899.875.918 2.31.044 3.208l-1.15 1.183a.623.623 0 0 1-.875.012.623.623 0 0 1-.012-.875l1.15-1.183a1.032 1.032 0 0 0-.02-1.458l-1.182-1.15a.623.623 0 0 1-.012-.875.623.623 0 0 1 .874-.012Z"></path></svg>`,
        value: "Derivatives",
        dropdown: [
            {
                value: "Demo Trading",
                href: "/binary/BTC/USDT?isPractice=true"
            }
        ]
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 20 20"><path fill="currentColor" d="M15.083 14.791H4.917c-1.934 0-3.042-1.108-3.042-3.042V1.666a.63.63 0 0 1 .625-.625h15a.63.63 0 0 1 .625.625v10.083c0 1.934-1.108 3.042-3.042 3.042ZM3.125 2.291v9.458c0 1.242.55 1.792 1.792 1.792h10.158c1.242 0 1.792-.55 1.792-1.792V2.291H3.125Z"></path><path fill="currentColor" d="M18.335 2.291H1.668a.63.63 0 0 1-.625-.625.63.63 0 0 1 .625-.625h16.667a.63.63 0 0 1 .625.625.63.63 0 0 1-.625.625ZM6.666 18.958a.618.618 0 0 1-.558-.342.621.621 0 0 1 .283-.842l2.983-1.491v-2.117a.63.63 0 0 1 .625-.625.63.63 0 0 1 .625.625v2.5c0 .233-.133.45-.35.558l-3.333 1.667a.636.636 0 0 1-.275.067Z"></path><path fill="currentColor" d="M13.334 18.959a.636.636 0 0 1-.275-.067l-3.333-1.666a.636.636 0 0 1-.284-.842.636.636 0 0 1 .842-.284l3.333 1.667a.636.636 0 0 1 .284.842.642.642 0 0 1-.567.35ZM6.25 9.792a.624.624 0 0 1-.4-1.108l2.625-2.192c.242-.2.55-.284.842-.234.3.05.558.234.716.5l.875 1.459 2.442-2.034a.632.632 0 0 1 .883.084.624.624 0 0 1-.083.883l-2.625 2.192c-.242.2-.55.283-.842.233-.3-.05-.558-.233-.716-.5l-.875-1.458L6.65 9.65a.651.651 0 0 1-.4.142Z"></path></svg>`,
        href: "/user/invest",
        value: "Investment"
    },
]

const sidebarMore = [
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="1.5" d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z"></path><path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5" d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"></path><path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z"></path></svg>`,
        value: "App",
        href: "#"
    },
    {
        theme: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24" class="navbar-module_darkmode_icon__yhJaJ"><path fill="currentColor" d="M15 22c-.41 0-.75-.34-.75-.75V2.75c0-.41.34-.75.75-.75s.75.34.75.75v18.5c0 .41-.34.75-.75.75Z"></path><path fill="currentColor" d="M18 20h-3V4h3c2.21 0 4 1.79 4 4v8c0 2.21-1.79 4-4 4Z"></path><path fill="#D4D4D5" d="M6 4C3.79 4 2 5.79 2 8v8c0 2.21 1.79 4 4 4h5c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1H6Zm1.75 11.5c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7c0-.41.34-.75.75-.75s.75.34.75.75v7Z"></path></svg>`,
        value: "Theme",
        href: "#",
        light: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24" class="navbar-module_right_icons__LKW2t" id="mobile_navbar_theme"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z"></path></svg>`,
        dark: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24" class="navbar-module_right_icons__LKW2t" id="mobile_navbar_theme"><g fill="currentColor" clip-path="url(#sun-outline_svg__a)"><path d="M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z"></path></g><defs><clipPath id="sun-outline_svg__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>`
    }

]


const { closeSideBarState, theme } = defineProps(['closeSideBarState', 'theme']);
const emit = defineEmits();

const mapMenu = ref({})


function dropMethod(value) {
    if (!mapMenu.value[value]) {
        mapMenu.value[value] = true;
    } else {
        mapMenu.value[value] = !mapMenu.value[value];
    }
}


function closeSideBar() {
    emit('close-sidebar', false)
}

watch([closeSideBarState, theme], (newVal, oldVal) => {
    console.log(`Close prop changed from ${oldVal} to ${newVal}`);
});
</script>


<template>
    <div class="fixed inset-0 w-screen h-screen lg:hidden  bg-black/50" @click="closeSideBar" v-if="closeSideBarState">
    </div>
    <div class="fixed right-0 top-0 sm:w-[35%] w-[85%] h-screen overflow-y-auto transition-transform duration-500 ease-linear lg:hidden"
        :class="[closeSideBarState ? 'translate-x-0' : 'translate-x-[1000px]', theme ? 'bg-white' : 'bg-dark']">
        <div class="pt-5 p-5">
            <div class="flex justify-between items-center">
                <figure>
                    <Logo style="width:8rem;" class="h-10" />
                </figure>

                <div :class="theme ? 'bg:text-black' : 'text-white'" class="mb-4 cursor-pointer" @click="closeSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 18 18">
                        <path fill="currentColor"
                            d="M16.742.488a.75.75 0 0 0-.523.231l-7.22 7.22L1.78.719a.75.75 0 1 0-1.06 1.06L7.939 9l-7.22 7.22a.75.75 0 1 0 1.06 1.06L9 10.06l7.22 7.22a.749.749 0 1 0 1.06-1.06l-7.22-7.22 7.22-7.22a.75.75 0 0 0-.537-1.29Z">
                        </path>
                    </svg>
                </div>
            </div>

            <!-- auth -->
            <div class="w-full flex gap-3  items-center my-5">
              <CommonUtilsRegisterBtn v-if="userStore.isLoggedIn" href="/user" class="bg-transparent w-1/2 text-center  font-medium border "
                    :class="theme ? 'text-black border-gray-200' : 'text-white border-gray-50/20'">Dashboard
                </CommonUtilsRegisterBtn>
                <template v-else>
                <CommonUtilsRegisterBtn href="/login" class="bg-transparent w-1/2 text-center  font-medium border "
                    :class="theme ? 'text-black border-gray-200' : 'text-white border-gray-50/20'">Login
                </CommonUtilsRegisterBtn>
                <CommonUtilsRegisterBtn href="/register" class="w-1/2 flex justify-center gap-1 items-center px-[.3rem]"
                    :class="theme ? 'border border-dark' : ''">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" fill="none" viewBox="0 0 24 24"
                            class="navbar-module_gift__V7jTz">
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
                    </span>
                    <span>Register</span>
                </CommonUtilsRegisterBtn>
                </template>
            </div>

            <ul class="space-y-2">
                <li v-for="(data, key) in sidebarData" :key="key" class="p-2">
                    <div class="">
                        <a :href="data.href" class="" v-if="!data.caret">
                            <div class="flex gap-2 items-center" :class="theme ? 'text-black' : 'text-white'">
                                <div v-html="data.svg"></div>
                                <div class="font-normal text-[1rem]">{{ data.value }}</div>
                            </div>
                        </a>
                        <div class="" v-else-if="data.caret" @click="dropMethod(data.value)">
                            <div class="flex justify-between items-center">
                                <div class="flex gap-2 items-center" :class="theme ? 'text-black' : 'text-white'">
                                    <div v-html="data.svg"></div>
                                    <div class="font-normal text-[1rem]">{{ data.value }}</div>
                                </div>

                                <CommonUtilsSpinCaret :svg-class="theme ? 'text-black' : 'text-white'"
                                    :class="mapMenu[data.value] ? 'rotate-180' : ''" />
                            </div>

                            <ul class="pl-5 py-2" v-for="(menu, key_menu) in data.dropdown" :key="key_menu"
                                v-if="mapMenu[data.value]">
                                <li class="p-2">
                                    <a :href="menu.href" class=" text-sm"
                                        :class="theme ? 'text-secondaryText' : 'text-secondaryText'">{{ menu.value }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="w-full h-[.1px] my-5" :class="theme ? 'bg-dark/20' : 'bg-white/20'"></div>

            <ul class="space-y-2">
                <li v-for="(data, key) in sidebarMore" :key="key" class="p-2">
                    <div class="">
                        <a :href="data.href" class="" v-if="!data.caret">
                            <div class="flex items-center justify-between" :class="theme ? 'text-dark' : 'text-white'">
                                <div class="flex gap-2">
                                    <div v-html="data.svg"></div>
                                    <div class="font-regular text-[1rem]">{{
                                        data.value }}</div>
                                </div>
                                <div class="dark:block hidden" v-html="data.dark" v-if="data.dark"
                                    @click="toggleThemeMode()"></div>
                                <div class="block dark:hidden" v-html="data.light" v-if="data.light"
                                    @click="toggleThemeMode()"></div>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>