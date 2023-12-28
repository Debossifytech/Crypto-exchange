<script setup lang="ts">
const riskDisclaimer = {
    name: "Risk Disclaimer",
    desc1: `Trading on Margin i n cryptocurrencies and their derivatives, or the Forex market, carries high volatility and high risks that may cause losses to your capital.`,
    desc2: `
        In addition, the services and products might not be suitable for everyone. Zihux LLC by registration number as 264.110.1196642 and with physical and register address of Kanaker HES, Kanaker-Zeytun, Yerevan, Armenia, is not responsible for any losses in the market, which can be partial or total to your assets.
    `,
    desc3: `
        Zihux, any affiliated individual and its company partners have no responsibility for your trading or investing results, whether they are profits or losses. Please make sure that you are aware of all the risks involved. We recommend that you consider the risks associated with these services and products.
    `,
    desc4: `
         Zihux LLC does not provide any services in USA.
    `
}
const footer = [
    {
        name: "Company",
        lists: [
            "About Us",
            "Policy / AML",
            "Terms Of Use",
            "Community",
            "Partnership",
            "E-Learning"
        ]
    },
    {
        name: "Products",
        lists: [
            "Market",
            "Spot Trading",
            "Futures Trading",
            "Demo Trading",
            "Buy Crypto",
            "NFT Market Place",
            "Zihux Wallet",
            "API Document"
        ]
    },
    {
        name: "Support",
        lists: [
            "Contact Us",
            "Insurance",
            "Submit a Ticket",
            "24/7 Chat Online",
            "FAQ",
            "Announcement & News"
        ]
    },
    {
        name: "Services",
        lists: [
            "Download App",
            "iOS Early Access",
            "Trading Rules",
            "Fees & Conditions",
            "VIP Portal",
            "Affiliate",
            "Referral Program"
        ]
    },
    {
        name: "Buy Crypto",
        lists: [
            "Buy Bitcoin",
            "Buy BNB",
            "Buy Ethereum",
            "Buy USDT",
            "Buy 1Inch",
            "Buy Tron",
            "Buy Bitcash"
        ]
    }
]

const show: any = ref({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false
})
</script>

<template>
    <section class="w-full dark:bg-dark bg-white flex flex-col items-center p-5">
        <div class="1300px:w-[1300px] lg:w-[1024px] md:w-[768px] sm:w-[640px] w-full py-10">
            <div class="grid lg:grid-cols-6 w-full lg:gap-0 gap-3">
                <div class="" v-for="(data, key) in footer" key="i">
                    <h3 class="font-regular dark:text-white text-md lg:mb-5 flex lg:block justify-between lg:p-0 lg:cursor-default p-2 cursor-pointer" @click="show[key] = !show[key]">
                        <span>{{ data.name }}</span>
                        <CommonUtilsSpinCaret class="text-black lg:hidden" svgClass="text-black dark:text-white w-10"/>
                    </h3>

                    <ul class="space-y-2 text-secondaryText lg:ml-0 ml-5 lg:hidden" v-if="show[key]">
                        <li class="font-light text-md" v-for="(list, i) in data.lists" key="i">
                            {{ list }}
                        </li>
                    </ul>
                    <ul class="space-y-2 text-secondaryText lg:ml-0 ml-5 lg:block hidden">
                        <li class="font-light text-md" v-for="(list, i) in data.lists" key="i">
                            {{ list }}
                        </li>
                    </ul>
                </div>

                <!--  -->
                <div class="lg:flex items-center flex-col -translate-y hidden">
                    <figure>
                        <img class="w-[150px] object-contain p-0" src="~/assets/img/zihux_logo.svg" alt="">
                    </figure>
                    <div class="w-[150px] h-[150px] flex justify-center items-center rounded-md border mb-2">
                        <CommonUtilsQrcode />
                    </div>
                    <p class="text-xs dark:text-white">Scan to Download Zihux App</p>
                </div>
            </div>


            <div class="w-full flex justify-between lg:justify-normal lg:gap-2 items-baseline  lg:mt-10 mt-5 lg:px-0 px-2">
                <h3 class="text-lg font-regular dark:text-white">Community</h3>
                <div class="flex items-center gap-3 text-secondaryText">
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.91512 11.8078C9.19912 9.04334 17.3311 5.67284 18.4536 5.20634C21.3981 3.98534 22.3016 4.21934 21.8511 6.92334C21.5276 8.86684 20.5941 15.3013 19.8501 19.3063C19.4086 21.6813 18.4181 21.9628 16.8606 20.9353C16.1116 20.4408 12.3311 17.9408 11.5106 17.3538C10.7616 16.8188 9.72862 16.1753 11.0241 14.9078C11.4851 14.4563 14.5071 11.5708 16.8616 9.32484C17.1701 9.02984 16.7826 8.54534 16.4266 8.78184C13.2531 10.8863 8.85312 13.8073 8.29312 14.1878C7.44712 14.7623 6.63462 15.0258 5.17612 14.6068C4.07412 14.2903 2.99762 13.9128 2.57862 13.7688C0.965116 13.2148 1.34812 12.4973 2.91512 11.8078Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M8.25 2.5C5.0795 2.5 2.5 5.0795 2.5 8.25V15.75C2.5 18.9205 5.0795 21.5 8.25 21.5H15.75C18.9205 21.5 21.5 18.9205 21.5 15.75V8.25C21.5 5.0795 18.9205 2.5 15.75 2.5H8.25ZM17 6C17.5525 6 18 6.4475 18 7C18 7.552 17.5525 8 17 8C16.4475 8 16 7.552 16 7C16 6.4475 16.4475 6 17 6ZM12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7ZM12 8.5C11.5404 8.5 11.0852 8.59053 10.6606 8.76642C10.236 8.94231 9.85013 9.20012 9.52513 9.52513C9.20012 9.85013 8.94231 10.236 8.76642 10.6606C8.59053 11.0852 8.5 11.5404 8.5 12C8.5 12.4596 8.59053 12.9148 8.76642 13.3394C8.94231 13.764 9.20012 14.1499 9.52513 14.4749C9.85013 14.7999 10.236 15.0577 10.6606 15.2336C11.0852 15.4095 11.5404 15.5 12 15.5C12.4596 15.5 12.9148 15.4095 13.3394 15.2336C13.764 15.0577 14.1499 14.7999 14.4749 14.4749C14.7999 14.1499 15.0577 13.764 15.2336 13.3394C15.4095 12.9148 15.5 12.4596 15.5 12C15.5 11.5404 15.4095 11.0852 15.2336 10.6606C15.0577 10.236 14.7999 9.85013 14.4749 9.52513C14.1499 9.20012 13.764 8.94231 13.3394 8.76642C12.9148 8.59053 12.4596 8.5 12 8.5V8.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 2C6.486 2 2 6.486 2 12C2 16.324 4.7635 20.005 8.6135 21.397C8.5735 20.789 8.5 19.61 8.5 19.2085C8.5 18.208 8.6145 17.9075 8.6145 17.9075L9.748 13.193C9.5805 12.703 9.5 12.1535 9.5 11.6405C9.5 10.695 10.1095 9.75 11 9.75C11.661 9.75 12.25 10.25 12.25 11.2265C12.25 11.516 12.21 11.856 12.1095 12.2535L11.7275 13.765C11.613 14.1975 11.5245 15.0295 11.8965 15.518C12.1085 15.7955 12.4785 15.963 13 16C15.061 16 16 13.797 16 11.75C16 7.619 12.409 7.5 12 7.5C9.5185 7.5 7.5 9.3505 7.5 11.625C7.5 12.5925 7.8 13.305 8.158 13.8175C8.2295 13.92 8.258 14.0455 8.2285 14.167L7.949 15.329C7.91 15.4915 7.707 15.558 7.5865 15.4425C6.5755 14.471 6 13.115 6 11.625C6 8.5235 8.6915 6 12 6C15.4205 6 18 8.4185 18 11.625C18 14.8645 15.869 17.5 13.25 17.5C12.2795 17.5 11.5195 17.2385 10.979 16.728L10.464 18.766C10.2045 19.711 9.888 20.5755 9.0625 21.558C9.992 21.8445 10.978 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M22.3598 5.1525C22.2123 5 21.9853 4.9565 21.7918 5.0455L21.7098 5.083C21.6403 5.115 21.5708 5.147 21.5008 5.1785C21.7043 4.854 21.8658 4.507 21.9773 4.148C22.0393 3.95 21.9718 3.7335 21.8078 3.6055C21.6438 3.4775 21.4178 3.464 21.2403 3.5725C20.6698 3.919 20.1218 4.1685 19.5553 4.3425C18.7003 3.513 17.5358 3 16.2503 3C13.6268 3 11.5003 5.1265 11.5003 7.75C11.5003 7.7525 11.5003 7.8515 11.5003 8L11.0008 7.96C6.13928 7.385 4.75528 4.115 4.69778 3.974C4.60478 3.739 4.39978 3.5675 4.15228 3.516C3.90528 3.4635 3.64878 3.541 3.46978 3.7195C3.37078 3.819 2.50028 4.74 2.50028 6.5C2.50028 7.754 3.05928 8.771 3.78278 9.562C3.44578 9.3565 3.24928 9.19 3.24428 9.1855C3.01378 8.9845 2.68378 8.9425 2.40978 9.0815C2.13678 9.221 1.97578 9.5125 2.00328 9.818C2.01278 9.9235 2.22578 11.9245 4.53728 13.4355L4.11578 13.512C3.86028 13.5585 3.64678 13.734 3.55178 13.976C3.45728 14.2185 3.49428 14.492 3.65028 14.7C3.70278 14.7705 4.67928 16.04 6.79978 16.77C5.66728 17.1475 4.11128 17.5 2.25028 17.5C1.95628 17.5 1.68878 17.672 1.56728 17.94C1.44528 18.208 1.49178 18.5225 1.68578 18.7435C1.76628 18.836 3.71778 21 8.75028 21C17.1068 21 21.0003 13.2425 21.0003 8V7.75C21.0003 7.676 20.9923 7.6035 20.9893 7.5305C22.0353 6.5195 22.4288 5.761 22.4478 5.7235C22.5423 5.5335 22.5073 5.3045 22.3598 5.1525Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                    <a href="">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.25 6.06445C6.42924 6.06445 5.61651 6.22611 4.85823 6.54021C4.09994 6.8543 3.41095 7.31467 2.83058 7.89504C2.25022 8.4754 1.78984 9.1644 1.47575 9.92268C1.16166 10.681 1 11.4937 1 12.3145C1 13.1352 1.16166 13.9479 1.47575 14.7062C1.78984 15.4645 2.25022 16.1535 2.83058 16.7339C3.41095 17.3142 4.09994 17.7746 4.85823 18.0887C5.61651 18.4028 6.42924 18.5645 7.25 18.5645C8.07076 18.5645 8.88349 18.4028 9.64177 18.0887C10.4001 17.7746 11.0891 17.3142 11.6694 16.7339C12.2498 16.1535 12.7102 15.4645 13.0242 14.7062C13.3383 13.9479 13.5 13.1352 13.5 12.3145C13.5 11.4937 13.3383 10.681 13.0242 9.92268C12.7102 9.1644 12.2498 8.4754 11.6694 7.89504C11.0891 7.31467 10.4001 6.8543 9.64177 6.54021C8.88349 6.22611 8.07076 6.06445 7.25 6.06445V6.06445ZM19.865 10.605C19.836 10.425 19.802 10.2485 19.764 10.0765C19.688 9.73245 19.595 9.40545 19.4875 9.09995C19.4335 8.94695 19.376 8.79945 19.315 8.65745C19.0705 8.08945 18.77 7.61295 18.43 7.25895C18.005 6.81645 17.518 6.56495 17 6.56495C16.482 6.56495 15.995 6.81645 15.57 7.25895C15.23 7.61295 14.9295 8.08945 14.685 8.65745C14.624 8.79945 14.566 8.94695 14.5125 9.09995C14.4045 9.40595 14.312 9.73295 14.236 10.0765C14.198 10.2485 14.1645 10.4245 14.135 10.605C14.047 11.145 14 11.7195 14 12.3145C14 15.49 15.343 18.0645 17 18.0645C18.657 18.0645 20 15.49 20 12.3145C20 11.7195 19.953 11.145 19.865 10.605ZM21.75 7.06445C21.0595 7.06445 20.5 9.41495 20.5 12.3145C20.5 12.4955 20.502 12.675 20.5065 12.8515C20.532 13.9105 20.6325 14.8765 20.7855 15.654C20.8365 15.9135 20.893 16.1515 20.955 16.3655C21.0165 16.5795 21.0835 16.769 21.1545 16.9305C21.3315 17.3345 21.5345 17.564 21.7505 17.564C21.9665 17.564 22.169 17.3345 22.3465 16.9305C22.4175 16.769 22.484 16.5795 22.546 16.3655C22.6075 16.1515 22.6645 15.913 22.7155 15.654C22.8685 14.876 22.969 13.9105 22.9945 12.8515C22.998 12.675 23 12.496 23 12.3145C23 9.41495 22.4405 7.06445 21.75 7.06445Z"
                                fill="currentColor"></path>
                        </svg>
                    </a>
                </div>
            </div>

            <div class="w-full h-[1px] bg-secondaryText/30 mt-10"></div>

            <div class="py-5">
                <h2 class="font-regular text-md mb-2 dark:text-white">{{ riskDisclaimer.name }}</h2>
                <div class="">
                    <p class="text-md font-light leading-[1.2] text-secondaryText">{{ riskDisclaimer.desc1 }}</p>
                    <p class="text-md font-light leading-[1.2] text-secondaryText">{{ riskDisclaimer.desc2 }}</p>
                    <p class="text-md font-light leading-[1.2] text-secondaryText">{{ riskDisclaimer.desc3 }}</p>
                    <p class="text-md font-light leading-[1.2] text-secondaryText">{{ riskDisclaimer.desc4 }}</p>
                </div>
            </div>
        </div>
    </section>
</template>