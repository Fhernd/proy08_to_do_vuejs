<template>
    <button @click="filtrarTareas('todas')">Todas las tareas</button>
    <button @click="filtrarTareas('pendientes')">Pendientes</button>
    <button @click="filtrarTareas('completadas')">Finalizadas</button>
</template>

<script setup>

import { ref } from 'vue'

const filtrarTareas = (filtro) => {
    console.log('Filtrar tareas', filtro)
}
</script>

<style scoped></style>
