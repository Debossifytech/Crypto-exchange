<script setup lang="ts">
const props = defineProps({
    class: String,
});
</script>


<template>
    <div class="opacity-0 group-hover:opacity-100 group-hover:pointer-events-auto pointer-events-none"
        :class="class">
        <slot></slot>
    </div>
</template>