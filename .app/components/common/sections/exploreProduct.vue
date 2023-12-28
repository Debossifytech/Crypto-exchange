<script setup>
import img1 from "~/assets/img/landingpage/exploreProduct/01.svg"
import img2 from "~/assets/img/landingpage/exploreProduct/02.svg"
import img3 from "~/assets/img/landingpage/exploreProduct/03.svg"
import img4 from "~/assets/img/landingpage/exploreProduct/04.svg"
import img5 from "~/assets/img/landingpage/exploreProduct/05.svg"
import img6 from "~/assets/img/landingpage/exploreProduct/06.svg"
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

const modules = [Autoplay, Pagination, Navigation]



const dataContent = {
    titleLight: "Explore",
    titleBold: "Our Product"
}
const exploreProduct = {
    section1: [
        {
            icon: img6,
            title: "Future Trading",
            desc: "An advanced platform, featuring up to 125X leverage, constant access, and superior risk management.",
            href: "/trade/BTC/USDT",
            hrefValue: "Trade Now"
        },
        {
            icon: img2,
            title: "Buy crypto via card",
            desc: "Purchase digital assets with ease using credit cards or over 60 fiat currencies, simplifying entry into crypto world.",
            href: "#",
            hrefValue: "Buy Now"
        },
        {
            icon: img3,
            title: "Trading Bot",
            desc: "Enhance trading strategies; automate and optimize trades for maximizing market opportunities.",
            href: "/trade/BTC/USDT",
            hrefValue: "Trade Now"
        },

    ],

    section2: [
        {
            icon: img1,
            title: "Spot Trading",
            desc: "A user-friendly platform with real-time market access and 600 crypto pairs, ensuring seamless transactions.",
            href: "/trade/BTC/USDT",
            hrefValue: "Trade Now"
        },
        {
            icon: img4,
            title: "Earn/Saving",
            desc: "Earn passive income on your digital assets, and ensure your financial future with our Crypto Savings feature.",
            href: "#",
            hrefValue: "Start Earning"
        },
        {
            icon: img5,
            title: "Demo Trading",
            desc: "Hone trading skills without risk and learn trading strategies using virtual funds in a simulated environment.",
            href: "/binary/BTC/USDT?isPractice=true",
            hrefValue: "Trade Now"
        }
    ]
}

const goToPrevious = () => {
    const swiper = document.querySelector('.mySwiper').swiper;
    swiper.slidePrev();
};

const goToNext = () => {
    const swiper = document.querySelector('.mySwiper').swiper;
    swiper.slideNext();
};

</script>

<template>
    <section class="flex justify-center pb-10">
        <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full lg:p-10 p-5">
            <div class="flex flex-col">
                <h1 class="1300px:text-[2.6rem] lg:text-[1.5rem] text-[1.3rem] mb-5 dark:text-white font-light">{{ dataContent.titleLight }} <span
                        class="font-medium">{{ dataContent.titleBold }}</span></h1>

                <div class="w-full lg:flex gap-5 hidden">
                    <CommonUtilsSectionsReuseableProducts :productData="exploreProduct.section1" />
                    <CommonUtilsSectionsReuseableProducts :productData="exploreProduct.section2" />
                </div>

                <div class="w-full lg:hidden">
                    <Swiper :navigation="{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    }" :centeredSlides="true" :autoplay="{
    delay: 4500,
    disableOnInteraction: false,
}" :modules="modules" class="mySwiper">
                        <template #navigation>
                            <div class="swiper-button-next"></div>
                            <div class="swiper-button-prev"></div>
                        </template>

                        <swiper-slide>
                            <CommonUtilsSectionsReuseableProducts :productData="exploreProduct.section1" />
                        </swiper-slide>
                        <swiper-slide>
                            <CommonUtilsSectionsReuseableProducts :productData="exploreProduct.section2" />
                        </swiper-slide>
                        <!-- Add more slides as needed -->
                    </Swiper>
                </div>


                <div class="flex justify-center mt-2 gap-2 lg:hidden dark:text-white">
                    <button @click="goToPrevious"
                        class="w-[35px] h-[35px] border rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>

                    </button>
                    <button @click="goToNext"
                        class="w-[35px] h-[35px] border rounded-full flex justify-center items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
</section></template>