<script setup lang="ts">
import { h } from 'vue';
import Table from '../../components/Table.vue';
import { PhEye } from '@phosphor-icons/vue';
import Badge from '../../components/Badge.vue';
import CustomButton from '../../components/CustomButton.vue';


const pageSize = 6;

const columns = [
    {
        header: "Doador",
        accessorKey: "doador",
    },
    {
        header: "Data de Nascimento",
        accessorKey: "data_nascimento",
    },
    {
        header: "Sexo",
        accessorKey: "sexo",
    },
    {
        header: "Tipo Sanguíneo",
        accessorKey: "tipo_sanguineo",
    },
    {
        header: "Número de doações",
        accessorKey: "qtd_doacoes",
    },
    {
        header: "Status de Elegibilidade",
        accessorKey: "status",
        cell: ({ row }) => {
            const status = row.original.status;

            const variantMap = {
                Aguardando: "warning",
                Apto: "success",
                Inapto: "danger",
            };

            return h(Badge, { variant: variantMap[status] }, () => status);
        }
    },
    {
        header: "Ações",
        cell: () => h(CustomButton, { icon: PhEye, label: "Visualizar Doador", secondary: true }),
    },
];


const data = [
    {
        doador: "Luana Yasmim",
        data_nascimento: "20/08/2003",
        sexo: 'F',
        tipo_sanguineo: "-O",
        qtd_doacoes: 10,
        status: "Apto",
    },
    {
        doador: "Luana Yasmim",
        data_nascimento: "20/08/2003",
        sexo: 'F',
        tipo_sanguineo: "-O",
        qtd_doacoes: 10,
        status: "Inapto",
    },
    {
        doador: "Luana Yasmim",
        data_nascimento: "20/08/2003",
        sexo: 'F',
        tipo_sanguineo: "-O",
        qtd_doacoes: 10,
        status: "Aguardando",
    },
    {
        doador: "Luana Yasmim",
        data_nascimento: "20/08/2003",
        sexo: 'F',
        tipo_sanguineo: "-O",
        qtd_doacoes: 10,
        status: "Apto",
    },
    {
        doador: "Luana Yasmim",
        data_nascimento: "20/08/2003",
        sexo: 'F',
        tipo_sanguineo: "-O",
        qtd_doacoes: 10,
        status: "Apto",
    },
];
</script>

<template>
    <header>
        <h1>Doadores</h1>
    </header>
    <main>
        <Table :data="data" :columns="columns" :pageSize="pageSize" />
    </main>
</template>

<style scoped></style>