<script setup>
import { ref } from 'vue';

import ListadoTareas from './components/ListadoTareas.vue';
import FormularioAgregacion from './components/FormularioAgregacion.vue';
import CategoriasTareas from './components/CategoriasTareas.vue';

import tareasData from './data/tareas';

const tareas = ref(tareasData);

const manejarTareaAgregada = (tarea) => {
  tareas.value.push(tarea);
};

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
};

const filtrarTareas = (filtro) => {
  switch (filtro) {
    case 'todas':
      tareas.value = tareasData;
      break;
    case 'pendientes':
      tareas.value = tareasData.filter((tarea) => !tarea.completada);
      break;
    case 'completadas':
      tareas.value = tareasData.filter((tarea) => tarea.completada);
      break;
    default:
      tareas.value = tareasData;
  }
};
</script>

<template>
  <div>
    <div class="text-center">
      <h1 class="text-4xl font-bold text-blue-600">¡Hola, Tailwind!</h1>
    </div>
    <!-- <img class="logo" src="./assets/logo.png" alt="Vue logo" /> -->
    <h1>Lista de tareas</h1>
    <FormularioAgregacion @tarea-agregada="manejarTareaAgregada" />
    <CategoriasTareas @tareas-filtrar="filtrarTareas" />
    <ListadoTareas :tareas="tareas" @tarea-eliminar="eliminarTarea" />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
