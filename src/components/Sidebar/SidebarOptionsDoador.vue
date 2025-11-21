<script setup lang="ts">
import { PhClockUser, PhHandHeart, PhHouse, PhSyringe } from '@phosphor-icons/vue';
import { useRoute } from 'vue-router';
import SidebarOption from './SidebarOption.vue';

const route = useRoute();

</script>

<template>
    <SidebarOption :icon="PhHouse" label="Página Inicial" :selected="route.name === 'pagina-inicial'"/>
    <SidebarOption :icon="PhSyringe" label="Buscar Hemocentros" :selected="route.name === 'buscar-hemocentros'"/>
    <SidebarOption :icon="PhHandHeart" label="Minhas Doações" :selected="route.name === 'minhas-doacoes'"/>
    <SidebarOption :icon="PhClockUser" label="Agendamentos" :selected="route.name === 'doador-agendamentos'"/>
</template>

<style scoped>
</style>