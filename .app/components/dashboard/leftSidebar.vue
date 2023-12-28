<script setup>
const sidenavBar = [
    {
        iconClassname: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg> `,
        href: "/user",
        value: "Dashboard"
    },

    {
        iconClassname: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>                        `,
        href: "/user/binary",
        value: "Binary Trading",
    },

    {
        caret: true,
        iconClassname: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                        </svg>
                        `,
        href: "#",
        value: "Wallets",
        dropdown: [
            {
                iconClassname: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>
                `,
                value: "Fiat Wallets",
                href: "/user/wallets/fiat"
            },
           {
                iconClassname: `
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18 12H6" />
                </svg>
                `,
                value: "Spot Wallets",
                href: "/user/wallets/spot"
            }
        ]
    },

    {
        iconClassname: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
</svg>
`,
       href: "/user/invest",
        value: "Investment",
    },

    {
        iconClassname: `
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
</svg>

        `,
        href: "/user/profile-edit/security",
        value: "Security",
    },

    {
        iconClassname: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>
`,
        href: "#",
        value: "Referral",
    },

    {
        iconClassname: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
</svg> `,
        href: "/user/support",
        value: "Support Ticket",
    }
]

const mapMenu = ref({})


function dropMethod(value) {
    if (!mapMenu.value[value]) {
        mapMenu.value[value] = true;
    } else {
        mapMenu.value[value] = !mapMenu.value[value];
    }
}
</script>

<template>
    <div
        class="dark:bg-[#272729] bg-[#f5f5f5] dark:text-white w-[240px] fixed pt-[4.7rem] top-0 h-full left-0 lg:block hidden ">
        <ul>
            <li v-for="(data, key) in sidenavBar" :key="key" class="leading-[1] group font-light">

                <CommonUtilsActiveLinks
                    class=" group-[.sidebar]:hover:bg-[rgb(241,241,244)] sidebar dark:hover:bg-transparent hover:bg-[rgb(241,241,244)] group-[.sidebar]:hover:text-primary  hover:text-primaryHover"
                    :href="data.href">
                    <div class="flex gap-2 items-center" v-if="!data.caret">
                        <i v-html="data.iconClassname" class="text-[1rem]"></i>
                        <div class="">{{ data.value }}</div>
                    </div>

                    <div v-else class="group-[.sidebar]:hover:bg-[rgb(241,241,244)]" @click="dropMethod(data.value)">
                        <div class="flex justify-between items-center">
                            <div class="flex items-center gap-2 ">
                                <i v-html="data.iconClassname" class="text-[1rem] font-light"></i>
                                <div class="">{{ data.value }}</div>
                            </div>

                            <div class="">
                             
                            <svg data-v-26e5b7b0="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="icon h-4 w-4 transition-transform duration-200" :class="mapMenu[data.value] ? 'rotate-180' : ''"  width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m18 15l-6-6l-6 6"></path></svg>
                            </div>
                        </div>

                        <ul class="pl-5 py-2 bg-transparent" v-for="(menu, key_menu) in data.dropdown" :key="key_menu"
                            v-if="mapMenu[data.value]">
                            <li class="p-2 flex items-center gap-2">
                                <div class="text-navColor" v-html="menu.iconClassname"></div>
                                <a :href="menu.href" class=" text-sm"
                                    :class="theme ? 'text-secondaryText' : 'text-secondaryText'">{{ menu.value }}</a>
                            </li>
                        </ul>
                    </div>
                </CommonUtilsActiveLinks>
            </li>

        </ul>
    </div>
</template>