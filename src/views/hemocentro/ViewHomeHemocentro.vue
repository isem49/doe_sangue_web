<script setup lang="ts">
import { PhHandHeart } from '@phosphor-icons/vue';
import CustomButton from '../../components/CustomButton.vue';
import CustomInput from '../../components/CustomInput.vue';

const doadores = [
    {
        nome: "fulano",
        data: "01/11/2025 10:45",
        tipo_sangue: "O+"
    },
    {
        nome: "fulano",
        data: "01/11/2025 10:45",
        tipo_sangue: "O+"
    }
];
</script>

<template>
    <div class="view-container">
        <header>
            <h1>Olá, Hemocentro!</h1>
            <CustomButton label="Nova Doação" />
        </header>
        <main>
            <section class="secao-ultimas-doacoes">
                <div class="header-ultimas-doacoes">
                    <h2>Últimas Doações</h2>
                    <CustomInput label="Pesquisar" id="pesquisar" model-value="" placeholder="pesquisar"/>
                </div>
                <div class="listagem-ultimas-doacoes">
                    <div class="ultimas-doacoes" v-for="doador in doadores">
                        <div class="icon">
                            <PhHandHeart size="25" color="var(--primary-color)"/>
                        </div>
                        <div class="nome-data">
                            <p>{{ doador.nome }}</p>
                            <p>{{ doador.data }}</p>
                        </div>
                        <div class="tipo-sangue">
                            <p>{{ doador.tipo_sangue }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="grafico">

            </section>
        </main>
    </div>
</template>

<style scoped>
.view-container {
    display: flex;
    flex-direction: column;
    gap: 50px;
    height: 100%;
}

header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

header button {
    width: 200px;
}

main section {
    border:1px solid;
    border-color: var(--input-border-color);
    border-radius: 16px;
    height: 100%;
}

main section:nth-child(1) {
    width: 40%;
}
main section:nth-child(2) {
    width: 60%;
}

main {
    display: flex;
    flex-direction: row;
    gap: 20px;

    height: 100%;
}

.secao-ultimas-doacoes {
    height: 100%;
    padding: 30px;

    display: flex;
    flex-direction: column;

    gap: 20px;
}

.header-ultimas-doacoes {
    display: flex;
    flex-direction: column;

    gap: 20px;
}

.ultimas-doacoes {
    display: flex;
    flex-direction: row;

    align-items: center;
    justify-content: space-evenly;
    gap: 20px;

    width: 100%;

    border:1px solid;
    border-color: var(--input-border-color);
    border-radius: 16px;

    padding: 20px;
}

.listagem-ultimas-doacoes {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
</style>