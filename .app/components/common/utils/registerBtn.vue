<script setup lang="ts">
defineProps({
    class: String,
    href: String
})
</script>

<template>
    <a :href="href" role="button" class="bg-main p-[5px] rounded px-5 text-dark font-medium" :class="class">
        <slot></slot>
    </a>
</template>
