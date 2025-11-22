<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../../components/CustomButton.vue';
import CustomInput from '../../../components/CustomInput.vue';

const emit = defineEmits<{
    next: []
    back: []
}>();

const email = ref('');

const handleSubmit = () => {
    emit('next');
};
</script>

<template>
    <form @submit.prevent="handleSubmit" class="send-email-form">
        <h2 class="send-email-title">Receber um código de verificação de senha</h2>
        <p class="send-email-description">
            Informe o e-mail para qual deseja redefinir a senha.
        </p>
        <div class="send-email-input">
            <CustomInput id="email" label="E-mail:" placeholder="john.doe@email.com" v-model="email" />
        </div>
        <div class="send-email-button">
            <CustomButton label="Enviar" />
        </div>
    </form>
</template>

<style scoped>
.send-email-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.send-email-title {
    color: #b91c1c;
    font-weight: bold;
    font-size: 1.875rem;
    margin-bottom: 3.75rem;
}

.send-email-description {
    margin-bottom: 1rem;
}

.send-email-input {
    width: 24rem;
    margin-bottom: 2.5rem;
}

.send-email-button {
    margin-bottom: 1.25rem;
    width: 25%;
}
</style>