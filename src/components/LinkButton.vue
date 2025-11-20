<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps<{
    label: string;
    routeName: string;
}>();
</script>

<template>
    <a class="poppins-regular" @click="router.push({name: routeName})">{{ label }}</a>
</template>

<style scoped>
a {
 color: var(--primary-color);
 text-decoration: underline;
}

a:hover {
    cursor: pointer;
}

a:hover {
    color: var(--secondary-color);
}
</style>