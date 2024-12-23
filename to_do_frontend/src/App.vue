<template>
  <div class="flex flex-col items-center min-h-screen">
    <div class="w-full md:w-2/3 lg:w-1/2 text-center fixed top-0 bg-white z-10 shadow-md">
      <h1
        class="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 drop-shadow-md">
        LISTA DE TAREAS
      </h1>
      <FormularioAgregacion @tarea-agregada="manejarTareaAgregada" />
      <CategoriasTareas @tareas-filtrar="filtrarTareas" :filtroActivo="categoriaActiva" />
    </div>

    <div class="w-full md:w-2/3 lg:w-1/2 mt-52">
      <ListadoTareas :tareas="tareas" @tarea-eliminar="eliminarTarea" @tarea-actualizada="actualizarEstadoTarea" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

import ListadoTareas from './components/ListadoTareas.vue';
import FormularioAgregacion from './components/FormularioAgregacion.vue';
import CategoriasTareas from './components/CategoriasTareas.vue';

import { obtenerTareas } from "@/services/api";
import { crearTarea } from './services/api';

const tareas = ref([]);

onMounted(async () => {
  try {
    const tareasObtenidas = await obtenerTareas();
    tareas.value = tareasObtenidas;
  } catch (error) {
    console.error("Error al cargar las tareas:", error);
  }
});

const categoriaActiva = ref('todas');

const manejarTareaAgregada = (tarea) => {
  crearTarea(tarea)
    .then((tareaCreada) => {
      tareas.value = [...tareas.value, tareaCreada];
      aplicarFiltro();
    })
    .catch((error) => {
      console.error("Error al crear la tarea:", error);
    });
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
