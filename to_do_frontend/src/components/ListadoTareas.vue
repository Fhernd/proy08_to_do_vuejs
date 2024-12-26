<template>
    <div>
        <div class="flex justify-center items-center">
            <button v-if="categoriaActiva === 'completadas'" @click="eliminarTareasCompletadas"
                class="bg-red-500 text-white px-4 py-2 rounded-lg mb-4">
                Eliminar tareas finalizadas
            </button>
        </div>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Tarea :tarea="tarea" @tarea-eliminar="eliminarTarea" @tarea-toggle="completarTarea" />
        </div>
    </div>
</template>

<script setup>
import Tarea from './Tarea.vue';
const emit = defineEmits(['tarea-eliminar', 'tarea-actualizada', 'eliminar-tareas-completadas']);

const props = defineProps({
    tareas: {
        type: Array,
        required: true
    },
    categoriaActiva: {
        type: String,
        required: true
    }
})

const completarTarea = (id) => {
    emit('tarea-actualizada', id);
};

const eliminarTarea = (id) => {
    emit('tarea-eliminar', id);
}

const eliminarTareasCompletadas = () => {
    emit('eliminar-tareas-completadas');
};
</script>

<style scoped></style>
