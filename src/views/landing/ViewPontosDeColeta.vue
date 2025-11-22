    <script setup lang="ts">
    import { PhDropSimple, PhMapPin, PhTrafficSign } from '@phosphor-icons/vue';
    import IconButton from '../../components/IconButton.vue';
    import NavbarLanding from '../../components/NavbarLanding.vue';


    const hemocentros = [
        {
            nomeHemocentro: "Hemocentro A",
            tipo: "Banco de Sangue",
            endereco: "Rua tal 123, Bairro tal, Cidade tal - SP"
        },
        {
            nomeHemocentro: "Hemocentro A",
            tipo: "Banco de Sangue",
            endereco: "Rua tal 123, Bairro tal, Cidade tal - SP"
        },
        {
            nomeHemocentro: "Hemocentro A",
            tipo: "Banco de Sangue",
            endereco: "Rua tal 123, Bairro tal, Cidade tal - SP"
        }
    ];
</script>

<template>
    <div class="background">
        <NavbarLanding />
        <div class="view-hemocentros">
            <header class="title">
                <h1>Buscar Pontos de coleta</h1>
            </header>
            <main>
                <section class="hemocentros">
                    <div class="card-hemocentro" v-for="hemocentro in hemocentros" :key="hemocentro.nomeHemocentro">
                        <div class="nome-hemocentro">
                            <PhDropSimple size="25" color="var(--primary-color)" />
                            <p>{{ hemocentro.nomeHemocentro }}</p>
                        </div>
                        <div class="tipo">{{ hemocentro.tipo }}</div>
                        <div class="endereco">
                            <PhMapPin size="25" />
                            <p>{{ hemocentro.endereco }}</p>
                            <IconButton :icon="PhTrafficSign" secondary />
                        </div>
                    </div>
                </section>
                <section class="map">

                </section>
            </main>
        </div>
    </div>
</template>

<style scoped>
.background {
    background-color: var(--background-color);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}

.view-hemocentros {
    flex: 1;
    padding: 100px;
    display: flex;
    flex-direction: column;
}

.title {
    height: 15%;
    color: var(--secondary-color);
    margin-top: 50px;
    margin-bottom: 50px;
}

main {
    flex: 1;
    display: flex;
    flex-direction: row;
    gap: 35px;
}

.hemocentros {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    padding: 50px;

    border: 1px solid;
    border-color: var(--input-border-color);
    border-radius: 16px;

    width: 100%;
}

.nome-hemocentro {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 10px;
}

.endereco {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
}

.card-hemocentro {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 10px;
}

.map {
    background-color: lightgray;
    width: 100%;
    border-radius: 16px;
}
</style>