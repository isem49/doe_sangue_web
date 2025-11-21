<script setup lang="ts">
import { PhGear, PhHouse, PhSignOut } from '@phosphor-icons/vue';
import SidebarOption from './SidebarOption.vue';

</script>

<template>
    <div class="sidebar">
        <section class="logo">
            <img src="../../assets/logo_vertical.svg" alt="logo-doe-sangue">
        </section>
        <section class="sidebar-options">
            <slot></slot>
        </section>
        <section class="config-logout">
            <SidebarOption :icon="PhGear" label="Configurações"/>
            <SidebarOption :icon="PhSignOut" label="Sair"/>
        </section>
    </div>
</template>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    padding: 50px 20px;
}

.logo {
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}

.sidebar-options {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 10px;
}

.config-logout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 10px;
}
</style>