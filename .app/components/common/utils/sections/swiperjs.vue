<template>
    <swiper :breakpoints="{
        '0': {
            slidesPerView: 1,
            pagination: true,
        },
        '580': {
            slidesPerView: 1,
            pagination: true,
        },
        '640': {
            slidesPerView: 2,
            pagination: true,
        },
        '768': {
            slidesPerView: 3,
        },
        '1024': {
            slidesPerView: 3,
        },
        '1300': {
            slidesPerView: 4,
        },
    }"
    slidesPerView: 4,
    :spaceBetween="10" :autoplay="{ delay: 2500, disableOnInteraction: false }" :modules="modules">
        <swiper-slide>
            <img src="~/assets/img/landingpage/05.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="05">
        </swiper-slide>
        <swiper-slide>
            <img src="~/assets/img/landingpage/04.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="04">
        </swiper-slide>
        <swiper-slide>
            <img src="~/assets/img/landingpage/04.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="04">
        </swiper-slide>
        <swiper-slide>
            <img src="~/assets/img/landingpage/03.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="03">
        </swiper-slide>
        <swiper-slide>
            <img src="~/assets/img/landingpage/02.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="02">
        </swiper-slide>

        <swiper-slide>
            <img src="~/assets/img/landingpage/01.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="01">
        </swiper-slide>

        <swiper-slide>
            <img src="~/assets/img/landingpage/06.jpg"
                class="border rounded-md border-navColor/20 1300px:min-w-[310px]  npm install swiper vue-awesome-swiper --save object-contain object-cver"
                alt="06">
        </swiper-slide>

    </swiper>
</template>
  
<script>
import SwiperClass, { Pagination, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'


// import swiper module styles
import 'swiper/css'
import 'swiper/css/pagination'
// more module style...

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        return {
            modules: [Pagination, Autoplay]
        }
    }
}
</script>