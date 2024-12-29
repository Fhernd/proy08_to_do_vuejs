<template>
    <div class="flex justify-center space-x-4 mt-4 mb-2">
        <button @click="filtrarTareas('todas')" class="px-4 py-2 rounded transition" :class="filtroActivo === 'todas'
            ? 'bg-blue-500 text-white hover:bg-blue-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
            Todas las tareas
        </button>

        <button @click="filtrarTareas('pendientes')" class="px-4 py-2 rounded transition" :class="filtroActivo === 'pendientes'
            ? 'bg-yellow-500 text-white hover:bg-yellow-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
            Pendientes
        </button>

        <button @click="filtrarTareas('completadas')" class="px-4 py-2 rounded transition" :class="filtroActivo === 'completadas'
            ? 'bg-green-500 text-white hover:bg-green-600'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'">
            Finalizadas
        </button>
    </div>
</template>

<script setup>
const emit = defineEmits(['tareas-filtrar']);
const props = defineProps({
    filtroActivo: {
        type: String,
        required: true
    },
    cantidadTareas: {
        type: Number,
        required: true
    },
    cantidadPendientes: {
        type: Number,
        required: true
    },
    cantidadCompletadas: {
        type: Number,
        required: true
    }
});

const filtrarTareas = (filtro) => {
    emit('tareas-filtrar', filtro);
};
</script>

<style scoped></style>