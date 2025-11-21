<script setup lang="ts">
import type { Component } from 'vue';

defineProps<{
    label: string;
    icon: Component;
    selected?: boolean;
}>();
</script>

<template>
    <div class="option poppins-regular" :style="{backgroundColor: selected ? 'var(--secondary-color)' : '#FFFFFF' }">
        <component :is="icon" :size="20" :color="selected ? '#FFFFFF' : 'var(--secondary-color)'"/>
        <p :style="{color: selected ? '#FFFFFF' : 'var(--secondary-color)'}">{{ label }}</p>
    </div>
</template>

<style scoped>
.option {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    
    width: 100%;
    height: 40px;

    background-color: var(--secondary-color);
    padding: 0 20px;
    border-radius: 16px;
}
</style>