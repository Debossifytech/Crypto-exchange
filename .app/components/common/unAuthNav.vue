<script setup lang="ts">
import toggleThemeMode, { getTheme } from '~/helpers/themeContext';

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

const navbarData: Array<{
    name: string,
    caret?: boolean,
    href?: string,
    dropdown?: Array<{
        icon: string,
        sub: string,
        title: string,
        href: string
    }>
}> = [
        {
            name: "Buy Crypto",
            caret: true,
            dropdown: [
                {
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M22 9.25H2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h20c.41 0 .75.34.75.75s-.34.75-.75.75ZM8 17.25H6c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75s-.34.75-.75.75ZM14.5 17.25h-4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path><path fill="currentColor" d="M17.56 21.25H6.44c-3.98 0-5.19-1.2-5.19-5.14V7.89c0-3.94 1.21-5.14 5.19-5.14h11.11c3.98 0 5.19 1.2 5.19 5.14v8.21c.01 3.95-1.2 5.15-5.18 5.15Zm-11.12-17c-3.14 0-3.69.54-3.69 3.64v8.21c0 3.1.55 3.64 3.69 3.64h11.11c3.14 0 3.69-.54 3.69-3.64V7.89c0-3.1-.55-3.64-3.69-3.64H6.44Z"></path></svg>
                    `,
                    title: "Credit/Debit Card",
                    sub: "Buy crypto via card",
                    href: "#"
                },
            ]
        },
        {
            name: "Binary",
            href: "/binary/BTC/USDT"
        },
        {
            name: "Trade",
            caret: true,
            dropdown: [
                {
                    icon: `
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 15.75c-.18 0-.38-.01-.57-.02a.751.751 0 0 1-.7-.69c-.22-2.79-2.49-5.05-5.27-5.27a.751.751 0 0 1-.69-.7c-.01-.19-.02-.38-.02-.57 0-4 3.25-7.25 7.25-7.25s7.25 3.25 7.25 7.25-3.25 7.25-7.25 7.25ZM9.75 8.36c2.98.52 5.37 2.91 5.89 5.89a5.755 5.755 0 0 0 5.61-5.75c0-3.17-2.58-5.75-5.75-5.75-3.12 0-5.67 2.5-5.75 5.61Z"></path><path fill="currentColor" d="M8.5 22.75c-4 0-7.25-3.25-7.25-7.25a7.255 7.255 0 0 1 7.82-7.23c3.53.28 6.39 3.14 6.66 6.65.01.2.02.39.02.58 0 4-3.25 7.25-7.25 7.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75a5.757 5.757 0 0 0 5.73-6.22c-.22-2.77-2.48-5.04-5.27-5.26-.14-.01-.3-.02-.46-.02ZM3 7.34a1.737 1.737 0 0 1-1.75-1.75V3c0-.96.79-1.75 1.75-1.75h2.59a1.752 1.752 0 0 1 1.24 2.99L4.24 6.83c-.34.33-.78.51-1.24.51Zm0-4.59c-.14 0-.25.11-.25.25v2.59c0 .15.1.21.15.23.06.02.17.05.27-.05l2.59-2.59c.1-.1.08-.21.05-.27-.03-.06-.09-.15-.23-.15H3v-.01ZM20.999 22.749h-2.59a1.752 1.752 0 0 1-1.24-2.99l2.59-2.59c.5-.5 1.25-.65 1.91-.38.66.27 1.08.91 1.08 1.62v2.59c0 .96-.79 1.75-1.75 1.75Zm-.01-4.59a.24.24 0 0 0-.17.08l-2.59 2.59c-.1.1-.08.21-.05.27.03.06.09.15.23.15h2.59c.14 0 .25-.11.25-.25v-2.59c0-.15-.1-.21-.15-.23a.36.36 0 0 0-.11-.02Z"></path></svg>
                    `,
                    title: "Spot",
                    sub: "Trade with competitive fees via advanced charting tools.",
                    href: "/trade/BTC/USDT"
                },
            ]
        },
        {
            name: "Derivatives",
            caret: true,
            dropdown: [
                {
                    icon: `
                        <svg xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M6.52 16.258c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l3.05-3.05c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.05 3.05c-.15.14-.34.22-.53.22Z"></path><path fill="currentColor" d="M9.6 16.29c-.19 0-.38-.07-.53-.22l-3.05-3.05a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l3.05 3.05c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22ZM13.54 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.44 1-1 1ZM17.48 15c-.55 0-1.01-.45-1.01-1s.44-1 .99-1h.02c.55 0 1 .45 1 1s-.45 1-1 1ZM15.5 16.97c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01ZM15.5 13.03c-.55 0-1-.44-1-.99v-.02c0-.55.45-1 1-1s1 .45 1 1-.44 1.01-1 1.01Z"></path><path fill="currentColor" d="M15 22.75H9c-5.43 0-7.75-2.32-7.75-7.75v-2c0-5.43 2.32-7.75 7.75-7.75h6c5.43 0 7.75 2.32 7.75 7.75v2c0 5.43-2.32 7.75-7.75 7.75Zm-6-16c-4.61 0-6.25 1.64-6.25 6.25v2c0 4.61 1.64 6.25 6.25 6.25h6c4.61 0 6.25-1.64 6.25-6.25v-2c0-4.61-1.64-6.25-6.25-6.25H9Z"></path><path fill="currentColor" d="M12.99 6.75h-1c-.96 0-1.75-.79-1.75-1.75s.78-1.75 1.74-1.75c.16 0 .27-.11.28-.25l.01-1.01c.01-.41.34-.74.75-.74h.01c.41.01.75.35.74.76l-.01 1.01c-.01.95-.8 1.73-1.75 1.73-.16 0-.26.11-.26.25s.11.25.25.25h1c.41 0 .75.34.75.75s-.35.75-.76.75Z"></path></svg>
                        `,
                    title: "Demo Trading",
                    sub: "Practice your strategies in Demo.",
                    href: "/binary/BTC/USDT?isPractice=true"
                },
            ]
        },
        {
            name: "Investment",
            href: "/user/invest"
        },
    ]



const close = ref(false)


function closeSideMethod(value: boolean) {
    close.value = value
}

// set class on scrollll
const setTheme = ref(false)
const handleScrollToggle = () => {
    if (window.scrollY > 200 && getTheme() === 'light') {
        // switch theme where light = true dark == false
        setTheme.value = true
    } else {
        setTheme.value = false
    }
}

onMounted(() => {
    window.addEventListener('scroll', handleScrollToggle)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScrollToggle)
})
</script>



<template>
    <header class="flex items-center justify-between px-5 p-3 z-10 fixed left-0 top-0 w-full transition-colors duration-200"
        :class="setTheme ? 'bg-white border-b' : 'bg-dark2'">
        <div class="flex items-center gap-5">
            <figure class="leading-[3]">
                <Logo style="width:8rem;" class="h-10" />
            </figure>

            <div class="lg:flex gap-5 hidden" :class="setTheme ?  'text-dark' : 'text-white' ">
                <figure class="group leading-[3.5] flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" fill="none" viewBox="0 0 24 24"
                        class="">
                        <path fill="currentColor"
                            d="M19 10.75h-2c-2.42 0-3.75-1.33-3.75-3.75V5c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25V5c0-1.58-.67-2.25-2.25-2.25h-2ZM7 22.75H5c-2.42 0-3.75-1.33-3.75-3.75v-2c0-2.42 1.33-3.75 3.75-3.75h2c2.42 0 3.75 1.33 3.75 3.75v2c0 2.42-1.33 3.75-3.75 3.75Zm-2-8c-1.58 0-2.25.67-2.25 2.25v2c0 1.58.67 2.25 2.25 2.25h2c1.58 0 2.25-.67 2.25-2.25v-2c0-1.58-.67-2.25-2.25-2.25H5Z">
                        </path>
                        <path fill="#FCD535"
                            d="M6 10.75c-2.62 0-4.75-2.13-4.75-4.75S3.38 1.25 6 1.25 10.75 3.38 10.75 6 8.62 10.75 6 10.75Zm0-8C4.21 2.75 2.75 4.21 2.75 6S4.21 9.25 6 9.25 9.25 7.79 9.25 6 7.79 2.75 6 2.75ZM18 22.75c-2.62 0-4.75-2.13-4.75-4.75s2.13-4.75 4.75-4.75 4.75 2.13 4.75 4.75-2.13 4.75-4.75 4.75Zm0-8c-1.79 0-3.25 1.46-3.25 3.25s1.46 3.25 3.25 3.25 3.25-1.46 3.25-3.25-1.46-3.25-3.25-3.25Z">
                        </path>
                    </svg>
                    <CommonUtilsSpinCaret  :svg-class="setTheme ? 'text-dark' : 'text-white'"/>
                </figure>

                <ul class="flex gap-5">
                    <li v-for="(data, key) in navbarData" :key="key" class="relative group">
                        <a :href="data.href" class="flex items-center gap-1 leading-[3.5rem] cursor-pointer">
                            <div>{{ data.name }}</div>
                            <CommonUtilsSpinCaret v-if="data.caret" :svg-class="setTheme ? 'text-dark' : 'text-white'"/>
                            <CommonUtilsDropdown :theme="setTheme" :dropdownData="data.dropdown" v-if="data.caret" />
                        </a>
                    </li>
                </ul>
            </div>

        </div>

        <!-- right side -->

        
        <div class="flex gap-3 text-navColor lg:divide-x divide-navColor/20">
            <div class="sm:flex gap-3 items-center hidden">
              <CommonUtilsRegisterBtn v-if="userStore.isLoggedIn" href="/user" class="bg-transparent border font-regular px-[.7rem] p-[3px]" :class="setTheme ? 'text-dark border-navColor/20' : 'text-white border-navColor/50'">Dashboard</CommonUtilsRegisterBtn>
              <template v-else>
                <CommonUtilsRegisterBtn href="/login" class="bg-transparent border font-regular px-[.7rem] p-[3px]" :class="setTheme ? 'text-dark border-navColor/20' : 'text-white border-navColor/50'">Login</CommonUtilsRegisterBtn>
                <CommonUtilsRegisterBtn href="/register" class="border font-regular px-[.7rem] p-[3px]" :class="setTheme ? 'text-dark border-black' : 'text-dark border-black'">Register</CommonUtilsRegisterBtn>
        </template>   
	 </div>

            <button class="lg:hidden block" @click="closeSideMethod(true)" :class="setTheme ? 'text-dark': 'text-white'">
                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none" viewBox="0 0 24 24" class=""
                    id="navbar_mobile_menu">
                    <path fill="currentColor"
                        d="M21 7.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 12.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75ZM21 17.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h18c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                    </path>
                </svg>
            </button>

            <div class="lg:flex hidden items-center leading-[3.5] gap-3" :class="setTheme ? 'text-dark': 'text-white'">
                <button class=" px-2 h-full flex items-center" @click="toggleThemeMode()">
                    <svg class="dark:block hidden" xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24" id="mobile_navbar_theme"><g fill="currentColor" clip-path="url(#sun-outline_svg__a)"><path d="M12 19.25C8 19.25 4.75 16 4.75 12S8 4.75 12 4.75 19.25 8 19.25 12 16 19.25 12 19.25Zm0-13c-3.17 0-5.75 2.58-5.75 5.75s2.58 5.75 5.75 5.75 5.75-2.58 5.75-5.75S15.17 6.25 12 6.25ZM12 22.96c-.55 0-1-.41-1-.96v-.08c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Zm7.14-2.82c-.26 0-.51-.1-.71-.29l-.13-.13a.996.996 0 1 1 1.41-1.41l.13.13a.996.996 0 0 1-.7 1.7Zm-14.28 0c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.45.29-.7.29ZM22 13h-.08c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1ZM2.08 13H2c-.55 0-1-.45-1-1s.45-1 1-1 1.04.45 1.04 1-.41 1-.96 1Zm16.93-7.01c-.26 0-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l.13-.13a.996.996 0 1 1 1.41 1.41l-.13.13c-.19.19-.44.29-.7.29Zm-14.02 0c-.26 0-.51-.1-.71-.29l-.13-.14a.996.996 0 1 1 1.41-1.41l.13.13c.39.39.39 1.02 0 1.41-.19.2-.45.3-.7.3ZM12 3.04c-.55 0-1-.41-1-.96V2c0-.55.45-1 1-1s1 .45 1 1-.45 1.04-1 1.04Z"></path></g><defs><clipPath id="sun-outline_svg__a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg>

                    <!-- light icon -->
                    <svg xmlns="http://www.w3.org/2000/svg" class="block dark:hidden" width="1.2em" height="1.2em" fill="none" viewBox="0 0 24 24"
                        id="navbar_theme">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M2.03 12.42c.36 5.15 4.73 9.34 9.96 9.57 3.69.16 6.99-1.56 8.97-4.27.82-1.11.38-1.85-.99-1.6-.67.12-1.36.17-2.08.14C13 16.06 9 11.97 8.98 7.14c-.01-1.3.26-2.53.75-3.65.54-1.24-.11-1.83-1.36-1.3C4.41 3.86 1.7 7.85 2.03 12.42Z">
                        </path>
                    </svg>
                </button>

                <button class=" px-2 h-full flex items-center" :class="setTheme ? 'text-dark' : 'text-white'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none" viewBox="0 0 24 24"
                       >
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                            stroke-width="1.5"
                            d="M13.87 3.2a6.754 6.754 0 0 0-3.7 0c.29-.74 1.01-1.26 1.85-1.26.84 0 1.56.52 1.85 1.26Z">
                        </path>
                        <path stroke="currentColor" stroke-miterlimit="10" stroke-width="1.5"
                            d="M15.02 19.06c0 1.65-1.35 3-3 3-.82 0-1.58-.34-2.12-.88a3.01 3.01 0 0 1-.88-2.12"></path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5"
                            d="M12.02 2.91c-3.31 0-6 2.69-6 6v2.89c0 .61-.26 1.54-.57 2.06L4.3 15.77c-.71 1.18-.22 2.49 1.08 2.93 4.31 1.44 8.96 1.44 13.27 0 1.21-.4 1.74-1.83 1.08-2.93l-1.15-1.91c-.3-.52-.56-1.45-.56-2.06V8.91c0-3.3-2.7-6-6-6Z">
                        </path>
                    </svg>
                </button>

                <div class="group cursor-pointer relative leading-[3.5] h-full flex items-center px-2" :class="setTheme ? 'text-dark' : 'text-white'">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none" viewBox="0 0 24 24"
                        id="navbar_download">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M16.44 8.9c3.6.31 5.07 2.16 5.07 6.21v.13c0 4.47-1.79 6.26-6.26 6.26H8.74c-4.47 0-6.26-1.79-6.26-6.26v-.13c0-4.02 1.45-5.87 4.99-6.2M12 2v12.88">
                        </path>
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15.35 12.65 12 16l-3.35-3.35"></path>
                    </svg>

                    <CommonUtilsDynamicDropdown class="absolute top-10 w-[220px] rounded-lg p-3 -right-4" :class="setTheme ? 'bg-white shadow-md': 'bg-[#272729]'">
                        <div class="flex items-center flex-col -translate-y">

                            <p class="text-xs mb-5">Scan to Download Zihux App</p>
                            <div class="w-[150px] h-[150px] flex justify-center items-center rounded-md border mb-2 overflow-hidden">
                                <CommonUtilsQrcode />
                            </div>
                            <a href="" class="font-semibold text-main">View More &rarr;</a>
                        </div>
                    </CommonUtilsDynamicDropdown>
                </div>
            </div>
        </div>
        <CommonUtilsSidebar @close-sidebar="closeSideMethod" :theme="setTheme" :closeSideBarState="close" />
    </header>
</template>
