<template>
    <div>
        <div v-for="tarea in tareas" :key="tarea.id">
            <Tarea :tarea="tarea" />
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

</script>

<style scoped>
</style>
