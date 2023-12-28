
<script setup>
    defineProps({
        class: String,
        svgClass: String,
    })
</script>

<template>
    <figure class="group-hover:rotate-180 mt-1 transition-all duration-300 text-navColor" :class="class">
        <svg xmlns="http://www.w3.org/2000/svg"  width="1em" height="1em" fill="none" viewBox="0 0 24 24"
             :class="svgClass" class="w-3 h-3">
            <path fill="currentColor"
                d="M17.92 8.18H6.08c-.96 0-1.44 1.16-.76 1.84l5.18 5.18c.83.83 2.18.83 3.01 0l1.97-1.97 3.21-3.21c.67-.68.19-1.84-.77-1.84Z">
            </path>
        </svg>
    </figure>
</template>