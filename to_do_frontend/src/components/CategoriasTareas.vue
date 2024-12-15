<template>
    <div class="flex justify-center space-x-4 mt-4">
        <button @click="filtrarTareas('todas')"
            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
            Todas las tareas
        </button>
        <button @click="filtrarTareas('pendientes')"
            class="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition">
            Pendientes
        </button>
        <button @click="filtrarTareas('completadas')"
            class="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Finalizadas
        </button>
    </div>
</template>

<script setup>
const emit = defineEmits(['tareas-filtrar']);

const filtrarTareas = (filtro) => {
    emit('tareas-filtrar', filtro);
};
</script>

<style scoped></style>
