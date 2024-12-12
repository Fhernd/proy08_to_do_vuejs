<template>
    <div>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Tarea :tarea="tarea" @tarea-eliminar="eliminarTarea" />
        </div>
    </div>
</template>

<script setup>
import Tarea from './Tarea.vue';
const emit = defineEmits(['tarea-eliminar']);

const props = defineProps({
    tareas: {
        type: Array,
        required: true
    }
})

const eliminarTarea = (id) => {
    emit('tarea-eliminar', id);
}
</script>

<style scoped></style>
