<template>
    <div>
        <input type="text" v-model="contenidoTarea" @keyup.enter="agregarTarea"
            placeholder="Ingresa una tarea y presiona Enter" />
    </div>
</template>

<script setup>
import { ref } from 'vue';

const contenidoTarea = ref('');

const agregarTarea = () => {
    console.log('Agregar tarea', contenidoTarea.value);
    contenidoTarea.value = '';
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
