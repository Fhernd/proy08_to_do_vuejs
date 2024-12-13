<template>
    <button @click="filtrarTareas('todas')">Todas las tareas</button>
    <button @click="filtrarTareas('pendientes')">Pendientes</button>
    <button @click="filtrarTareas('completadas')">Finalizadas</button>
</template>

<script setup>
const emit = defineEmits(['tareas-filtrar']);

const filtrarTareas = (filtro) => {
    emit('tareas-filtrar', filtro);
}
</script>

<style scoped></style>
