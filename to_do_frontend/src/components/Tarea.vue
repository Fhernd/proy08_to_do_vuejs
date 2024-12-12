<template>
    <div>
        <div>
            <input type="checkbox" :checked="tarea.completada" @change="completarTarea" />
            <span :class="{ completada: tarea.completada }">{{ tarea.texto }}</span>
            <button @click="eliminarTarea">Eliminar</button>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const emit = defineEmits(['tarea-eliminar']);

const props = defineProps({
    tarea: {
        type: Object,
        required: true
    },
})

const completarTarea = () => {
    props.tarea.completada = !props.tarea.completada
}

const eliminarTarea = () => {
    emit('tarea-eliminar', props.tarea.id);
}
</script>

<style scoped></style>
