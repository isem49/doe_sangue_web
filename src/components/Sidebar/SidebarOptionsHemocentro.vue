<script setup lang="ts">
import { PhCardsThree, PhChartPieSlice, PhClockUser, PhUser } from '@phosphor-icons/vue';
import { useRoute } from 'vue-router';
import SidebarOption from './SidebarOption.vue';

const route = useRoute();

</script>

<template>
    <SidebarOption :icon="PhChartPieSlice" label="Dashboard" :selected="route.name === 'dashboard'"/>
    <SidebarOption :icon="PhUser" label="Doadores" :selected="route.name === 'doadores'"/>
    <SidebarOption :icon="PhCardsThree" label="Banco de Sangue" :selected="route.name === 'banco-de-sangue'"/>
    <SidebarOption :icon="PhClockUser" label="Agendamentos" :selected="route.name === 'hemocentro-agendamentos'"/>
</template>

<style scoped>
</style>