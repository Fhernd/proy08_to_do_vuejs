<template>
    <div>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Tarea :tarea="tarea" @tarea-eliminar="eliminarTarea" />
        </div>
    </div>
</template>

<script setup>
import Tarea from './Tarea.vue';

defineProps({
    tareas: {
        type: Array,
        required: true
    }
})

const eliminarTarea = (id) => {
    console.log('Eliminar tarea', id)
}
</script>

<style scoped></style>
