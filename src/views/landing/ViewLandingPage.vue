<script setup lang="ts">
import { PhHeart } from '@phosphor-icons/vue';
import CardDepoimento from '../../components/CardDepoimento.vue';
import CustomButton from '../../components/CustomButton.vue';
import NavbarLanding from '../../components/NavbarLanding.vue';


</script>

<template>
    <div class="background">
        <NavbarLanding/>
        <main class="view-landing">
            <section class="welcome">
                <h1 class="poppins-regular">Olá! Somos o <span>Doe Sangue</span></h1>
                <p>Conectamos doadores voluntários com hemocentros credenciados através de uma plataforma segura, moderna e eficiente, contribuindo para salvar vidas em todo o Brasil.</p>
                <div class="welcome-buttons">
                    <CustomButton label="Sou Hemocentro" secondary/>
                    <CustomButton label="Quero Doar Sangue"/>
                </div>
            </section>
    
            <section class="depoimentos">
                <h1 class="poppins-regular">Depoimentos</h1>
                <p>Confira os depoimentos inspiradores de doadores e receptores de sangue!</p>
                <div class="cards-depoimentos">
                    <CardDepoimento nome="Luis" cidade="Embu das Artes - SP" depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros."/>
                    <CardDepoimento nome="Luis" cidade="Embu das Artes - SP" depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros."/>
                    <CardDepoimento nome="Luis" cidade="Embu das Artes - SP" depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros."/>
                    <CardDepoimento nome="Luis" cidade="Embu das Artes - SP" depoimento="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean aliquet sagittis sem a cursus. Praesent est mauris, commodo in libero ultrices, ullamcorper accumsan nulla. Ut tincidunt id mi et tempus. Morbi nec malesuada eros."/>
                </div>
                <div class="novo-depoimento">
                    <PhHeart size="50"/>
                    <p>Compartilhe sua experiência</p>
                    <p>Compartilhe sua experiência como doador ou receptor e incentive outras pessoas a fazerem a diferença. Sua história pode salvar vidas!</p>

                    <CustomButton label="Compartilhe sua história!" secondary red-font-color />
                </div>
            </section>
        </main>
    </div>
</template>

<style scoped>
.background {
    background-color: var(--background-color);
    height: 100%;
    padding-bottom: 50px;
}

.view-landing {
    margin-top: 100px;
    margin: 100px 100px 0 100px;
}

.welcome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    height: 80vh;
    gap: 50px;
}

.welcome h1 {
    font-size: 60px;
    color: var(--font-color);
}


.welcome p {
    text-align: center;
    width: 700px;
}

.welcome span {
    color: var(--primary-color);
}

.welcome-buttons {
    display: flex;
    flex-direction: row;
    gap: 60px;
}

.welcome-buttons button {
    width: 200px;
    font-size: 16px;
}

.depoimentos {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
}

.cards-depoimentos {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.novo-depoimento {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    color: #FFFFFF;

    padding: 40px;
    border-radius: 16px;
    max-width: 660px;
    gap: 20px;
    text-align: center;
}
</style>