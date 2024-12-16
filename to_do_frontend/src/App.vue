<script setup>
import { ref } from 'vue';

import ListadoTareas from './components/ListadoTareas.vue';
import FormularioAgregacion from './components/FormularioAgregacion.vue';
import CategoriasTareas from './components/CategoriasTareas.vue';

import tareasData from './data/tareas';

const tareas = ref(tareasData);
const categoriaActiva = ref('todas');

const manejarTareaAgregada = (tarea) => {
  tareas.value.push(tarea);
};

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
};

const filtrarTareas = (filtro) => {
  categoriaActiva.value = filtro;
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

const actualizarEstadoTarea = (id) => {
  tareas.value = tareas.value.map((tarea) => {
    if (tarea.id === id) {
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
};
</script>

<template>
  <div>
    <h1 class="text-center text-blue-500 uppercase text-4xl">Lista de tareas</h1>
    <FormularioAgregacion @tarea-agregada="manejarTareaAgregada" />
    <CategoriasTareas @tareas-filtrar="filtrarTareas" :filtroActivo="categoriaActiva" />
    <ListadoTareas :tareas="tareas" @tarea-eliminar="eliminarTarea" @tarea-actualizada="actualizarEstadoTarea" />
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
