<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../../components/CustomButton.vue';

const emit = defineEmits<{
    next: []
    back: []
}>();

const CODE_LENGTH = 6;
const code = ref<string[]>(Array(CODE_LENGTH).fill(''));
const inputsRef = ref<(HTMLInputElement | null)[]>([]);

const setInputRef = (el: any, idx: number) => {
    if (el) {
        inputsRef.value[idx] = el as HTMLInputElement;
    }
};

const handleChange = (event: Event, idx: number) => {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (!/^[0-9]?$/.test(value)) return;

    code.value[idx] = value;

    if (value && idx < CODE_LENGTH - 1) {
        inputsRef.value[idx + 1]?.focus();
    }
};

const handleKeyDown = (event: KeyboardEvent, idx: number) => {
    if (event.key === 'Backspace' && !code.value[idx] && idx > 0) {
        inputsRef.value[idx - 1]?.focus();
    }
};

const handleSubmit = () => {
    emit('next');
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="verify-code-form">
        <h2 class="verify-code-title">Confirmação de identidade</h2>
        <p class="verify-code-text">
            Digite o código de verificação enviado para o email cadastrado.
        </p>
        <div class="verify-code-inputs">
            <input v-for="(digit, idx) in code" :key="idx" :ref="el => setInputRef(el, idx)" class="verify-code-input"
                type="text" inputmode="numeric" maxlength="1" :value="digit" @input="handleChange($event, idx)"
                @keydown="handleKeyDown($event, idx)" autocomplete="one-time-code" />
        </div>
        <div class="verify-code-button">
            <CustomButton label='Confirmar' />
        </div>
    </form>
</template>

<style scoped>
.verify-code-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.verify-code-title {
    color: #b91c1c;
    font-weight: bold;
    font-size: 1.875rem;
    margin-bottom: 3.75rem;
}

.verify-code-text {
    margin-bottom: 3.75rem;
}

.verify-code-inputs {
    width: 24rem;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
}

.verify-code-input {
    width: 3.75rem;
    height: 4rem;
    background-color: #d1d5db;
    border: 1px solid #6b7280;
    border-radius: 0.75rem;
    text-align: center;
    font-size: 1.5rem;
}

.verify-code-button {
    margin-bottom: 1.25rem;
    width: 25%;
}
</style>