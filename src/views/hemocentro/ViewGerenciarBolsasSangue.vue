<script setup lang="ts">
import { useRoute } from 'vue-router';
import { RouteNames } from '../../router/route-names';
import CustomInput from '../../components/CustomInput.vue';
// import RadioButtom from '../../components/RadioButtom.vue';
import CustomButton from '../../components/CustomButton.vue';

const route = useRoute();
</script>

<template>
    <div class="view-container">
        <header>
            <h1 v-if="route.name === RouteNames.CRIAR_BOLSA_SANGUE_HEMOCENTRO">Cadastrar Bolsa de Sangue</h1>
            <h1 v-if="route.name === RouteNames.EDITAR_BOLSA_SANGUE_HEMOCENTRO">Detalhes da Bolsa de Sangue</h1>
        </header>
        <main>
            <div>
                <CustomInput label="Código da Bolsa de Sangue" id="codigo-bolsa-sangue" model-value="" placeholder="" />
            </div>
            
            <div class="template-inputs">
                <CustomInput label="Tipo Sanguíneo" id="tipo-sanguineo" model-value="" placeholder="" />
                <CustomInput label="Status da Bolsa" id="status-bolsa" model-value="" placeholder="" />
                <!-- <RadioButtom -group="fator-rh" label="Negativo" id="fator-rh" model-value="" />
                <RadioButtom -group="fator-rh" label="Positivo" id="fator-rh" model-value=""/> -->
                <CustomInput label="Volume da Bolsa de Sangue" id="volume-bolsa" model-value="" placeholder="" />
            </div>
            
            <div class="template-inputs">
                <CustomInput label="Local da Doação" id="local-doacao" model-value="" placeholder="" />
                <CustomInput label="Destino/Utilização" id="destino-utilizacao" model-value="" placeholder="" />
            </div>
            
            <div class="template-inputs">
                <CustomInput label="Data da Doação" id="data-doacao" model-value="" placeholder="" />
                <CustomInput label="Validade" id="validade" model-value="" placeholder="" />
                <CustomInput label="Doador" id="doador" model-value="" placeholder="" />
                <CustomInput label="Responsável pela Coleta" id="responsavel-coleta" model-value="" placeholder="" />
            </div>
            
            <div>
                <!-- <RadioButtom -group="teste-sorologico" label="Resultado dos Testes Sorológicos" id="teste-sorologico" model-value=""/>
                <RadioButtom -group="tipo-componente" label="Tipo de Componente" id="tipo-componente" model-value="asdasd" :value="'asdasd'"/> -->
            </div>

            <div class="action-btn" v-if="route.name === RouteNames.CRIAR_BOLSA_SANGUE_HEMOCENTRO">
                <CustomButton label="Salvar"/>
            </div>
            <div class="action-btn" v-if="route.name === RouteNames.EDITAR_BOLSA_SANGUE_HEMOCENTRO">
                <CustomButton label="Excluir" secondary red-font-color/>
                <CustomButton label="Editar"/>
            </div>
        </main>
    </div>
</template>

<style scoped>
.view-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

main {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.template-inputs {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    gap:20px
}

.template-inputs div {
    width: 100%;
}

.action-btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    gap: 20px;
    width: 100%;
}

.action-btn button {
    width: 200px;
}
</style>