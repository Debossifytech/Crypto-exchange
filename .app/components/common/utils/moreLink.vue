<script setup lang="ts">
   defineProps({
     class: String
   })
</script>

<template>
    <div class="w-full" :class="class">
        <div class="">
            <slot></slot>
        </div>

        <a href="">
            <slot name="link"></slot>
        </a>
    </div>
</template>