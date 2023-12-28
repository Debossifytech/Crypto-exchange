<script setup lang="ts">
import toggleThemeMode from '~/helpers/themeContext';

const { logout } = useAuth()

const app = useAppConfig()
const userStore = useUserStore()
const user = computed(() => userStore.getProfile)
const logoUrl = computed(() => getLogoUrl())
const { toast } = useUtils()
const router = useRouter()
async function Logout() {
  const response = await logout()
  userStore.clearProfile()
  userStore.setIsLoggedIn(false)
  router.push({ name: 'login' })
  toast.response(response)
}
 
const maskedEmail = computed(() => {
    const [username, domain] = user.value.email.split('@');
    const maskedUsername = username.slice(0, 3) + '***' + username.slice(-1);
    return `${maskedUsername}@${domain}`;
});


const securityLevel = computed(() => {
    if (user.value.email && user.value.kyc && user.value.twofactor) {
        // Neither email nor KYC is verified
        return 'High';
    } else if (!user.value.email && !user.value.kyc && !user.value.twofactor) {
        // Both email and KYC are verified
        return 'Low';
    } else if (user.value.email || user.value.kyc || !user.value.twofactor) {
        // Either email or KYC is verified
        return 'Medium';
    }
});

const sidebarData = [
    {
        caret: true,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4rem" height="1.4rem" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-5c0-3.08 1.9-5.31 4.85-5.68.28-.04.59-.07.9-.07h10c.24 0 .55.01.87.06 2.95.34 4.88 2.58 4.88 5.69v5c0 3.44-2.31 5.75-5.75 5.75Zm-10-15c-.24 0-.47.02-.7.05-2.2.28-3.55 1.88-3.55 4.2v5c0 2.58 1.67 4.25 4.25 4.25h10c2.58 0 4.25-1.67 4.25-4.25v-5c0-2.34-1.37-3.95-3.59-4.21-.24-.04-.45-.04-.66-.04H7Z"></path><path fill="currentColor" d="M6.19 7.81c-.24 0-.46-.11-.61-.31a.735.735 0 0 1-.06-.78c.17-.34.41-.67.72-.97l3.25-3.26a4.28 4.28 0 0 1 6.02 0l1.75 1.77c.74.73 1.19 1.71 1.24 2.75a.752.752 0 0 1-.87.78c-.2-.03-.41-.04-.63-.04H7c-.24 0-.47.02-.7.05-.03.01-.07.01-.11.01Zm1.67-1.56h8.96c-.13-.34-.34-.65-.62-.93l-1.76-1.78c-1.07-1.06-2.82-1.06-3.9 0L7.86 6.25ZM22 17.25h-3c-1.52 0-2.75-1.23-2.75-2.75s1.23-2.75 2.75-2.75h3c.41 0 .75.34.75.75s-.34.75-.75.75h-3a1.25 1.25 0 0 0 0 2.5h3c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path></svg>`,
        value: "Assets",
        dropdown: [
            {
                icon: "",
                value: "Dashboard",
                href: "/user"
            },
            {
                icon: "",
                value: "Profile",
                href: "/user/profile-edit"
            },
            {
                icon: "",
                value: "Security",
                href: "/user/profile-edit/security"
            },
            {
                icon: "",
                value: "KYC",
                href: "/user/kyc"
            },
            {
                icon: "",
                value: "Referral",
                href: "#"
            },
            {
                icon: "",
                value: "Support Ticket",
                href: "/user/support"
            },
        ]
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM12 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.05-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 12 2.75ZM12.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0Z"></path></svg>`,
        href: "/user/profile-edit",
        value: "Profile"
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 15.63c-1.32 0-2.4-1.08-2.4-2.4v-2.47c0-1.32 1.08-2.4 2.4-2.4 1.32 0 2.4 1.08 2.4 2.4v2.47a2.4 2.4 0 0 1-2.4 2.4Zm0-5.76c-.49 0-.9.4-.9.9v2.47c0 .5.4.9.9.9s.9-.4.9-.9v-2.47c0-.5-.41-.9-.9-.9Z"></path><path fill="currentColor" d="M12 18.82c-3.17 0-5.75-2.58-5.75-5.75v-2.14c0-3.17 2.58-5.75 5.75-5.75 2.96 0 5.42 2.22 5.72 5.16a.75.75 0 0 1-.67.82.744.744 0 0 1-.82-.67A4.236 4.236 0 0 0 12 6.68a4.26 4.26 0 0 0-4.25 4.25v2.14A4.26 4.26 0 0 0 12 17.32c2.2 0 4.06-1.72 4.24-3.91a.752.752 0 1 1 1.5.12c-.24 2.97-2.76 5.29-5.74 5.29ZM22 9.75c-.41 0-.75-.34-.75-.75V7c0-2.58-1.67-4.25-4.25-4.25h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c3.44 0 5.75 2.31 5.75 5.75v2c0 .41-.34.75-.75.75ZM2 9.75c-.41 0-.75-.34-.75-.75V7c0-3.44 2.31-5.75 5.75-5.75h2c.41 0 .75.34.75.75s-.34.75-.75.75H7C4.42 2.75 2.75 4.42 2.75 7v2c0 .41-.34.75-.75.75ZM17 22.75h-2c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c2.58 0 4.25-1.67 4.25-4.25v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 3.44-2.31 5.75-5.75 5.75ZM9 22.75H7c-3.44 0-5.75-2.31-5.75-5.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v2c0 2.58 1.67 4.25 4.25 4.25h2c.41 0 .75.34.75.75s-.34.75-.75.75Z"></path></svg>`,
        href: "/user/profile-edit/security",
        value: "Security"
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M15.96 21.32c-.19 0-.38-.07-.53-.22l-1.52-1.52a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.99.99L18.47 17c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-3.04 3.04c-.15.15-.34.22-.53.22ZM12.16 11.62h-.08a.543.543 0 0 0-.18 0C9 11.53 6.81 9.25 6.81 6.44c-.01-1.38.53-2.68 1.51-3.66a5.16 5.16 0 0 1 3.67-1.53c2.86 0 5.19 2.33 5.19 5.19 0 2.81-2.19 5.08-4.99 5.18h-.03Zm-.17-8.87c-.99 0-1.91.39-2.61 1.08-.69.7-1.07 1.62-1.07 2.6 0 2 1.56 3.62 3.55 3.68.06-.01.19-.01.32 0 1.97-.09 3.5-1.7 3.5-3.68 0-2.02-1.66-3.68-3.69-3.68Z"></path><path fill="currentColor" d="M11.99 22.56c-2.04 0-3.97-.53-5.43-1.51-1.39-.93-2.15-2.2-2.15-3.57 0-1.37.77-2.63 2.15-3.55 2.99-2 7.85-2 10.84 0 .34.23.44.7.21 1.04-.23.35-.7.44-1.04.21-2.49-1.66-6.69-1.66-9.18 0-.96.64-1.48 1.45-1.48 2.3 0 .85.52 1.68 1.48 2.32 1.21.81 2.84 1.25 4.59 1.25a.755.755 0 0 1 .01 1.51Z"></path></svg>`,
        href: "/user/kyc",
        value: "KYC"
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M9.16 11.62h-.08a.543.543 0 0 0-.18 0C6 11.53 3.81 9.25 3.81 6.44c0-2.86 2.33-5.19 5.19-5.19 2.86 0 5.19 2.33 5.19 5.19-.01 2.81-2.21 5.09-5 5.18h-.03ZM9 2.75a3.7 3.7 0 0 0-3.69 3.69c0 2 1.56 3.61 3.55 3.68.06-.01.19-.01.32 0 1.96-.09 3.5-1.7 3.51-3.68A3.7 3.7 0 0 0 9 2.75ZM16.54 11.75c-.03 0-.06 0-.09-.01-.41.04-.83-.25-.87-.66-.04-.41.21-.78.62-.83.12-.01.25-.01.36-.01 1.46-.08 2.6-1.28 2.6-2.75 0-1.52-1.23-2.75-2.75-2.75a.74.74 0 0 1-.75-.74c0-.41.34-.75.75-.75a4.26 4.26 0 0 1 4.25 4.25c0 2.3-1.8 4.16-4.09 4.25h-.03ZM9.17 22.55c-1.96 0-3.93-.5-5.42-1.5-1.39-.92-2.15-2.18-2.15-3.55 0-1.37.76-2.64 2.15-3.57 3-1.99 7.86-1.99 10.84 0 1.38.92 2.15 2.18 2.15 3.55 0 1.37-.76 2.64-2.15 3.57-1.5 1-3.46 1.5-5.42 1.5Zm-4.59-7.36c-.96.64-1.48 1.46-1.48 2.32 0 .85.53 1.67 1.48 2.3 2.49 1.67 6.69 1.67 9.18 0 .96-.64 1.48-1.46 1.48-2.32 0-.85-.53-1.67-1.48-2.3-2.49-1.66-6.69-1.66-9.18 0ZM18.34 20.75c-.35 0-.66-.24-.73-.6a.76.76 0 0 1 .58-.89c.63-.13 1.21-.38 1.66-.73.57-.43.88-.97.88-1.54 0-.57-.31-1.11-.87-1.53-.44-.34-.99-.58-1.64-.73a.756.756 0 0 1-.57-.9c.09-.4.49-.66.9-.57.86.19 1.61.53 2.22 1 .93.7 1.46 1.69 1.46 2.73s-.54 2.03-1.47 2.74c-.62.48-1.4.83-2.26 1-.06.02-.11.02-.16.02Z"></path></svg>`,
        href: "#",
        value: "Referral"
    },
    {
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="1.4em" height="1.4em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 20.75H7c-4.41 0-5.75-1.34-5.75-5.75v-.5c0-.41.34-.75.75-.75.96 0 1.75-.79 1.75-1.75S2.96 10.25 2 10.25c-.41 0-.75-.34-.75-.75V9c0-4.41 1.34-5.75 5.75-5.75h10c4.41 0 5.75 1.34 5.75 5.75v1c0 .41-.34.75-.75.75-.96 0-1.75.79-1.75 1.75s.79 1.75 1.75 1.75c.41 0 .75.34.75.75 0 4.41-1.34 5.75-5.75 5.75ZM2.75 15.16c.02 3.44.73 4.09 4.25 4.09h10c3.34 0 4.15-.59 4.24-3.59a3.25 3.25 0 0 1-2.49-3.16c0-1.53 1.07-2.82 2.5-3.16V9c0-3.57-.67-4.25-4.25-4.25H7c-3.52 0-4.23.65-4.25 4.09 1.43.34 2.5 1.63 2.5 3.16 0 1.53-1.07 2.82-2.5 3.16Z"></path><path fill="currentColor" d="M10 7.25c-.41 0-.75-.34-.75-.75V4c0-.41.34-.75.75-.75s.75.34.75.75v2.5c0 .41-.34.75-.75.75ZM10 14.58c-.41 0-.75-.34-.75-.75v-3.67c0-.41.34-.75.75-.75s.75.34.75.75v3.67c0 .42-.34.75-.75.75ZM10 20.75c-.41 0-.75-.34-.75-.75v-2.5c0-.41.34-.75.75-.75s.75.34.75.75V20c0 .41-.34.75-.75.75Z"></path></svg>`,
        href: "/user/support",
        value: "Support Ticket"
    },
]

const { closeUserSideBarState, theme } = defineProps(['closeUserSideBarState']);
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
    emit('close-user-sidebar', false)
}

watch([closeUserSideBarState], (newVal, oldVal) => {
    console.log(`Close prop changed from ${oldVal} to ${newVal}`);
});
</script>


<template>
    <div class="fixed inset-0 w-screen h-screen lg:hidden  bg-black/50" @click="closeSideBar" v-if="closeUserSideBarState">
    </div>
    <div class="fixed right-0 top-0 sm:w-[50%] w-[85%] h-screen overflow-y-auto transition-transform duration-500 ease-linear lg:hidden bg-white dark:bg-dark"
        :class="[closeUserSideBarState ? 'translate-x-0' : 'translate-x-[1000px]']">
        <div class="pt-5 p-5">
            <div class="flex justify-end items-center">
                <!-- <figure>
                            <img src="~/assets/img/Zihux.png" class="w-[65px] object-contain" alt="logo">
                        </figure> -->

                <div class="text-black dark:text-white mb-4 cursor-pointer" @click="closeSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 18 18">
                        <path fill="currentColor"
                            d="M16.742.488a.75.75 0 0 0-.523.231l-7.22 7.22L1.78.719a.75.75 0 1 0-1.06 1.06L7.939 9l-7.22 7.22a.75.75 0 1 0 1.06 1.06L9 10.06l7.22 7.22a.749.749 0 1 0 1.06-1.06l-7.22-7.22 7.22-7.22a.75.75 0 0 0-.537-1.29Z">
                        </path>
                    </svg>
                </div>
            </div>

            <!-- auth -->
            <div class="w-full flex gap-3  items-center">
                <div class="">
                    <div class="p-3 border-b dark:border-navColor/20">
                        <div class="flex items-center gap-4">
                            <div class="min-w-[40px] min-h-[40px] rounded-full text-white flex items-center justify-center"
                                style="background: linear-gradient(135deg, #7284da 50%, rgb(154, 160, 254) 50%);">
                                <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" fill="none"
                                    viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M12 2C9.38 2 7.25 4.13 7.25 6.75c0 2.57 2.01 4.65 4.63 4.74.08-.01.16-.01.22 0h.07a4.738 4.738 0 0 0 4.58-4.74C16.75 4.13 14.62 2 12 2ZM17.08 14.15c-2.79-1.86-7.34-1.86-10.15 0-1.27.85-1.97 2-1.97 3.23s.7 2.37 1.96 3.21C8.32 21.53 10.16 22 12 22c1.84 0 3.68-.47 5.08-1.41 1.26-.85 1.96-1.99 1.96-3.23-.01-1.23-.7-2.37-1.96-3.21Z">
                                    </path>
                                </svg>
                            </div>
                            <div class="leading-tight">
                                <div class="">
                                    <h2 class="font-light  text-md text-secondaryText leading-8">{{ maskedEmail }}
                                    </h2>
                                </div>


                                <div class="flex items-center gap-2">
                                    <div class="bg-[rgb(237,237,237)] dark:bg-dark3sub dark:text-[#939393]  rounded-full px-2 text-xs text-[#9c9c9e] flex items-center  gap-1 py-[.15rem]"
                                        :class="!verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                                        <svg width="20" height="20" viewBox="0 0 16 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path class="text-[#e1e3e5]"
                                                d="M7.16594 2.13289C7.62594 1.73956 8.37927 1.73956 8.84594 2.13289L9.89927 3.03956C10.0993 3.21289 10.4726 3.35289 10.7393 3.35289H11.8726C12.5793 3.35289 13.1593 3.93289 13.1593 4.63956V5.77289C13.1593 6.03289 13.2993 6.41289 13.4726 6.61289L14.3793 7.66622C14.7726 8.12622 14.7726 8.87956 14.3793 9.34622L13.4726 10.3996C13.2993 10.5996 13.1593 10.9729 13.1593 11.2396V12.3729C13.1593 13.0796 12.5793 13.6596 11.8726 13.6596H10.7393C10.4793 13.6596 10.0993 13.7996 9.89927 13.9729L8.84594 14.8796C8.38594 15.2729 7.6326 15.2729 7.16594 14.8796L6.1126 13.9729C5.9126 13.7996 5.53927 13.6596 5.2726 13.6596H4.11927C3.4126 13.6596 2.8326 13.0796 2.8326 12.3729V11.2329C2.8326 10.9729 2.6926 10.5996 2.52594 10.3996L1.62594 9.33956C1.23927 8.87956 1.23927 8.13289 1.62594 7.67289L2.52594 6.61289C2.6926 6.41289 2.8326 6.03956 2.8326 5.77956V4.63289C2.8326 3.92622 3.4126 3.34622 4.11927 3.34622H5.2726C5.5326 3.34622 5.9126 3.20622 6.1126 3.03289L7.16594 2.13289Z"
                                                fill="currentColor"></path>
                                            <path class="kyc_svg_tick"
                                                d="M7.1937 10.6129C7.06036 10.6129 6.9337 10.5595 6.84036 10.4662L5.22703 8.85286C5.0337 8.65953 5.0337 8.33953 5.22703 8.1462C5.42036 7.95286 5.74036 7.95286 5.9337 8.1462L7.1937 9.4062L10.0604 6.53953C10.2537 6.3462 10.5737 6.3462 10.767 6.53953C10.9604 6.73286 10.9604 7.05286 10.767 7.2462L7.54703 10.4662C7.4537 10.5595 7.32703 10.6129 7.1937 10.6129Z"
                                                fill="currentColor"></path>
                                        </svg>
                                        <p class="text-[10px] font-light dark:text-[#d4d4d5]">Email Verified</p>
                                    </div>

                       <!--             <div class="bg-[rgb(237,237,237)] dark:bg-dark3sub dark:text-[#939393]  flex px-2 items-center gap-1 text-secondaryText rounded-full py-1"
                                        :class="!verified ? 'bg-[rgb(237,237,237)]' : 'bg-green-400'">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none"
                                            viewBox="0 0 24 24">
                                            <path fill="currentColor"
                                                d="M16.7 19.73H7.3c-.74 0-1.49-.53-1.74-1.22L1.42 6.92c-.51-1.46-.14-2.13.26-2.43.4-.3 1.15-.48 2.41.42l3.9 2.79c.12.07.23.1.31.08.09-.03.16-.11.21-.25l1.76-4.69c.53-1.4 1.31-1.61 1.73-1.61.42 0 1.2.21 1.73 1.61l1.76 4.69c.05.13.12.22.21.25s.2 0 .31-.09l3.66-2.61c1.34-.96 2.12-.77 2.55-.46.42.32.81 1.03.26 2.58l-4.04 11.31c-.25.69-1 1.22-1.74 1.22ZM2.68 5.81c.02.14.06.34.16.6L6.98 18c.04.1.22.23.32.23h9.4c.11 0 .29-.13.32-.23l4.04-11.3c.14-.38.18-.64.19-.79-.15.05-.38.16-.71.4l-3.66 2.61c-.5.35-1.09.46-1.62.3-.53-.16-.96-.58-1.18-1.15l-1.76-4.69c-.13-.35-.25-.52-.32-.6-.07.08-.19.25-.32.59L9.92 8.06c-.21.57-.64.99-1.18 1.15-.53.16-1.13.05-1.62-.3l-3.9-2.79a2.76 2.76 0 0 0-.54-.31ZM17.5 22.75h-11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h11c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                            </path>
                                            <path fill="currentColor"
                                                d="M14.5 14.75h-5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h5c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                            </path>
                                        </svg>
                                        <p class="text-[10px] font-light dark:text-[#d4d4d5]">
                                            <span>Regular User</span>
                                        </p>
                                    </div> -->
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <ul class="space-y-2">
                <li v-for="(data, key) in sidebarData" :key="key" class="p-2">
                    <div class="">
                        <a :href="data.href" class="" v-if="!data.caret">
                            <div class="flex gap-2 items-center text-black dark:text-white">
                                <div v-html="data.svg"></div>
                                <div class="font-regular text-[1rem]">{{ data.value }}</div>
                            </div>
                        </a>

                        <div class="" v-else-if="data.caret" @click="dropMethod(data.value)">
                            <div class="flex justify-between items-center">
                                <div class="flex gap-2 items-center text-black dark:text-white">
                                    <div v-html="data.svg"></div>
                                    <div class="font-regular text-[1rem]">{{ data.value }}</div>
                                </div>

                                <CommonUtilsSpinCaret class="text-black dark:text-white"
                                    :class="mapMenu[data.value] ? 'rotate-180' : ''" />
                            </div>

                            <ul class="pl-5 py-0" v-for="(menu, key_menu) in data.dropdown" :key="key_menu"
                                v-if="mapMenu[data.value]">
                                <li class="p-2">
                                    <a :href="menu.href" class=" text-sm text-secondaryText dark:text-secondaryText">{{
                                        menu.value }}</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                </li>


                <!-- logout -->
                <button class="lg:hidden block text-dark dark:text-white" @click="Logout">
                    <li class="p-3  mt-[2rem] group-[.innerchild2]:hover:text-primary dark:hover:bg-dropdownHover">
                        <div class="flex items-center gap-2 dark:text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="none"
                                viewBox="0 0 24 24">
                                <path fill="currentColor"
                                    d="M15.24 22.27h-.13c-4.44 0-6.58-1.75-6.95-5.67-.04-.41.26-.78.68-.82.4-.04.78.27.82.68.29 3.14 1.77 4.31 5.46 4.31h.13c4.07 0 5.51-1.44 5.51-5.51V8.74c0-4.07-1.44-5.51-5.51-5.51h-.13c-3.71 0-5.19 1.19-5.46 4.39-.05.41-.4.72-.82.68a.751.751 0 0 1-.69-.81c.34-3.98 2.49-5.76 6.96-5.76h.13c4.91 0 7.01 2.1 7.01 7.01v6.52c0 4.91-2.1 7.01-7.01 7.01Z">
                                </path>
                                <path fill="currentColor"
                                    d="M15 12.75H3.62c-.41 0-.75-.34-.75-.75s.34-.75.75-.75H15c.41 0 .75.34.75.75s-.34.75-.75.75Z">
                                </path>
                                <path fill="currentColor"
                                    d="M5.85 16.1c-.19 0-.38-.07-.53-.22l-3.35-3.35a.754.754 0 0 1 0-1.06l3.35-3.35c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06L3.56 12l2.82 2.82c.29.29.29.77 0 1.06-.14.15-.34.22-.53.22Z">
                                </path>
                            </svg>

                            <span class="text-black dark:text-[#d4d4d5] font-regular">
                                Logout
                            </span>
                        </div>
                    </li>
                </button>
            </ul>

        </div>
    </div>
</template>