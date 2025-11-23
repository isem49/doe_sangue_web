<script setup lang="ts">
const props = defineProps<{
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    disabled?: boolean;
}>();

const modelValue = defineModel<string>();
</script>

<template>
    <div class="input-container poppins-regular">
        <label :for="id">{{ label }}</label>

        <input class="poppins-regular" :id="id" :type="type ?? 'text'" :placeholder="placeholder"
            :disabled="props.disabled" v-model="modelValue" />
    </div>
</template>

<style scoped>
.input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-container input {
    width: 100%;
    height: 40px;

    border-radius: 8px;
    border: 1px solid var(--input-border-color);
    padding: 0 16px;

    background-color: white;
}

/* Aparência quando está desabilitado */
.input-container input:disabled {
    background-color: #f2f2f2;
    cursor: not-allowed;
    opacity: 0.7;
}

.input-container input:focus {
    outline: none;
    border-color: var(--primary-color);
}
</style>
