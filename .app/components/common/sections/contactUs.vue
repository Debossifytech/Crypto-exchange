
<script setup lang="ts">
const contactData = {
    section1: {
        headingL: "Access",
        headingB: "Anywhere, Anytime",
        desc: "Deposit , withdraw and Trade 24/7 on Zihux mobile Apps for IOS and Android",

        downloads: {
            small: "download from",
            from: ["Google Play", "App Store"]
        },
        qr: {
            text: "Scan now to download",
            subText: "IOS & Andriod"
        }
    },
    section2: {
        title1: "24/7 customer support",
        desc1: "Our customer service assistants will work with you via 24/7 live chat to reach a quick and efficient resolution",
        linkVal: "Chat Now",
        href1: "/user/support",

        title2: "FAQs",
        desc2: "Our FAQs are loaded with in-depth articles to help you troubleshoot issues or learn more.",
        linkVal2: "View More",
        href2: "#",
    },
    banner: "Get your first coin and",
    bannerB: "start trading!"
}
</script>
<template>
    <section>
        <div class="dark:bg-[rgb(44,44,46)] bg-[#f5f5f5] flex justify-center">
            <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full lg:p-10 p-5">
                <!-- access brands -->
                <div class="w-full flex justify-between">
                    <div class="">
                        <h1 class="dark:text-white 1300px:text-[2.6rem] lg:text-[2rem] text-2xl space-x-2 1300px:mb-5 mb-2">
                            <span>{{ contactData.section1.headingL }}</span>
                            <span class="font-medium">{{ contactData.section1.headingB }}</span>
                        </h1>

                        <p class="text-subTitleColor/80 font-light 1300px:text-xl lg:text-lg sm:text-md text-[1rem] mb-4 leading-tight ">{{ contactData.section1.desc }}</p>

                        <div class="flex gap-3 mb-5">
                            <div class="dak:bg-[#3a3a3c] dark:bg-[rgb(58,58,60)] bg-white flex items-center gap-2 px-4 py-2 rounded-md">
                                <img src="~/assets/img/landingpage/contactUs/googleIcon.svg" class="sm:min-w-[30px] min-w-[25px]"
                                    alt="google Play">

                                <div class="">
                                    <span class="text-xs font-light leading-tight text-subTitleColor whitespace-nowrap">{{
                                        contactData.section1.downloads.small
                                    }}</span>
                                    <div class="lg:text-lg sm:text-md text-xs leading-tight dak:text-white font-medium dark:text-white text-black">{{
                                        contactData.section1.downloads.from[0] }}</div>
                                </div>
                            </div>

                            <div class="dak:bg-[#3a3a3c] dark:bg-[rgb(58,58,60)] bg-white  flex items-center gap-2 px-4 py-2  rounded-md">
                                <img src="~/assets/img/landingpage/contactUs/appleIcon.svg" class="sm:min-w-[30px] min-w-[25px]"
                                    alt="google Play">
                                <div class="">
                                    <span class="text-xs font-light leading-tight text-subTitleColor whitespace-nowrap">{{
                                        contactData.section1.downloads.small
                                    }}</span>
                                    <div class="lg:text-lg sm:text-md text-xs leading-tight dak:text-white font-medium dark:text-white text-black">{{
                                        contactData.section1.downloads.from[1] }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="lg:flex items-center gap-3 hidden">
                            <div class="w-[200px] h-[200px] border rounded-md overflow-hidden">
                                <CommonUtilsQrcode />
                            </div>
                            <div class="dark:text-white">
                                <p class="font-medium text-sm">{{ contactData.section1.qr.text }}</p>
                                <p class="font-medium text-sm">{{ contactData.section1.qr.subText }}</p>
                            </div>
                        </div>
                    </div>

                    <figure>
                        <img src="~/assets/img/landingpage/contactUs/phone.svg" class="lg:w-max w-[200px] md:block hidden" alt="">
                    </figure>
                </div>


            </div>
        </div>


        <!-- faq -->

        <div class="flex justify-center lg:p-16 p-5">
            <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full grid md:grid-cols-2 grid-cols-1  gap-10 justify-between">
                <div class="lg:space-y-5 space-y-3 w-full">
                    <span class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24"
                            class="lg:w-[3em] w-[1.8em]">
                            <path fill="currentColor"
                                d="M12.41 1.51C7.543 1.28 3.5 5.178 3.5 10v5.75c0 1.436 1.133 2.595 2.542 2.708C6.157 20.419 7.762 22 9.75 22h.507c.228.301.587.5.993.5h1.5c.689 0 1.25-.56 1.25-1.25S13.439 20 12.75 20h-1.5c-.406 0-.765.198-.993.5H9.75c-1.163 0-2.072-.874-2.2-2h1.2a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75H5V10a6.987 6.987 0 0 1 7.339-6.992C16.096 3.184 19 6.43 19 10.218V11.5h-3.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 .75.75h2.5c1.51 0 2.75-1.24 2.75-2.75V10.219c0-4.558-3.51-8.494-8.09-8.71ZM5 13h3v4H6.25C5.55 17 5 16.449 5 15.75V13Zm11 0h3v2.75c0 .699-.55 1.25-1.25 1.25H16v-4Z">
                            </path>
                        </svg>
                    </span>

                    <div class="lg:space-y-5 space-y-3 dark:text-white">
                        <h2 class="1300px:text-3xl md:text-xl text-md font-medium">{{ contactData.section2.title1 }}</h2>
                        <p class="lg:text-lg text-sm font-light text-subTitleColor leading-tight mb-4">{{ contactData.section2.desc1 }}
                        </p>
                        <button>
                            <a :href="contactData.section2.href1" class="sm:text-md text-sm font-medium">{{ contactData.section2.linkVal
                            }} &rarr;</a>
                        </button>
                    </div>
                </div>


                <div class="lg:space-y-5 space-y-3 w-full">
                    <span class="text-primary">
                        <svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24"
                            class="lg:w-[3em] w-[1.8em]">
                            <path fill="currentColor"
                                d="M12.41 1.51C7.543 1.28 3.5 5.178 3.5 10v5.75c0 1.436 1.133 2.595 2.542 2.708C6.157 20.419 7.762 22 9.75 22h.507c.228.301.587.5.993.5h1.5c.689 0 1.25-.56 1.25-1.25S13.439 20 12.75 20h-1.5c-.406 0-.765.198-.993.5H9.75c-1.163 0-2.072-.874-2.2-2h1.2a.75.75 0 0 0 .75-.75v-5.5a.75.75 0 0 0-.75-.75H5V10a6.987 6.987 0 0 1 7.339-6.992C16.096 3.184 19 6.43 19 10.218V11.5h-3.75a.75.75 0 0 0-.75.75v5.5a.75.75 0 0 0 .75.75h2.5c1.51 0 2.75-1.24 2.75-2.75V10.219c0-4.558-3.51-8.494-8.09-8.71ZM5 13h3v4H6.25C5.55 17 5 16.449 5 15.75V13Zm11 0h3v2.75c0 .699-.55 1.25-1.25 1.25H16v-4Z">
                            </path>
                        </svg>
                    </span>

                    <div class="lg:space-y-5 space-y-3  dark:text-white  ">
                        <h2 class="1300px:text-3xl md:text-xl text-mdfont-medium">{{ contactData.section2.title2 }}</h2>
                        <p class="lg:text-lg text-sm font-light text-subTitleColor leading-tight mb-4">{{ contactData.section2.desc2 }}
                        </p>
                        <button>
                            <a :href="contactData.section2.href2" class="sm:text-md text-sm font-medium">{{ contactData.section2.linkVal2
                            }} &rarr;</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- banner black -->

        <div class="bg-black p-5 flex justify-center items-center">
            <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full flex flex-col md:flex-row gap-5 md:gap-0 justify-between items-center">
                <h1 class="space-x-2 text-white lg:text-3xl text-xl">
                    <span class="text-navColor font-light">{{ contactData.banner }}</span>
                    <span class="font-medium">{{ contactData.bannerB }}</span>
                </h1>

                <CommonUtilsRegisterBtn href="/trade/BTC/USDT" class="font-medium px-12">Trade Now</CommonUtilsRegisterBtn>
            </div>
        </div>

    </section>
</template>