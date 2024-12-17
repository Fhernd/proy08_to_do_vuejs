<template>
  <div>
    <h1 class="text-center text-blue-500 uppercase text-4xl">Lista de tareas</h1>
    <FormularioAgregacion @tarea-agregada="manejarTareaAgregada" />
    <CategoriasTareas @tareas-filtrar="filtrarTareas" :filtroActivo="categoriaActiva" />
    <ListadoTareas :tareas="tareas" @tarea-eliminar="eliminarTarea" @tarea-actualizada="actualizarEstadoTarea" />
  </div>
</template>

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
  aplicarFiltro();
};

const eliminarTarea = (id) => {
  tareas.value = tareas.value.filter((tarea) => tarea.id !== id);
};

const filtrarTareas = (filtro) => {
  categoriaActiva.value = filtro;
  aplicarFiltro();
};

const actualizarEstadoTarea = (id) => {
  tareas.value = tareas.value.map((tarea) => {
    if (tarea.id === id) {
      tarea.completada = !tarea.completada;
    }
    return tarea;
  });
  aplicarFiltro();
};

const aplicarFiltro = () => {
  switch (categoriaActiva.value) {
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
