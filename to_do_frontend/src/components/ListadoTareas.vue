<template>
    <div>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Tarea :tarea="tarea" @tarea-eliminar="eliminarTarea" @tarea-toggle="completarTarea" />
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

const completarTarea = (id) => {
//   const tarea = props.tareas.find((t) => t.id === id);
//   if (tarea) {
//     tarea.completada = !tarea.completada;
//     emit('tarea-actualizada', props.tareas);
//   }
};

const eliminarTarea = (id) => {
    emit('tarea-eliminar', id);
}
</script>

<style scoped></style>
