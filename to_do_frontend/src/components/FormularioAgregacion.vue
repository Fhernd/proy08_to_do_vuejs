<template>
    <div class="flex items-center justify-center mt-4 ml-4 mr-4">
        <div class="relative w-full max-w-lg">
            <input type="text" placeholder="Ingresa una tarea y presiona Enter"
                class="w-full px-4 py-2 pr-10 border rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                v-model="contenidoTarea" @keyup.enter="agregarTarea" />
            <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fas fa-pencil-alt text-gray-400"></i>
            </div>
        </div>
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
