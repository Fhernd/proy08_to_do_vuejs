<template>
    <div>
        <input type="text" v-model="contenidoTarea" @keyup.enter="agregarTarea"
            placeholder="Ingresa una tarea y presiona Enter" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contenidoTarea = ref('');
const emit = defineEmits(['tarea-agregada']);

const generarId = () => {
    return Math.random().toString(36).substr(2, 12);
};

const agregarTarea = () => {
    const tarea = {
        id: generarId(),
        texto: contenidoTarea.value,
        completada: false,
        fechaHora: new Date().toISOString()
    }

    contenidoTarea.value = '';
    emit('tarea-agregada', tarea);
};
</script>

<style scoped>
input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    box-sizing: border-box;
}
</style>
