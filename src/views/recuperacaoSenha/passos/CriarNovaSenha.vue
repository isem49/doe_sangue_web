<script setup lang="ts">
import { ref } from 'vue';
import CustomButton from '../../../components/CustomButton.vue';
import CustomInput from '../../../components/CustomInput.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineEmits<{
    next: []
    back: []
}>();

const password = ref('');
const confirmPassword = ref('');

const createNewPassword = () => {
    router.push({ name: "home-doador" })
}
</script>

<template>
    <div class="create-password-container">
        <h2 class="create-password-title">Cadastrar nova senha</h2>
        <p class="create-password-description">Digite a nova senha abaixo:</p>
        <div class="create-password-form">
            <CustomInput id="password" label="Senha:" placeholder="*******" type="password" v-model="password" />
            <CustomInput id="confirm-password" label="Confirmação de senha:" placeholder="*******" type="password"
                v-model="confirmPassword" />
        </div>
        <div class="create-password-button">
            <CustomButton label="Salvar" @click="createNewPassword()" />
        </div>
    </div>
</template>

<style scoped>
.create-password-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.create-password-title {
    color: #b91c1c;
    font-weight: bold;
    font-size: 1.875rem;
    margin-bottom: 3.75rem;
}

.create-password-description {
    margin-bottom: 1rem;
}

.create-password-form {
    width: 24rem;
    margin-bottom: 2.5rem;
}

.create-password-button {
    margin-bottom: 1.25rem;
    width: 25%;
}
</style>