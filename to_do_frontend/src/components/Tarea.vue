<template>
    <div>
        <div>
            <input type="checkbox" :checked="tarea.completada" @change="completarTarea" />
            <span :class="{ completada: tarea.completada }">{{ tarea.texto }}</span>
            <button @click="eliminarTarea">Eliminar</button>
        </div>
    </div>
</template>

<script>
import { defineProps } from 'vue'

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
    console.log('Eliminar tarea')
}

</script>

<style scoped></style>
